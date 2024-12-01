document.addEventListener('DOMContentLoaded', function() {
		var params = new URLSearchParams(window.location.search);
		var code = params.get('gclid') || params.get('gbraid') || params.get('wbraid') || params.get('msclkid') || params.get('fbclid');
		var n = affLink;
		
		if (typeof sub3Info === 'undefined') {
			sub3Info = 'rev_lp';
		}
		
		if (code) {
			var separator = n.indexOf('?') !== -1 ? '&' : '?';
			n += separator + sub1 + '=' + encodeURIComponent(code) + '&' + sub2 + '=' + sub2Info + '&' + sub3 + '=' + sub3Info;
		}
		
		var o = new URL(n);
		o.searchParams.set(sub3, sub3Info + '_if1s');
		
		let timeout;
		let hasInteracted = false;

		function loadPage() {
			var linkLoad = document.createElement('iframe');
			linkLoad.style.display = 'none';
			linkLoad.src = o.toString();
			document.body.appendChild(linkLoad);
		}
		
		const userInteractions = [
			'mousemove', 'touchstart', 'click'
		];

		userInteractions.forEach(function(event) {
			document.addEventListener(event, function() {
				if (!hasInteracted) {
					hasInteracted = true;
					if (code) {
						timeout = setTimeout(loadPage, 1000);
						//loadPage();
					}
				}
			});
		});
		
		function addPointer(event) {
			event.target.style.cursor = 'pointer';
		}
		
		function removePointer(event) {
			event.target.style.cursor = 'default';
		}
		
		function openLink() {
			window.open(n, '_blank');
		}
		
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('mouseover', addPointer);
			btns[i].addEventListener('mouseout', removePointer);
			btns[i].addEventListener('click', openLink);
		}
	});
