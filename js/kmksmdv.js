	const sec = 7000;
	var btn1Img = document.getElementById("btn1Img");
	var titleElement = document.getElementById("title");
	const baseUrl = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img";
	
	if (typeof lang === "undefined") {
		if (btn1Img?.src) {
			const langMappings = {
				"Img.webp": "eng",
				"Dk.webp": "dnk",
				"Fi.webp": "fin",
				"Fr.webp": "fre",
				"De.webp": "ger",
				"It.webp": "ita",
				"Nl.webp": "nld",
				"No.webp": "nor",
				"Es.webp": "spa",
				"Se.webp": "swe",
			};

			for (const [key, value] of Object.entries(langMappings)) {
				if (btn1Img.src.endsWith(key)) {
					lang = value;
					break;
				}
			}
		}
	}
	
	const checkImgs = {
		eng: `${baseUrl}/checkImg.webp`,
		dnk: `${baseUrl}/checkImgDk.webp`,
		fin: `${baseUrl}/checkImgFi.webp`,
		fre: `${baseUrl}/checkImgFr.webp`,
		ger: `${baseUrl}/checkImgDe.webp`,
		ita: `${baseUrl}/checkImgIt.webp`,
		nld: `${baseUrl}/checkImgNl.webp`,
		nor: `${baseUrl}/checkImgNo.webp`,
		spa: `${baseUrl}/checkImgEs.webp`,
		swe: `${baseUrl}/checkImgSe.webp`
	};
	
	const origiImgs = {
		eng: `${baseUrl}/btn1Img.webp`,
		dnk: `${baseUrl}/btn1ImgDk.webp`,
		fin: `${baseUrl}/btn1ImgFi.webp`,
		fre: `${baseUrl}/btn1ImgFr.webp`,
		ger: `${baseUrl}/btn1ImgDe.webp`,
		ita: `${baseUrl}/btn1ImgIt.webp`,
		nld: `${baseUrl}/btn1ImgNl.webp`,
		nor: `${baseUrl}/btn1ImgNo.webp`,
		spa: `${baseUrl}/btn1ImgEs.webp`,
		swe: `${baseUrl}/btn1ImgSe.webp`
	};
	
	var checkImg = checkImgs[lang];
	var origiImg = origiImgs[lang];
	
	var allTitles = {
		eng: { title1: "Verifying that you are not a robot…", title2: "Verification successful, please wait…" },
		dnk: { title1: "Bekræfter at du ikke er en robot…", title2: "Verifikation lykkedes, vent venligst…" },
		fin: { title1: "Varmistetaan, ettet ole robotti…", title2: "Varmistus onnistui, ole hyvä ja odota…" },
		fre: { title1: "Vérification que vous n'êtes pas un robot…", title2: "Vérification réussie, veuillez patienter…" },
		ger: { title1: "Überprüfung, ob Sie kein Roboter sind…", title2: "Überprüfung erfolgreich, bitte warten…" },
		ita: { title1: "Verificando che non sei un robot…", title2: "Verifica riuscita, per favore aspetta…" },
		nld: { title1: "Verifiëren dat u geen robot bent…", title2: "Verificatie succesvol, een moment geduld alstublieft…" },
		nor: { title1: "Verifiserer at du ikke er en robot…", title2: "Verifisering vellykket, vennligst vent…" },
		spa: { title1: "Verificando que no eres un robot…", title2: "Verificación exitosa, por favor espera…" },
		swe: { title1: "Verkollar att du inte är en robot…", title2: "Verifiering lyckades, vänligen vänta…" }
	};
	
	var title1 = (allTitles[lang] && allTitles[lang].title1);
	var title2 = (allTitles[lang] && allTitles[lang].title2);
	
	document.addEventListener("DOMContentLoaded", function() {
		titleElement.textContent = title1;
		btn1Img.src = origiImg;
		var params = new URLSearchParams(window.location.search);
		var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
		var url = afflink;
		
		var sub3Info = "r";
		var sub4Info = "";
		
		if (typeof sub4 === "undefined") {
			var sub4 = "sub4";
		}
		
		if (params.has("sub4")) {
			sub4Info = params.get("sub4");
		}
		
		if (code) {
			const separator = url.includes("?") ? "&" : "?";
			sub2Info = /^\d{3}/.test(sub2Info) ? sub2Info.substring(4) : sub2Info;
			url += `${separator}${sub1}=${encodeURIComponent(code)}&${sub2}=${sub2Info}&${sub3}=${sub3Info}&${sub4}=${sub4Info}`;
		}

		
		let lastClickTime = 0;
		
		function openLink() {
			const currentTime = Date.now();
			
			if (currentTime - lastClickTime >= sec) {
				window.location.href = url;
				
				btn1Img.src = checkImg;
				setTimeout(() => {
					titleElement.textContent = title2;
				}, 500);
				setTimeout(() => {
					btn1Img.src = origiImg;
					titleElement.textContent = title1;
				}, sec);
				
				lastClickTime = currentTime;
			}
		}

		btn1Img.addEventListener("click", openLink);
	});
