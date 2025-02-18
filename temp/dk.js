<script>
var sub1 = "sub1";
var sub2 = "sub2";
var sub3 = "sub3";
var afflink = "📌📌📌📌";
var sub2Info = "📌offer_dk📌";
</script>

<script>
	const sec = 7000;
	var btn1 = document.getElementById("btn1");
	var btn1Img = document.getElementById("btn1Img");
	var titleElement = document.getElementById("title");
	var title1 = "Bekræfter at du ikke er en robot…";
	var title2 = "Verifikation lykkedes, vent venligst…";
	var checkImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/checkImgDk.webp";
	var origiImg = "https://cdn.jsdelivr.net/gh/KmCiq7e/5aGZRa/img/btn1ImgDk.webp";

	document.addEventListener("DOMContentLoaded", function() {
		var params = new URLSearchParams(window.location.search);
		var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
		var url = afflink;
		
		sub3Info = "default";
		
		if (code) {
			var separator = url.indexOf("?") !== -1 ? "&" : "?";
			if (/^\d{3}/.test(sub2Info)) {
				sub2Info = sub2Info.substring(4);
			}
			url += separator + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info;
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
</script>
