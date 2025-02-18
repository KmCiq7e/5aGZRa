	const btns = document.querySelectorAll('.btns');
	const sec = 7000;
	var loadingText = document.getElementById("loading");

	function toggleDivs(e) {
		document.getElementById("sect1").classList.remove("shown");
		document.getElementById(e).classList.add("shown");
	}
	
	function disAppear(e) {
		document.getElementById("sect1").classList.remove("shown");
		document.getElementById(e).classList.add("hidden");
	}
	
	let timeoutId = null;
	
	function appear(e) {
		e.preventDefault();
		toggleDivs("sect1");
		
		const targetId = this.id;
		
		if (timeoutId === null) {
			if (targetId && targetId.includes("type1")) {
				loadingText.textContent = text1;
			} else if (targetId && targetId.includes("type2")) {
				loadingText.textContent = text2;
			}
			
			timeoutId = setTimeout(() => {
				disAppear("sect1");
				timeoutId = null;
			}, sec);
		}
	}
	
	document.addEventListener("DOMContentLoaded", function() {
		var params = new URLSearchParams(window.location.search);
		var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
		var n = afflink1;
		var o = afflink2;
		
		if (typeof sub3Info === "undefined") {
			sub3Info = "load_type";
		}

		if (code) {
			var separator = n.indexOf("?") !== -1 ? "&" : "?";
			if (/^\d{3}/.test(sub2Info)) {
				sub2Info = sub2Info.substring(4);
			}
			n += separator + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info + "_" + sub3Type1;
			o += separator + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info + "_" + sub3Type2;
		}
		
		function addPointer(event) {
			event.target.style.cursor = 'pointer';
		}
		
		function removePointer(event) {
			event.target.style.cursor = 'default';
		}
		
		let lastClickTime = 0;
		
		function openLink(event) {
			const currentTime = Date.now();
			const targetId = this.id;
			
			if (currentTime - lastClickTime >= sec) {
				if (targetId && targetId.includes("type1")) {
					window.location.href = n;
				} else if (targetId && targetId.includes("type2")) {
					window.location.href = o;
				}
				lastClickTime = currentTime;
			}
		}
		
		btns.forEach(btn => {
			btn.addEventListener('mouseover', addPointer);
			btn.addEventListener('mouseout', removePointer);
			btn.addEventListener('click', appear);
			btn.addEventListener('click', openLink);
		});
	});
