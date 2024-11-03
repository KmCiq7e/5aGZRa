    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    function toggleDivs(e) {
        document.getElementById("sect1").classList.remove("shown");
        document.getElementById(e).classList.add("shown");
    }

    document.addEventListener("DOMContentLoaded", function() {
		var params = new URLSearchParams(window.location.search);
        var code = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("msclkid") || params.get("fbclid");
        var n = afflink;
		
		if (typeof sub3Info === "undefined") {
			sub3Info = "load_cookie";
		}

        if (code) {
            var separator = n.indexOf("?") !== -1 ? "&" : "?";
            n += separator + sub1 + "=" + encodeURIComponent(code) + "&" + sub2 + "=" + sub2Info + "&" + sub3 + "=" + sub3Info;
        }

        function red() {
            window.location.href = n;
        }

        btn1.addEventListener("click", red);
        btn2.addEventListener("click", red);
        btn3.addEventListener("click", red);
    });

	function disAppear(e) {
		document.getElementById("sect1").classList.remove("shown");
		document.getElementById(e).classList.add("hidden");
	}

	function appear(e) {
		e.preventDefault();
		toggleDivs("sect1");
		setTimeout(() => {
			disAppear("sect1");
		}, 9000);
	}

	btn1.onclick = appear;
	btn2.onclick = appear;
	btn3.onclick = appear;
