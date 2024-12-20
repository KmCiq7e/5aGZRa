	const sec = 7000;
	var btn1 = document.getElementById("btn1");
	var btn1Img = document.getElementById("btn1Img");
	var titleElement = document.getElementById("title");
	var title1 = "Verificando que no eres un robot…";
	var title2 = "Verificación exitosa, por favor espera…";
	var checkImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImgEs.webp";
	var origiImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/btn1ImgEs.webp";

	document.addEventListener("DOMContentLoaded", function() {
		var params = new URLSearchParams(window.location.search);
		var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
		var url = afflink;
		
		sub3Info = "load_rt";
		
		if (code) {
			var separator = url.indexOf("?") !== -1 ? "&" : "?";
			url += separator + sub1 + "=" + encodeURIComponent(code) + "&" + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info;
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

		btn1.addEventListener("click", openLink);
	});
