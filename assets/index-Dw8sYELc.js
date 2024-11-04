(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();let l=[],o=[];function p(n){n.oninput=e=>{o=[];for(let t=0;t<e.target.files.length;t++)if(d(e.target.files[t].name)){o.push({name:e.target.files[t].name,text:` Файл ${e.target.files[t].name} уже существует`});continue}else if(g(e.target.files[t].type)===!0)if(m(e.target.files[t].size))l.push(e.target.files[t]);else{o.push({name:e.target.files[t].name,text:`Превышен максимальный размер файла ${e.target.files[t].name}`});continue}else{o.push({name:e.target.files[t].name,text:`Неверный формат файла ${e.target.files[t].name}`});continue}c(l),a(o),console.log(o),console.log(l)}}function f(n){n.onsubmit=function(e){e.preventDefault(),l.length>5?alert("Превышено допустимое количество файлов: 5"):(alert("Данные успешно загружены"),l=[],o=[],c(l),a(o))}}function c(n){const e=document.querySelector(".upload__list");e.innerHTML="";for(let r=0;r<n.length;r++){let i=document.createElement("li");e.appendChild(i),i.innerHTML=` 
        <span>
         <p> Название:  ${n[r].name} </p>
          <p>Формат:  ${n[r].type}</p>
          <p>Размер:  ${n[r].size} </p>
        </span>
        <span>
          <img src='${URL.createObjectURL(n[r])}' />
        </span>
        <span>
          <button data-index='${r}' class='delete__btn'>Удалить</button>
        </span>
      `}const t=document.querySelectorAll(".delete__btn");for(let r=0;r<t.length;r++)t[r].onclick=function(){y(t[r].getAttribute("data-index"))}}function d(n){return l.length!==0?l.some(e=>e.name===n):!1}function m(n){return n<=10485760}function g(n){return["image/jpeg","image/png","image/jpg"].some(t=>t===n)}function a(n){const e=document.querySelector(".errors__list");e.innerHTML=" ";for(let t=0;t<n.length;t++){let r=document.createElement("li");e.appendChild(r),r.innerHTML=n[t].text}}function y(n){l.splice(n,1),c(l)}document.querySelector("#app").innerHTML=`
  <div class='upload'>
    <h3 class='upload__title'>Вы можете загрузить до 5 файлов JPG, JPEG, PNG, размер одного — до 10 МБ</h3>
    <form action='/' class='upload__form'>
      <input  class='upload__input' title=" "  type='file'  multiple />
      <button type='submit'>Загрузить</button>
    </form>
    <ul class='errors__list'></ul>
    <ul class='upload__list'>
    </ul>
  </div>
`;p(document.querySelector(".upload__input"));f(document.querySelector(".upload__form"));
