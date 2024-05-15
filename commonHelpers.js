(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const n="43901454-2f0f1ad212df2deb6dd93021b",l=s=>fetch(`https://pixabay.com/api/?key=${n}&q=${s}&image_type=photo`).then(t=>{if(!t.ok)throw new Error("Помилка при отриманні запиту");return t.json()}).catch(t=>{throw console.error("Помилка при отриманні даних",t),t}),a=s=>{const t=document.querySelector(".list"),o=s.hits;let i="";o.forEach(e=>{i+=`<li class="card">
                <img src="${e.previewURL}" alt="${e.tags}" /> 
                <div class="main-content">
                    <ul class="card-list">
                        <li>
                            <h3>
                                likes
                            </h3>
                            <p>${e.likes}</p>
                        </li>
                        <li>
                            <h3>
                                views
                            </h3>
                            <p>${e.views}</p>
                        </li>
                        <li>
                            <h3>
                                comments
                            </h3>
                            <p>${e.comments}</p>
                        </li>
                        <li>
                            <h3>
                                downloads
                            </h3>
                            <p>${e.downloads}</p>
                        </li>
                    </ul>
                </div>
            </li>`,console.log(e)}),t.insertAdjacentHTML("beforeend",i)},d=document.querySelector("form"),u=document.querySelector("input[data-search]");d.addEventListener("submit",s=>{s.preventDefault();const t=u.value;l(t).then(o=>{a(o)}).catch(o=>{console.error("Помилка при рендері картинок",o)})});
//# sourceMappingURL=commonHelpers.js.map
