const btns=document.querySelectorAll(".btns"),sec=7e3;var loadingText=document.getElementById("loading");function toggleDivs(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("shown")}function disAppear(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("hidden")}let timeoutId=null;function appear(e){e.preventDefault(),toggleDivs("sect1");const t=this.id;null===timeoutId&&(t&&t.includes("lang1")?loadingText.textContent=text1:t&&t.includes("lang2")&&(loadingText.textContent=text2),timeoutId=setTimeout((()=>{disAppear("sect1"),timeoutId=null}),sec))}document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid"),n=afflink1,o=afflink2;if("undefined"==typeof sub3Info&&(sub3Info="load_lang"),t){var s=-1!==n.indexOf("?")?"&":"?";n+=s+sub1+"="+encodeURIComponent(t)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info+"_"+sub3Lang1,o+=s+sub1+"="+encodeURIComponent(t)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info+"_"+sub3Lang2}function d(e){e.target.style.cursor="pointer"}function i(e){e.target.style.cursor="default"}let a=0;function c(e){const t=Date.now(),s=this.id;t-a>=sec&&(s&&s.includes("lang1")?window.location.href=n:s&&s.includes("lang2")&&(window.location.href=o),a=t)}btns.forEach((e=>{e.addEventListener("mouseover",d),e.addEventListener("mouseout",i),e.addEventListener("click",appear),e.addEventListener("click",c)}))}));