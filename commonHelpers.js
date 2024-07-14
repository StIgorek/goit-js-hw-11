import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){return s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:c,downloads:d})=>`
  <li class="gallery-card">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${t}" 
          alt="${a}" 
          width="360"
          height="152" 
        />
      </a>
      <div class="discribe-box">
        <ul class="discribe-list">
          <li class="discribe-item">
            <h2 class="discribe-title">Likes</h2>
            <p class="discribe-text">${e}</p>
          </li>
          <li class="discribe-item">
            <h2 class="discribe-title">Views</h2>
            <p class="discribe-text">${r}</p>
          </li>
          <li class="discribe-item">
            <h2 class="discribe-title">Comments</h2>
            <p class="discribe-text">${c}</p>
          </li>
          <li class="discribe-item">
            <h2 class="discribe-title">Downloads</h2>
            <p class="discribe-text">${d}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("")}const n={key:"44853639-2309de7343cad235f23b575f4",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function h(s){return n.q=s,`https://pixabay.com/api/?${new URLSearchParams(n).toString()}`}function p(s){return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};i.searchForm.addEventListener("submit",g);function g(s){s.preventDefault();const o=s.currentTarget.elements.searchtext.value.toLowerCase().trim();if(i.gallery.innerHTML="",i.loader.classList.add("loader"),o===""){l(),i.loader.classList.remove("loader");return}p(h(o)).then(a=>{i.loader.classList.remove("loader");const e=a.hits;e.length===0&&l(),i.gallery.insertAdjacentHTML("beforeend",m(e)),y.refresh()}).catch(l).finally(()=>i.searchForm.reset())}function l(s){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
