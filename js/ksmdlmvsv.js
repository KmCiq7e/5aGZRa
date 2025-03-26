	document.addEventListener("DOMContentLoaded", () => {
		const params = new URLSearchParams(window.location.search);
		const code =
			params.get("gclid") ||
			params.get("gbraid") ||
			params.get("wbraid") ||
			params.get("msclkid") ||
			params.get("fbclid");
		let n = afflink1,
			o = afflink2,
			sub4Info = "";
		if (typeof sub3Info === "undefined") sub3Info = "t";
		if (typeof sub4 === "undefined") sub4 = "sub4";
		if (params.has("sub4")) sub4Info = params.get("sub4");
		if (code) {
			const appendParams = (url, sub3Type) => {
				const sep = url.includes("?") ? "&" : "?";
				return url + `${sep}${sub1}=${encodeURIComponent(code)}&${sub2}=${sub2Info}&${sub3}=${sub3Info}_${sub3Type}&${sub4}=${sub4Info}`;
			};

			n = appendParams(n, sub3Type1);
			o = appendParams(o, sub3Type2);
		}
		
		if (typeof lang !== "undefined") {
			const titleElem = document.getElementById("title");
			if (titleElem) {
				switch (lang) {
					case "eng":
						titleElem.innerText = "Choose Your Offer";
						break;
					case "dnk":
						titleElem.innerText = "Vælg Dit Tilbud";
						break;
					case "fin":
						titleElem.innerText = "Valitse Tarjouksesi";
						break;
					case "fre":
						titleElem.innerText = "Choisissez Votre Offre";
						break;
					case "ger":
						titleElem.innerText = "Wählen Sie Ihr Angebot";
						break;
					case "ita":
						titleElem.innerText = "Scegli la Tua Offerta";
						break;
					case "nld":
						titleElem.innerText = "Kies Uw Aanbod";
						break;
					case "nor":
						titleElem.innerText = "Velg Ditt Tilbud";
						break;
					case "spa":
						titleElem.innerText = "Elija Su Oferta";
						break;
					case "swe":
						titleElem.innerText = "Välj Ditt Erbjudande";
						break;
					default:
						break;
				}
			}

			const loadingElem = document.getElementById("loading");
			if (loadingElem) {
				switch (lang) {
					case "eng":
						loadingElem.innerText = "Loading, Please Wait…";
						break;
					case "dnk":
						loadingElem.innerText = "Indlæser, Vent Venligst…";
						break;
					case "fin":
						loadingElem.innerText = "Ladataan, Odota Hetki…";
						break;
					case "fre":
						loadingElem.innerText = "Chargement, Veuillez Patienter…";
						break;
					case "ger":
						loadingElem.innerText = "Lädt, Bitte Warten…";
						break;
					case "ita":
						loadingElem.innerText = "Caricamento, Attendere Preghiamo…";
						break;
					case "nld":
						loadingElem.innerText = "Laden, Gelieve Even Wachten…";
						break;
					case "nor":
						loadingElem.innerText = "Laster, Vennligst Vent…";
						break;
					case "spa":
						loadingElem.innerText = "Cargando, Por Favor Espere…";
						break;
					case "swe":
						loadingElem.innerText = "Laddar, Var God Vänta…";
						break;
					default:
						break;
				}
			}
		}

		const btns = document.querySelectorAll(".btns"),
			sec = 7000;
		let timeoutId = null,
			lastClickTime = 0;

		const showSect = () => {
				const sect = document.getElementById("sect1");
				sect.classList.remove("hidden");
				sect.classList.add("shown");
			},
			hideSect = () => {
				const sect = document.getElementById("sect1");
				sect.classList.remove("shown");
				sect.classList.add("hidden");
			};

		function handleClick(e) {
			e.preventDefault();
			showSect();
			const targetClass = e.currentTarget.className;
			if (!timeoutId) {
				timeoutId = setTimeout(() => {
					hideSect();
					timeoutId = null;
				}, sec);
			}
			const currentTime = Date.now();
			if (currentTime - lastClickTime >= sec) {
				if (targetClass.includes("type1")) window.location.href = n;
				else if (targetClass.includes("type2")) window.location.href = o;
				lastClickTime = currentTime;
			}
		}

		btns.forEach(btn => {
			btn.addEventListener("mouseover", () => (btn.style.cursor = "pointer"));
			btn.addEventListener("mouseout", () => (btn.style.cursor = "default"));
			btn.addEventListener("click", handleClick);
		});
	});
