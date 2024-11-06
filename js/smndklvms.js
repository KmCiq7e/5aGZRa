document.addEventListener('DOMContentLoaded', function () {
	(function () {
		var searchParams = new URLSearchParams(window.location.search);
		
		var addParam = searchParams.get('gclid') || searchParams.get('gbraid') || searchParams.get('wbraid') || searchParams.get('msclkid') || searchParams.get('fbclid');
		
		if (addParam) {
		    function d4e5f6(g7h8i9) {
			return g7h8i9.replace(/ /g, '_s_').replace(/-/g, '_d_').replace(/\//g, '');
			}

			if (searchParams.toString()) {
				var allLinks = document.getElementsByTagName('a');
				for (var i = 0; i < allLinks.length; i++) {
					var y5z6a7 = allLinks[i];
					var b8c9d0 = y5z6a7.hash;
					var newLink = y5z6a7.href.split('#')[0];
					var h4i5j6 = new URL(newLink, document.location.href).searchParams;

					var k7l8m9 = addParam;

					if (h4i5j6.has(addParam)) {
						k7l8m9 = d4e5f6(addParam);
					}

					var addParam = k7l8m9.toString();
					var separator = newLink.indexOf('?') !== -1 ? '&' : '?';
					newLink += separator + 'sub1=' + encodeURIComponent(addParam) + '&sub2=087_glyco_balance_au&sub3=full';
					y5z6a7.href = newLink + b8c9d0;
				}
			}
		}
	})();
});
