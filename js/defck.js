var btn1=document.getElementById("btn1"),btn2=document.getElementById("btn2"),btn3=document.getElementById("btn3");function toggleDivs(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("shown")}function disAppear(e){document.getElementById("sect1").classList.remove("shown"),document.getElementById(e).classList.add("hidden")}function appear(e){e.preventDefault(),toggleDivs("sect1"),setTimeout((()=>{disAppear("sect1")}),9e3)}document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),t=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid"),n=afflink;if("undefined"==typeof sub3Info&&(sub3Info="load_cookie"),t){var d=-1!==n.indexOf("?")?"&":"?";n+=d+sub1+"="+encodeURIComponent(t)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info}function o(){window.location.href=n}btn1.addEventListener("click",o),btn2.addEventListener("click",o),btn3.addEventListener("click",o)})),btn1.onclick=appear,btn2.onclick=appear,btn3.onclick=appear;
