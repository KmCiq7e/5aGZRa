const sec=7e3,btn1=document.getElementById("btn1"),btn1Img=document.getElementById("btn1Img"),titleElement=document.getElementById("title"),baseUrl="https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img";if("undefined"==typeof lang&&btn1Img?.src){const e={"Img.webp":"eng","Dk.webp":"dnk","Fi.webp":"fin","Fr.webp":"fre","De.webp":"ger","It.webp":"ita","Nl.webp":"nld","No.webp":"nor","Es.webp":"spa","Se.webp":"swe"};for(const[t,i]of Object.entries(e))if(btn1Img.src.endsWith(t)){lang=i;break}}const checkImgs={eng:`${baseUrl}/checkImg.webp`,dnk:`${baseUrl}/checkImgDk.webp`,fin:`${baseUrl}/checkImgFi.webp`,fre:`${baseUrl}/checkImgFr.webp`,ger:`${baseUrl}/checkImgDe.webp`,ita:`${baseUrl}/checkImgIt.webp`,nld:`${baseUrl}/checkImgNl.webp`,nor:`${baseUrl}/checkImgNo.webp`,spa:`${baseUrl}/checkImgEs.webp`,swe:`${baseUrl}/checkImgSe.webp`},origiImgs={eng:`${baseUrl}/btn1Img.webp`,dnk:`${baseUrl}/btn1ImgDk.webp`,fin:`${baseUrl}/btn1ImgFi.webp`,fre:`${baseUrl}/btn1ImgFr.webp`,ger:`${baseUrl}/btn1ImgDe.webp`,ita:`${baseUrl}/btn1ImgIt.webp`,nld:`${baseUrl}/btn1ImgNl.webp`,nor:`${baseUrl}/btn1ImgNo.webp`,spa:`${baseUrl}/btn1ImgEs.webp`,swe:`${baseUrl}/btn1ImgSe.webp`},checkImg=checkImgs[lang],origiImg=origiImgs[lang],allTitles={eng:{title1:"Verifying that you are not a robot…",title2:"Verification successful, please wait…"},dnk:{title1:"Bekræfter at du ikke er en robot…",title2:"Verifikation lykkedes, vent venligst…"},fin:{title1:"Varmistetaan, ettet ole robotti…",title2:"Varmistus onnistui, ole hyvä ja odota…"},fre:{title1:"Vérification que vous n'êtes pas un robot…",title2:"Vérification réussie, veuillez patienter…"},ger:{title1:"Überprüfung, ob Sie kein Roboter sind…",title2:"Überprüfung erfolgreich, bitte warten…"},ita:{title1:"Verificando che non sei un robot…",title2:"Verifica riuscita, per favore aspetta…"},nld:{title1:"Verifiëren dat u geen robot bent…",title2:"Verificatie succesvol, een moment geduld alstublieft…"},nor:{title1:"Verifiserer at du ikke er en robot…",title2:"Verifisering vellykket, vennligst vent…"},spa:{title1:"Verificando que no eres un robot…",title2:"Verificación exitosa, por favor espera…"},swe:{title1:"Verkollar att du inte är en robot…",title2:"Verifiering lyckades, vänligen vänta…"}},title1=allTitles[lang]?.title1,title2=allTitles[lang]?.title2;document.addEventListener("DOMContentLoaded",(()=>{titleElement.textContent=title1,btn1Img.src=origiImg;const e=new URLSearchParams(window.location.search),t=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid");let i=afflink;let n="";const l="undefined"==typeof sub4?"sub4":sub4;if(e.has("sub4")&&(n=e.get("sub4")),t){const e=i.includes("?")?"&":"?";i+=`${e}${sub1}=${encodeURIComponent(t)}&${sub2}=${sub2Info}&${sub3}=r&${l}=${n}`}let r=0;btn1.addEventListener("click",(function(){const e=Date.now();e-r>=sec&&(window.location.href=i,btn1Img.src=checkImg,setTimeout((()=>{titleElement.textContent=title2}),500),setTimeout((()=>{btn1Img.src=origiImg,titleElement.textContent=title1}),sec),r=e)}))}));
