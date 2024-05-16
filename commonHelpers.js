import{S as n,i as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="43901454-2f0f1ad212df2deb6dd93021b",h=i=>{const s=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${u}&q=${i}&${s}`).then(e=>{if(!e.ok)throw new Error("Помилка при отриманні запиту");return e.json()}).catch(e=>{throw console.error("Помилка при отриманні даних",e),e})},c=document.querySelector(".list"),f=new n(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),p=i=>{c.innerHTML="";let s="";i.forEach(e=>{s+=`<li class="card">
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
            </li>`}),c.insertAdjacentHTML("beforeend",s),f.refresh()},m=document.querySelector("form"),y=document.querySelector("input[data-search]"),l=document.querySelector(".loader-div");m.addEventListener("submit",i=>{i.preventDefault(),l.style.visibility="visible";const s=y.value;h(s).then(e=>{const o=e.hits;l.style.visibility="hidden",o.length!==0?p(o):d.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(e=>{console.error("Помилка при рендері картинок",e)})});
//# sourceMappingURL=commonHelpers.js.map
