import{S as n,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const u="43901454-2f0f1ad212df2deb6dd93021b",h=i=>{const r=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${u}&q=${i}&${r}`).then(e=>{if(!e.ok)throw new Error("Помилка при отриманні запиту");return e.json()}).catch(e=>{throw console.error("Помилка при отриманні даних",e),e})},c=document.querySelector(".list"),f=new n(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),p=i=>{c.innerHTML="";let r="";i.forEach(e=>{r+=`<li class="card">
                <a class="card-link" href="${e.largeImageURL}">
                    <img  class="card-image" src="${e.webformatURL}" alt="${e.tags}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${e.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${e.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${e.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${e.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`}),c.insertAdjacentHTML("beforeend",r),f.refresh()},m=document.querySelector("form"),y=document.querySelector("input[data-search]"),l=document.querySelector(".loader-div");m.addEventListener("submit",i=>{i.preventDefault(),l.style.visibility="visible";const r=y.value.trim();h(r).then(e=>{const o=e.hits;l.style.visibility="hidden",o.length!==0&&r!==""?p(o):d.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(e=>{console.error("Помилка при рендері картинок",e)})});
//# sourceMappingURL=commonHelpers.js.map
