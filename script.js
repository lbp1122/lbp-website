const langToggle=document.getElementById('langToggle');
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
let lang=localStorage.getItem('lbpLang')||'en';
function applyLang(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.body.classList.toggle('zh',lang==='zh');
  document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang];});
  langToggle.textContent=lang==='en'?'中文':'English';
  localStorage.setItem('lbpLang',lang);
}
langToggle.addEventListener('click',()=>{lang=lang==='en'?'zh':'en';applyLang();});
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
applyLang();
