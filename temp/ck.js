    var btns = document.querySelectorAll('.btns');
	const sec = 7000;

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
		if (timeoutId === null) {
			timeoutId = setTimeout(() => {
				disAppear("sect1");
				timeoutId = null;
			}, sec);
		}
	}
	
    document.addEventListener("DOMContentLoaded", function() {
		var params = new URLSearchParams(window.location.search);
        var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
        var n = afflink;
		
		if (typeof sub3Info === "undefined") {
			sub3Info = "c";
		}

        if (code) {
            var separator = n.indexOf("?") !== -1 ? "&" : "?";
			if (/^\d{3}/.test(sub2Info)) {
				sub2Info = sub2Info.substring(4);
			}
            n += separator + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info;
        }
		
		function addPointer(event) {
			event.target.style.cursor = 'pointer';
		}
		
		function removePointer(event) {
			event.target.style.cursor = 'default';
		}
		
        function openLink() {
            window.location.href = n;
        }
		
		let lastClickTime = 0;
		
		btns.forEach(btn => {
			btn.addEventListener('mouseover', addPointer);
			btn.addEventListener('mouseout', removePointer);
			btn.addEventListener('click', appear);
			btn.addEventListener('click', function() {
				const currentTime = Date.now();
				
				if (currentTime - lastClickTime >= sec) {
					openLink();
					lastClickTime = currentTime;
				}
			});
		});
    });
