(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function u(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(t){if(t.ep)return;t.ep=!0;const a=u(t);fetch(t.href,a)}})();const C=[{category:"cumbia",title:"Cumbias de Antología y Éxitos de Oro",description:"Grandes clásicos tropicales, Grupo 5, Agua Marina, Armonía 10, Los Shapis y cumbias que hacen vibrar a todas las generaciones.",icon:"disc",hits:["Motor y Motivo / Te Vas","Tu Amor Fue Una Mentira","El Casorio / El Aguajal","Cervecita Blanca / Dios Mío Haz que me Quiera"]},{category:"salsa",title:"Salsa & Merengue Explosivo",description:"Salsa dura, romántica y merengues de alta energía para mantener la pista de baile llena toda la noche.",icon:"flame",hits:["Mix Guarachas & Fania All Stars","La Rebelión / Cali Pachanguero","El Tiburón / Kulikitaka","La Bilirrubina / Procura"]},{category:"folclore",title:"Huaynos, Santiago & Folclore del Centro",description:"La auténtica identidad huancaína y del Valle del Mantaro. Santiago zapateado, huaylas y mulizas con fuerza e instrumentación viva.",icon:"music-2",hits:["Santiago Huancaíno Tradicional","Huaylas Moderno con Fuerza","Mix Chuto / Tunantada","Cantos del Mantaro"]},{category:"rock",title:"Rock en Español & Fiesta Variada",description:"Clásicos del rock ochentero y noventero, pop latino y música del momento para el momento cumbre del evento.",icon:"zap",hits:["Mix Soda Stereo / Enanitos Verdes","Lamento Boliviano / De Música Ligera","Mix Hombres G / Vilma Palma","Hora Loca Temática con Animación"]}],B=[{id:"matrimonios",title:"Bodas y Matrimonios de Ensueño",badge:"Más Solicitado",description:"Protocolo completo desde el ingreso de novios, vals ceremonial, ambientación musical y show bailable en vivo hasta el amanecer.",features:["Protocolo y Vals en Vivo","Animación profesional elegante","Repertorio adaptado a los novios","Show de Hora Loca interactiva"]},{id:"quinceaneros",title:"Quinceañeros & Fiestas de Promoción",badge:"Tendencia",description:"Energía desbordante para las quinceañeras y jóvenes. Mezcla perfecta de cumbias modernas, salsa, rock y hora loca con cotillón.",features:["Coreografías y animación dinámica","Efectos visuales e iluminación","DJ complementario en pausas","Música del momento y clásicos"]},{id:"patronales",title:"Fiestas Patronales & Aniversarios",badge:"Tradición Viva",description:"Presentaciones multitudinarias con sonido de alta potencia, huaynos, santiagos y cumbias para mayordomos y comités del centro del país.",features:["Sonido para exteriores y plazas","Santiago y huayno tradicional","Puntualidad y cumplimiento garantizado","Show continuo de alta resistencia"]},{id:"corporativos",title:"Eventos Corporativos & Empresas",badge:"Empresarial",description:"Cenas de gala, aniversarios institucionales y fiestas de fin de año con nivel sonoro controlado y máxima etiqueta.",features:["Facturación y formalidad","Música ambiental y bailable","Maestro de ceremonias opcional","Equipamiento estético y sobrio"]}];document.addEventListener("DOMContentLoaded",()=>{const h=document.getElementById("current-year");h&&(h.textContent=new Date().getFullYear());const l=document.getElementById("mobile-menu-btn"),u=document.getElementById("mobile-menu"),m=document.querySelectorAll(".mobile-nav-link");l&&u&&(l.addEventListener("click",()=>{u.classList.toggle("hidden")}),m.forEach(e=>{e.addEventListener("click",()=>{u.classList.add("hidden")})}));const t=document.getElementById("repertoire-grid"),a=document.querySelectorAll(".repertoire-tab-btn");function d(e="all"){if(!t)return;t.innerHTML="",(e==="all"?C:C.filter(o=>o.category===e)).forEach(o=>{const i=document.createElement("div");i.className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl border border-slate-800 hover:border-gold-500/40";const r=o.hits.map(n=>`
        <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
          <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
          <span>${n}</span>
        </li>
      `).join("");i.innerHTML=`
        <div>
          <div class="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-4">
            <svg class="w-6 h-6 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-lg mb-2">${o.title}</h3>
          <p class="text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed">${o.description}</p>
        </div>
        <div>
          <h4 class="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">Éxitos Destacados:</h4>
          <ul class="space-y-1.5">
            ${r}
          </ul>
        </div>
      `,t.appendChild(i)})}d("all"),a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(o=>{o.classList.remove("active","bg-gold-500","text-black","border-gold-500"),o.classList.add("bg-slate-900","text-slate-300","border-slate-800")}),e.classList.add("active","bg-gold-500","text-black","border-gold-500"),e.classList.remove("bg-slate-900","text-slate-300","border-slate-800");const s=e.getAttribute("data-cat");d(s)})}),a.forEach((e,s)=>{s===0?e.className="repertoire-tab-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all bg-gold-500 text-black border border-gold-500 shadow-md":e.className="repertoire-tab-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all bg-slate-900 text-slate-300 border border-slate-800 hover:border-gold-500/40"});const v=document.getElementById("services-grid");v&&(v.innerHTML="",B.forEach(e=>{const s=document.createElement("div");s.className="glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl border border-slate-800 hover:border-gold-500/40 relative overflow-hidden";const o=e.features.map(i=>`
        <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
          <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${i}</span>
        </li>
      `).join("");s.innerHTML=`
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[11px] font-bold uppercase tracking-wider">
              ${e.badge}
            </span>
          </div>
          <h3 class="text-white font-bold text-xl mb-3">${e.title}</h3>
          <p class="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">${e.description}</p>
        </div>
        <div>
          <h4 class="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Incluye:</h4>
          <ul class="space-y-2 mb-6">
            ${o}
          </ul>
          <a href="#cotizar" class="block text-center py-2.5 rounded-xl bg-slate-900 hover:bg-gold-500 hover:text-black border border-slate-700 hover:border-gold-500 text-xs font-bold text-slate-200 transition-all uppercase tracking-wider">
            Cotizar Paquete
          </a>
        </div>
      `,v.appendChild(s)}));const y=document.getElementById("quote-form"),p=document.getElementById("client-name"),g=document.getElementById("event-type"),c=document.getElementById("event-date");if(c){const e=new Date().toISOString().split("T")[0];c.min=e}const b=document.getElementById("event-location"),f=document.getElementById("event-notes"),E=document.getElementById("message-preview");function w(){var L,M,k;const e=((L=p==null?void 0:p.value)==null?void 0:L.trim())||"[Tu Nombre]",s=(g==null?void 0:g.value)||"Evento",o=(c==null?void 0:c.value)||"[Fecha]",i=((M=b==null?void 0:b.value)==null?void 0:M.trim())||"[Ciudad/Lugar]",r=(k=f==null?void 0:f.value)==null?void 0:k.trim();let n=`Hola Show Rumba Latina (Jesús Rojas Ochoa),
`;return n+=`Mi nombre es ${e}. Deseo solicitar cotización y disponibilidad para mi evento:

`,n+=`• Tipo de Evento: ${s}
`,n+=`• Fecha Estimada: ${o}
`,n+=`• Lugar / Ciudad: ${i}
`,r&&(n+=`• Detalles / Requerimientos: ${r}
`),n+=`
Quedo atento a su respuesta para coordinar la contratación. ¡Muchas gracias!`,n}function x(){if(!E)return;const e=w();E.textContent=e}[p,g,c,b,f].forEach(e=>{e&&(e.addEventListener("input",x),e.addEventListener("change",x))}),x(),y&&y.addEventListener("submit",e=>{e.preventDefault();const s=w(),o="51964966904",i=encodeURIComponent(s),r=`https://wa.me/${o}?text=${i}`,n=window.open(r,"_blank","noopener,noreferrer");(!n||n.closed||typeof n.closed>"u")&&(window.location.href=r)})});
