const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(function(e){a=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0}),1e3)})),e.addEventListener("click",(function(e){clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0366f2b2.js.map