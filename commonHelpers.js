import{S as a,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n="43901454-2f0f1ad212df2deb6dd93021b",d=i=>fetch(`https://pixabay.com/api/?key=${n}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Помилка при отриманні запиту");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні даних",t),t}),u=i=>{const t=document.querySelector(".list"),o=i.hits,l=document.querySelector(".loader-div");t.innerHTML="";let e="";const r=new a(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0});o.length!==0?(l.style.display="flex",o.forEach(s=>{e+=`<li class="card">
                <a class="card-link" href="${s.largeImageURL}">
                    <img class="card-image" src="${s.webformatURL}" alt="${s.tags}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${s.likes}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${s.views}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${s.comments}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${s.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`}),l.style.display="none",t.insertAdjacentHTML("beforeend",e),r.refresh()):c.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})},f=document.querySelector("form"),h=document.querySelector("input[data-search]");f.addEventListener("submit",i=>{i.preventDefault();const t=h.value;d(t).then(o=>{u(o)}).catch(o=>{console.error("Помилка при рендері картинок",o)})});
//# sourceMappingURL=commonHelpers.js.map
