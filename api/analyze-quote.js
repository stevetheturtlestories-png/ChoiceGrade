import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const allowedAnswers = ["Yes","Partly","Not Clear","No"];
function cleanText(value,max=240){return typeof value==="string"?value.trim().slice(0,max):"";}

export default async function handler(req,res){
 if(req.method!=="POST"){res.setHeader("Allow","POST");return res.status(405).json({error:"Method not allowed"});}
 if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:"Smart quote analysis is not configured"});
 try{
  const {quoteText,category,subtype,country,questions}=req.body||{};
  if(typeof quoteText!=="string"||quoteText.trim().length<20)return res.status(400).json({error:"Quote text is required"});
  const safeQuestions=Array.isArray(questions)?questions.slice(0,45).map(q=>({id:cleanText(q?.id,80),question:cleanText(q?.question,500)})).filter(q=>q.id&&q.question):[];
  const instructions=`You analyze contractor quote text for ChoiceGrade. Use ONLY facts supported by the supplied quote. Never infer that an item is included merely because it is normal practice. For every question choose Yes, Partly, Not Clear, or No. "No" means the quote affirmatively says the item is not provided/addressed; absence alone is "Not Clear". Confidence is 0 to 1. Evidence must be a short exact excerpt from the quote, maximum 18 words, or empty if no evidence. Extract fields only when clearly supported. Return JSON only.`;
  const input=JSON.stringify({project:{category:cleanText(category),subtype:cleanText(subtype),country:cleanText(country)},questions:safeQuestions,quote_text:quoteText.slice(0,45000)});
  const response=await client.responses.create({
   model:process.env.OPENAI_QUOTE_MODEL||"gpt-6-luna",instructions,input,max_output_tokens:6000,
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
  const parsed=JSON.parse(response.output_text),validIds=new Set(safeQuestions.map(q=>q.id));
  parsed.answers=(parsed.answers||[]).filter(x=>validIds.has(x.id)).map(x=>({...x,evidence:cleanText(x.evidence,220),reason:cleanText(x.reason,300)}));
  return res.status(200).json({...parsed,model:response.model});
 }catch(error){console.error("ChoiceGrade quote analysis error:",error);return res.status(500).json({error:"Smart quote analysis failed"});}
}
