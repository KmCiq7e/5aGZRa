const ids=["btn1","btn2","btn3"],btns=ids.map((e=>document.getElementById(e))),sec=7e3;function toggleDivs(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("shown")}function disAppear(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("hidden")}let timeoutId=null;function appear(e){e.preventDefault(),toggleDivs("sect1"),null===timeoutId&&(timeoutId=setTimeout((()=>{disAppear("sect1"),timeoutId=null}),sec))}document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid"),n=afflink;if("undefined"==typeof sub3Info&&(sub3Info="load_ck"),t){var s=-1!==n.indexOf("?")?"&":"?";n+=s+sub1+"="+encodeURIComponent(t)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info}function o(e){e.target.style.cursor="pointer"}function d(e){e.target.style.cursor="default"}let i=0;btns.forEach((e=>{e.addEventListener("mouseover",o),e.addEventListener("mouseout",d),e.addEventListener("click",appear),e.addEventListener("click",(function(){const e=Date.now();e-i>=sec&&(window.location.href=n,i=e)}))}))}));
