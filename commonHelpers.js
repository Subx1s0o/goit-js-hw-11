import{S as d,i as u}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const h="43901454-2f0f1ad212df2deb6dd93021b",f=o=>{const s=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${h}&q=${o}&${s}`).then(t=>{if(!t.ok)throw new Error("Помилка при отриманні запиту");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні даних",t),t})},p=new d(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),m=(o,s)=>{s.innerHTML="";let t="";o.forEach(r=>{t+=`<li class="card">
                <a class="card-link" href="${r.largeImageURL}">
                    <img  class="card-image" src="${r.webformatURL}" alt="${r.tags}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${r.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${r.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${r.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${r.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`}),s.insertAdjacentHTML("beforeend",t),p.refresh()},y=document.querySelector("form"),c=document.querySelector("input[data-search]"),l=document.querySelector(".loader-div"),n=document.querySelector(".list");y.addEventListener("submit",o=>{o.preventDefault(),l.style.visibility="visible";const s=c.value.trim();n.innerHTML="",f(s).then(t=>{const r=t.hits;l.style.visibility="hidden",r.length!==0&&s!==""?(m(r,n),c.value=""):u.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(t=>{console.error("Помилка при рендері картинок",t)})});
//# sourceMappingURL=commonHelpers.js.map
