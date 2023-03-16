function f(){import.meta.url,import("_").catch(()=>1);async function*o(){}}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=async o=>{const r="https://api.github.com/search/repositories?q=",s=await fetch(`${r}${o}`);if(!s.ok)throw new Error(`Could not fetch ${r}, received ${s.status}`);return await(await s.json()).items},m=(o,r,s,n,e)=>{const t=document.createElement("li");return t.classList.add("repos__list-item"),t.innerHTML=`
        <a 
            class="repos__link link-repos" 
            href=${o} 
            target="_blank" 
            title="Ссылка на репозиторий"
            >
            ${r}
        </a>
        <div class="repos__author-wrapper">
            <span class="repos__author">Автор:</span>
            <a
                class="repos__author-link link-repos"
                href=${n}
                target="_blank"
                title="Ссылка на страницу автора"
                >
                ${s}
            </a>
            <img
                class="repos__author-avatar"
                src=${e}
                alt="Author"
            />
        </div>`,t},h=()=>{const o=document.querySelector(".repos__list"),r=document.querySelector(".header__form"),s=document.querySelector(".header__input"),n=document.querySelector(".header__search"),e=document.querySelector(".repos__message-list-loading"),t=document.querySelector(".repos__message-not-found"),c=document.querySelector(".repos__message-list-empty"),d=document.querySelector(".repos__message-error");r.addEventListener("submit",l=>{l.preventDefault(),(!s.value||s.value.trim()==="")&&(s.addEventListener("input",()=>{d.classList.add("repos__message-error_hidden"),n.classList.remove("header__search_red")}),o.innerHTML="",c.classList.add("repos__message-list-empty_hidden"),t.classList.add("repos__message-not-found_hidden"),d.classList.remove("repos__message-error_hidden"),s.focus(),document.querySelector(".repos__error-text").textContent="Недостаточное количество символов для поиска",n.classList.add("header__search_red"),s.setAttribute("disabled")),c.classList.add("repos__message-list-empty_hidden"),e.classList.remove("repos__message-list-loading_hidden"),t.classList.add("repos__message-not-found_hidden"),o.innerHTML="",p(s.value).then(a=>{console.log(a),a.splice(10),a.length||t.classList.remove("repos__message-not-found_hidden"),a.forEach(i=>{let u=i.name.length>30?`${i.name.slice(0,30)}...`:i.name;const _=m(i.html_url,u,i.owner.login,i.owner.html_url,i.owner.avatar_url);o.append(_)})}).catch(a=>{console.error(a),s.addEventListener("input",()=>d.classList.add("repos__message-error_hidden")),d.classList.remove("repos__message-error_hidden"),document.querySelector(".repos__error-text").textContent=a}).finally(()=>{e.classList.add("repos__message-list-loading_hidden"),l.target.reset()})})};window.addEventListener("DOMContentLoaded",()=>{h()});export{f as __vite_legacy_guard};
