const cfg=window.CHOICEGRADE_CONFIG||{};
const msg=t=>document.getElementById("authMessage").textContent=t;
let sb=null;
if(cfg.supabaseUrl&&cfg.supabaseAnonKey&&window.supabase)sb=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey);
const params=new URLSearchParams(location.search);
const returnTo=params.get("return")||"app.html";
const plan=params.get("plan");
if(plan)localStorage.setItem("choicegrade-pending-plan",plan);

async function signIn(){
 if(!sb){msg("Supabase is not connected yet. Add your project URL and anon key to config.js.");return;}
 const email=document.getElementById("email").value.trim(),password=document.getElementById("password").value;
 const {error}=await sb.auth.signInWithPassword({email,password});if(error){msg(error.message);return;}location.href=returnTo;
}
async function signUp(){
 if(!sb){msg("ChoiceGrade account service is temporarily unavailable. Please try again.");return;}
 const email=document.getElementById("email").value.trim(),password=document.getElementById("password").value;
 if(!email){msg("Enter your email address to create your account.");document.getElementById("email").focus();return;}
 if(password.length<8){msg("Create a password with at least 8 characters.");document.getElementById("password").focus();return;}
 msg("Creating your account…");
 const {data,error}=await sb.auth.signUp({email,password,options:{emailRedirectTo:new URL(returnTo,location.href).href}});
 if(error){msg(error.message);return;}
 // Supabase can intentionally return an obfuscated user object for an
 // already-registered email. Do not tell the customer a confirmation was
 // sent unless this response represents a newly accepted signup.
 const identities=data.user?.identities;
 if(!data.user||(!data.session&&Array.isArray(identities)&&identities.length===0)){
  msg("We couldn't create a new account with that email. It may already have a ChoiceGrade account. Try signing in, use the email sign-in link, or use a different email.");
  return;
 }
 if(data.session){msg("Account created. Continuing to checkout…");setTimeout(()=>location.href=returnTo,400);return;}
 localStorage.setItem("choicegrade-awaiting-confirmation",email);
 location.href="account-created.html";
}
async function sendMagicLink(){
 if(!sb){msg("Supabase is not connected yet. Add your project URL and anon key to config.js.");return;}
 const email=document.getElementById("email").value.trim();if(!email){msg("Enter your email first.");return;}
 const {error}=await sb.auth.signInWithOtp({email,options:{emailRedirectTo:new URL(returnTo,location.href).href}});
 msg(error?error.message:"Check your email for your ChoiceGrade sign-in link.");
}