var btn1=document.getElementById("btn1"),btn1Img=document.getElementById("btn1Img"),titleElement=document.getElementById("title"),title1="Verifying that you are not a robot…",title2="Verification successful, please wait…",checkImg="https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImg.webp",origiImg="https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/btn1Img.webp";document.addEventListener("DOMContentLoaded",(function(){var t=new URLSearchParams(window.location.search),e=t.get("gclid")||t.get("gbraid")||t.get("wbraid")||t.get("msclkid")||t.get("fbclid"),n=afflink;if("undefined"==typeof sub3Info&&(sub3Info="load_rt"),e){var i=-1!==n.indexOf("?")?"&":"?";n+=i+sub1+"="+encodeURIComponent(e)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info}btn1.addEventListener("click",(function(){btn1Img.src=checkImg,setTimeout((()=>{titleElement.textContent=title2}),500),setTimeout((()=>{btn1Img.src=origiImg,titleElement.textContent=title1}),9e3),window.location.href=n}))}));
