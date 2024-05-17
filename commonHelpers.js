import{S as u,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const h="43901454-2f0f1ad212df2deb6dd93021b",f=i=>{const o=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${h}&q=${i}&${o}`).then(t=>{if(!t.ok)throw new Error("Помилка при отриманні запиту");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні даних",t),t})},p=new u(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),m=(i,o)=>{o.innerHTML="";let t="";i.forEach(r=>{t+=`<li class="card">
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
            </li>`}),o.insertAdjacentHTML("beforeend",t),p.refresh()},y=document.querySelector("form"),l=document.querySelector("input[data-search]"),n=document.querySelector(".loader-div"),d=document.querySelector(".list");y.addEventListener("submit",i=>{i.preventDefault(),n.style.visibility="visible";const o=l.value.trim();d.innerHTML="",f(o).then(t=>{const r=t.hits;n.style.visibility="hidden",r.length!==0&&o!==""?(m(r,d),l.value=""):c.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(t=>{console.error("Помилка при рендері картинок",t),c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",close:!1,timeout:1e16})})});
//# sourceMappingURL=commonHelpers.js.map
