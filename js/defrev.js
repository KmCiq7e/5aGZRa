document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),n=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid"),t=affLink;if("undefined"==typeof sub3Info&&(sub3Info="rev_lp"),n){var o=-1!==t.indexOf("?")?"&":"?";t+=o+sub1+"="+encodeURIComponent(n)+"&"+sub2+"="+sub2Info+"&"+sub3+"="+sub3Info}var s=new URL(t);let i;s.searchParams.set(sub3,sub3Info+"_if1s");let d=!1;function r(){var e=document.createElement("iframe");e.style.display="none",e.src=s.toString(),document.body.appendChild(e)}function a(e){e.target.style.cursor="pointer"}function u(e){e.target.style.cursor="default"}function c(){window.open(t,"_blank")}["mousemove","touchstart","click"].forEach((function(e){document.addEventListener(e,(function(){d||(d=!0,n&&(i=setTimeout(r,1e3)))}))}));for(let e=0;e<btns.length;e++)btns[e].addEventListener("mouseover",a),btns[e].addEventListener("mouseout",u),btns[e].addEventListener("click",c)}));