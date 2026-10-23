'use strict';
function showLanguage(){
 const language=location.hash.toLowerCase()==='#en'?'en':'de';
 document.documentElement.lang=language;
 for(const id of ['de','en'])document.getElementById(id).hidden=id!==language;
 document.title=language==='en'?'Arcane Thread – Privacy':'Arcane Thread – Datenschutz';
 const navigation=document.querySelector('nav');
 navigation.setAttribute('aria-label',language==='en'?'Language':'Sprache');
 for(const link of navigation.querySelectorAll('a')){
  if(link.getAttribute('href')==='#'+language)link.setAttribute('aria-current','true');
  else link.removeAttribute('aria-current');
 }
}
window.addEventListener('hashchange',showLanguage);showLanguage();
