document.addEventListener("DOMContentLoaded",(()=>{const e=new URLSearchParams(window.location.search),n=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid");let t=afflink1,a=afflink2,s="";if("undefined"==typeof sub3Info&&(sub3Info="t"),"undefined"==typeof sub4&&(sub4="sub4"),e.has("sub4")&&(s=e.get("sub4")),n){const e=(e,t)=>{const a=e.includes("?")?"&":"?";return e+`${a}${sub1}=${encodeURIComponent(n)}&${sub2}=${sub2Info}&${sub3}=${sub3Info}_${t}&${sub4}=${s}`};t=e(t,sub3Type1),a=e(a,sub3Type2)}if("undefined"!=typeof lang){const e=document.getElementById("title");if(e)switch(lang){case"eng":e.innerText="Choose Your Offer";break;case"dnk":e.innerText="Vælg Dit Tilbud";break;case"fin":e.innerText="Valitse Tarjouksesi";break;case"fre":e.innerText="Choisissez Votre Offre";break;case"ger":e.innerText="Wählen Sie Ihr Angebot";break;case"ita":e.innerText="Scegli la Tua Offerta";break;case"nld":e.innerText="Kies Uw Aanbod";break;case"nor":e.innerText="Velg Ditt Tilbud";break;case"spa":e.innerText="Elija Su Oferta";break;case"swe":e.innerText="Välj Ditt Erbjudande"}const n=document.getElementById("loading");if(n)switch(lang){case"eng":n.innerText="Loading, Please Wait…";break;case"dnk":n.innerText="Indlæser, Vent Venligst…";break;case"fin":n.innerText="Ladataan, Odota Hetki…";break;case"fre":n.innerText="Chargement, Veuillez Patienter…";break;case"ger":n.innerText="Lädt, Bitte Warten…";break;case"ita":n.innerText="Caricamento, Attendere Preghiamo…";break;case"nld":n.innerText="Laden, Gelieve Even Wachten…";break;case"nor":n.innerText="Laster, Vennligst Vent…";break;case"spa":n.innerText="Cargando, Por Favor Espere…";break;case"swe":n.innerText="Laddar, Var God Vänta…"}}const r=document.querySelectorAll(".btns");let i=null,o=0;function c(e){e.preventDefault(),(()=>{const e=document.getElementById("sect1");e.classList.remove("hidden"),e.classList.add("shown")})();const n=e.currentTarget.className;i||(i=setTimeout((()=>{(()=>{const e=document.getElementById("sect1");e.classList.remove("shown"),e.classList.add("hidden")})(),i=null}),7e3));const s=Date.now();s-o>=7e3&&(n.includes("type1")?window.location.href=t:n.includes("type2")&&(window.location.href=a),o=s)}r.forEach((e=>{e.addEventListener("mouseover",(()=>e.style.cursor="pointer")),e.addEventListener("mouseout",(()=>e.style.cursor="default")),e.addEventListener("click",c)}))}));
