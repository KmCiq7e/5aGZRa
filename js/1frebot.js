  var btn1 = document.getElementById("btn1");
	var btn1Img = document.getElementById("btn1Img");
	var titleElement = document.getElementById("title");
	var title1 = "Vérification que vous n'êtes pas un robot…";
	var title2 = "Vérification réussie, veuillez patienter…";
	var checkImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImgFr.webp";
	var origiImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/btn1ImgFr.webp";

    document.addEventListener("DOMContentLoaded", function() {
        var params = new URLSearchParams(window.location.search);
        var code = params.get("gclid") || params.get('gbraid') || params.get('wbraid') || params.get('msclkid') || params.get('fbclid');
        var url = afflink;

        if (code) {
            var separator = url.indexOf("?") !== -1 ? "&" : "?";
            url += separator + sub1 + "=" + encodeURIComponent(code) + "&" + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info;
        }	

        function red() {
			btn1Img.src = checkImg;
			setTimeout(() => {
				titleElement.textContent = title2;
			}, 400);
			setTimeout(() => {
				btn1Img.src = origiImg;
				titleElement.textContent = title1;
			}, 9000);
			window.location.href = url;
        }

        btn1.addEventListener("click", red);
    });
