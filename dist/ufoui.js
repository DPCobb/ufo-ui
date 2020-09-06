!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class i extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super(),this.open=!1}connectedCallback(){const t=this.getAttribute("icon");this.classList.add("ufo-icon");const e=document.createElement("i");e.setAttribute("class",t),this.appendChild(e),this.setAttribute("tabindex",0),this.open=!0}attributeChangedCallback(t,e,s){if(s!=e&&this.open){this.querySelector(e).setAttribute("class",s)}}}class n extends HTMLElement{constructor(){super(),this.open=!1}connectedCallback(){this.classList.add("ufo-tip-text"),this.open=!0}}customElements.define("ufo-tip-text",n);class a extends HTMLElement{static get observedAttributes(){return["tip"]}constructor(){super()}connectedCallback(){const t=this.getAttribute("tip");document.createElement("ufo-tip-text").textContent=t,this.classList.add("ufo-tooltip"),this.addEventListener("mouseenter",(function(){this.setAttribute("show","")})),this.addEventListener("mouseleave",(function(){this.removeAttribute("show")})),this.setAttribute("tabindex",0),this.open=!0}attributeChangedCallback(t,e,s){this.open&&e!==s&&(this.querySelector("ufo-tip-text").textContent=s)}}class o extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("ufo-grid-of-equals")}}class c extends HTMLElement{static get observedAttributes(){return["msg","type","dark"]}constructor(){super(),this.open=!1}closeAlert(){["success","error","warning","system"].forEach(t=>{this.classList.contains(t)&&this.classList.remove(t)}),this.setAttribute("msg",""),this.setAttribute("type","")}darkMode(){return this.hasAttribute("dark")}setMessage(t){this.setAttribute("msg",t)}alertType(t){this.setAttribute("type",t)}connectedCallback(){const t=this.getAttribute("msg"),e=this.getAttribute("type");this.classList.add("ufo-alert"),this.hasAttribute("dark")&&this.dark,0==this.darkMode()?this.classList.add(e):this.classList.add(e+"--dark");const s=document.createElement("p");s.textContent=t;const i=document.createElement("ufo-icon");i.setAttribute("name","close"),i.setAttribute("icon-btn",""),i.addEventListener("click",this.closeAlert.bind(this)),this.appendChild(s),this.appendChild(i),this.open=!0}addMessage(t){this.querySelector("p").textContent=t}changeType(t,e){this.classList.remove(e),this.classList.add(t)}attributeChangedCallback(t,e,s){s!=e&&1==this.open&&(0==this.darkMode()?("msg"==t&&this.addMessage(s),"type"==t&&this.changeType(s,e)):("msg"==t&&this.addMessage(s),"type"==t&&this.changeType(s+"--dark",e+"--dark")))}}class r extends HTMLElement{static get observedAttributes(){return["text","type","dark"]}constructor(){super(),this.open=!1}darkMode(){return this.hasAttribute("dark")}connectedCallback(){const t=this.getAttribute("text"),e=this.getAttribute("type");this.textContent=t,this.classList.add("ufo-button"),this.hasAttribute("dark")&&this.dark,0==this.darkMode()?this.classList.add(e):this.classList.add(e+"--dark"),this.setAttribute("tabindex",0),this.open=!0}adjustAttributes(t,e,s,i){"text"==t&&(this.textContent=s),i?"type"==t&&(this.classList.remove(e+"--dark"),this.classList.add(s+"--dark")):"type"==t&&(this.classList.remove(e),this.classList.add(s))}attributeChangedCallback(t,e,s){this.open&&this.adjustAttributes(t,e,s,this.darkMode())}}class d extends HTMLElement{static get observedAttributes(){return["text","type"]}constructor(){super(),this.open=!1}darkMode(){return this.hasAttribute("dark")}change(t,e){this.setAttribute(t,e)}connectedCallback(){const t=this.getAttribute("text"),e=this.getAttribute("type");this.textContent=t,this.classList.add("ufo-pill"),this.hasAttribute("dark")&&this.dark,0==this.darkMode()?this.classList.add(e):this.classList.add(e+"--dark"),this.setAttribute("tabindex",0),this.open=!0}adjustPill(t,e,s,i){0==i?("text"==t&&(this.textContent=e),"type"==t&&(this.classList.remove(s),this.classList.add(e))):("text"==t&&(this.textContent=e),"type"==t&&(this.classList.remove(s+"--dark"),this.classList.add(e+"--dark")))}attributeChangedCallback(t,e,s){this.open&&s!=e&&this.adjustPill(t,s,e,this.darkMode())}}class l extends HTMLElement{constructor(){super(),this.open=!1}connectedCallback(){const t=this.getAttribute("title"),e=document.createElement("h2");e.textContent=t,this.classList.add("ufo-card-title"),this.appendChild(e),this.setAttribute("tabindex",0)}}customElements.define("ufo-card-title",l);class u extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("ufo-card-body")}}customElements.define("ufo-card-body",u);class h extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("ufo-card-footer")}}customElements.define("ufo-card-footer",h);class p extends HTMLElement{constructor(){super()}connectedCallback(){if(this.getAttribute("img")){const t=this.getAttribute("img"),e=document.createElement("div");e.setAttribute("class","img"),e.setAttribute("style",`background-image:url("${t}")`),this.appendChild(e)}this.classList.add("ufo-card-image")}}customElements.define("ufo-card-image",p);class b extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("ufo-card")}}class m extends HTMLElement{static get observedAttributes(){}constructor(){super(),this.attachShadow({mode:"open"}),this.open=!1}toggleState(){0==this.open?(this.open=!0,this.classList.toggle("open")):(this.open,this.classList.toggle("open"),this.classList.toggle("close"))}toggle(){this.toggleState()}connectedCallback(){const{shadowRoot:t}=this;this.getAttribute("title");t.innerHTML="\n            \n        ",this.classList.add("ufo-drawer"),this.setAttribute("tabindex",0)}attributeChangedCallback(t,e,s){"state"==t?this.toggleState.bind(this):e!==s&&(this.shadowRoot.innerHTML="\n            ")}}class f extends HTMLElement{constructor(){super(),this.open=!1}connectedCallback(){const{shadowRoot:t}=this,e=this.getAttribute("text"),s=this.getAttribute("type");this.classList.add(s);const i=document.createElement("span");i.textContent=e,this.appendChild(i),this.classList.add("ufo-tag"),this.open=!0}}class g extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.getAttribute("avatar");let e=encodeURI(t);this.classList.add("ufo-avatar"),this.setAttribute("style",`background-image:url(${e})`)}}class L extends HTMLElement{constructor(){super()}connectedCallback(){let t=this.getAttribute("trail");t=JSON.parse(t),t.forEach(t=>{let e=document.createElement("a");e.setAttribute("href",t.link),e.textContent=t.text,t.active&&e.classList.add("active"),this.appendChild(e)}),this.classList.add("ufo-breadcrumb")}}class E extends HTMLElement{constructor(){super()}connectedCallback(){this.classList.add("ufo-summary-body"),this.addEventListener("click",t=>{t.stopPropagation()})}}customElements.define("ufo-summary-body",E);class C extends HTMLElement{static get observedAttributes(){return["title"]}constructor(){super(),this.open=!1}connectedCallback(){const t=this.getAttribute("title"),e=document.createElement("div"),s=document.createElement("h2"),i=document.createElement("span");i.classList.add("arrow"),e.classList.add("ufo-summary-header"),s.textContent=t,e.appendChild(s),e.appendChild(i),this.prepend(e),this.open=!0,this.addEventListener("click",t=>{this.toggleAttribute("open")})}}class k extends HTMLElement{static get observedAttributes(){return["icon"]}constructor(){super(),this.open=!1}connectedCallback(){this.classList.add("ufo-icon-button");const t=this.getAttribute("icon"),e=document.createElement("button"),s=document.createElement("i");s.setAttribute("class",t),e.appendChild(s),this.appendChild(e),this.open=!0}changeIcon(t){const e=document.createElement("button"),s=document.createElement("i");s.setAttribute("class",t),this.querySelector("button").appendChild(s),this.appendChild(e)}attributeChangedCallback(t,e,s){this.open&&this.changeIcon(s)}}class A extends HTMLElement{static get observedAttributes(){return["position"]}constructor(){super(),this.open=!1}connectedCallback(){const t=document.createElement("div"),e=document.createElement("div"),s=this.querySelectorAll("ufo-icon");this.classList.add("ufo-icon-bar"),t.classList.add("ufo-icon-bar");let i=this.getAttribute("position");this.classList.add(i),e.classList.add(i),s.forEach(t=>{t.innerHTML="",e.appendChild(t)}),e.classList.add("ufo-icon-bar-wrapper"),t.appendChild(e),this.appendChild(t);let n=this.clientWidth/2,a=this.clientHeight/2,o=window.innerWidth/2,c=window.innerHeight/2;"top"==i||"bottom"==i?this.style.left=o-n:this.style.top=c-a,window.addEventListener("resize",()=>{let t=this.clientWidth/2,e=this.clientHeight/2,s=window.innerWidth/2,n=window.innerHeight/2;"top"==i||"bottom"==i?this.style.left=s-t:this.style.top=n-e}),this.open=!0}attributeChangedCallback(t,e,s){s!==e&&this.open&&(this.querySelector(".ufo-icon-bar-wrapper").classList.remove(e),this.querySelector(".ufo-icon-bar-wrapper").classList.remove(e),this.classList.add(s),this.classList.add(s))}}customElements.define("ufo-icon",i),customElements.define("ufo-tooltip",a),customElements.define("ufo-grid-of-equals",o),customElements.define("ufo-alert",c),customElements.define("ufo-button",r),customElements.define("ufo-pill",d),customElements.define("ufo-card",b),customElements.define("ufo-drawer",m),customElements.define("ufo-tag",f),customElements.define("ufo-avatar",g),customElements.define("ufo-breadcrumbs",L),customElements.define("ufo-summary",C),customElements.define("ufo-icon-button",k),customElements.define("ufo-icon-bar",A)}]);