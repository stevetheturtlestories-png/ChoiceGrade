import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const allowedAnswers = ["Yes","Partly","Not Clear","No"];
function cleanText(value,max=240){return typeof value==="string"?value.trim().slice(0,max):"";}

export default async function handler(req,res){
 if(req.method!=="POST"){res.setHeader("Allow","POST");return res.status(405).json({error:"Method not allowed"});}
 if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:"Smart quote analysis is not configured"});
 try{
  const {quoteText,imageDataUrls,category,subtype,country,questions}=req.body||{};
  const hasText=typeof quoteText==="string"&&quoteText.trim().length>=20;
  const images=Array.isArray(imageDataUrls)?imageDataUrls.slice(0,10).filter(x=>typeof x==="string"&&/^data:image\/(png|jpeg|jpg|webp);base64,/i.test(x)):[];
  if(!hasText&&!images.length)return res.status(400).json({error:"Quote text or image is required"});
  if(images.some(x=>x.length>14_000_000))return res.status(413).json({error:"A quote image is too large"});
  const safeQuestions=Array.isArray(questions)?questions.slice(0,45).map(q=>({id:cleanText(q?.id,80),question:cleanText(q?.question,500)})).filter(q=>q.id&&q.question):[];
  const instructions=`You analyze contractor quotes for ChoiceGrade. The source may be an original quote image, extracted text, or both. When one or more images are supplied, treat them as consecutive pages of ONE contractor quote. Read all pages before answering. Never copy or infer a contractor name from prior context; if the supplied quote does not identify the company, return contractor_name as null. Preserve relationships between headings, columns, line items, quantities, prices, totals and fine print. Use ONLY facts supported by the supplied quote. Never infer that an item is included merely because it is normal practice. For every question choose Yes, Partly, Not Clear, or No. "No" means the quote affirmatively says the item is not provided/addressed; absence alone is "Not Clear". Confidence is 0 to 1. Evidence must be a short exact excerpt from the quote, maximum 18 words, or empty if no evidence. Extract fields only when clearly supported. Return JSON only.`;
  const extractionRules=`For quote fields, distinguish the full project price from line-item prices, discounts, maintenance plans, and deposits. Only populate total_price if the document explicitly identifies an overall total, amount due, or unambiguous single quoted project price. If the quote has multiple charges without a clear final total, return null; never select an arbitrary line-item amount. Identify the contractor from the company logo/header/contact information, never from page markers such as --- PAGE 1 ---. For HVAC, extract equipment brand/model/efficiency only when the actual proposed equipment is specified; do not infer a model or efficiency from the brand alone. Separate manufacturer parts/equipment warranty, heat-exchanger warranty, contractor workmanship/labour warranty, and maintenance-plan benefits. Parts warranty must not contain workmanship or service-plan terms; labour warranty must not contain manufacturer parts terms. Do not turn an unrelated 3-year service benefit into a 3-year parts warranty. When different warranty periods are listed, preserve their correct subjects and don't merge them into one field. If evidence is ambiguous, use null rather than guessing. The extracted field values should be brief, factual, and grounded in the uploaded quote.`;
  const project={category:cleanText(category),subtype:cleanText(subtype),country:cleanText(country)};
  const content=[{type:"input_text",text:JSON.stringify({project,questions:safeQuestions,quote_text:hasText?quoteText.slice(0,45000):""})}];
  for(const imageDataUrl of images)content.push({type:"input_image",image_url:imageDataUrl,detail:"high"});
  const response=await client.responses.create({
   model:process.env.OPENAI_QUOTE_MODEL||"gpt-4.1-mini",instructions:instructions+" "+extractionRules,input:[{role:"user",content}],max_output_tokens:8000,
   text:{format:{type:"json_schema",name:"choicegrade_quote_analysis",strict:true,schema:{
    type:"object",additionalProperties:false,
    properties:{
     fields:{type:"object",additionalProperties:false,properties:{
      contractor_name:{type:["string","null"]},total_price:{type:["number","null"]},deposit:{type:["number","null"]},
      price_type:{type:["string","null"],enum:["Fixed Price","Estimate","Time & Materials","Not Sure",null]},
      availability:{type:["string","null"]},duration:{type:["string","null"]},
      equipment:{type:"object",additionalProperties:false,properties:{brand:{type:["string","null"]},model:{type:["string","null"]},efficiency:{type:["string","null"]},parts_warranty:{type:["string","null"]},labour_warranty:{type:["string","null"]}},required:["brand","model","efficiency","parts_warranty","labour_warranty"]}
     },required:["contractor_name","total_price","deposit","price_type","availability","duration","equipment"]},
     answers:{type:"array",items:{type:"object",additionalProperties:false,properties:{id:{type:"string"},answer:{type:"string",enum:allowedAnswers},confidence:{type:"number",minimum:0,maximum:1},evidence:{type:"string"},reason:{type:"string"}},required:["id","answer","confidence","evidence","reason"]}}
    },required:["fields","answers"]
   }}}
  });
  if(!response.output_text){console.error("Quote AI empty response",{status:response.status,incomplete_details:response.incomplete_details,request_id:response._request_id});return res.status(502).json({error:response.status==="incomplete"?"AI response was cut off before completing. No fields extracted.":"AI returned no readable response.",code:"AI_EMPTY_RESPONSE"});}
  let parsed;try{parsed=JSON.parse(response.output_text);}catch(parseError){console.error("Quote AI invalid JSON",{status:response.status,length:response.output_text.length,request_id:response._request_id});return res.status(502).json({error:"AI returned an invalid response. No fields extracted.",code:"AI_INVALID_RESPONSE"});}
  const validIds=new Set(safeQuestions.map(q=>q.id));
  parsed.answers=(parsed.answers||[]).filter(x=>validIds.has(x.id)).map(x=>({...x,evidence:cleanText(x.evidence,220),reason:cleanText(x.reason,300)}));
  return res.status(200).json({...parsed,model:response.model});
 }catch(error){const status=Number(error?.status)||500;const code=error?.code||error?.type||"SERVER_ERROR";console.error("ChoiceGrade quote analysis error:",{status,code,message:error?.message,request_id:error?.request_id});const message=status===401?"OpenAI API key was rejected. Check Vercel OPENAI_API_KEY.":status===429?"OpenAI rate limit or insufficient API credits. Check OpenAI billing.":status===413?"Quote image exceeds the upload size limit.":status===400?"OpenAI rejected the analysis request. Check model and response schema.":status===408||status===504?"Quote analysis timed out.":status>=500&&status<600&&status!==500?"OpenAI service is temporarily unavailable.":"Quote analysis encountered a server error.";return res.status(status>=400&&status<=599?status:500).json({error:message,code:String(code).slice(0,100)});}
}
