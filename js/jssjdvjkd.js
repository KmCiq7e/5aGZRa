document.addEventListener('DOMContentLoaded', function() {
		var params = new URLSearchParams(window.location.search);
		var n = affLink;
		
		if (params.toString()) {
			if (params.has('sub3')) {
				var sub3Info = params.get('sub3');
				params.set('sub3', sub3Info + '_full_lp');
			}
			
			var separator = n.includes('?') ? '&' : '?';
			
			params.forEach(function(value, key) {
				n += separator + key + '=' + value;
				separator = '&';
			});
		}
		
		function addPointer(event) {
		event.target.style.cursor = "pointer";
		}
		
		function removePointer(event) {
			event.target.style.cursor = "default";
		}
		
		function openLink() {
			window.open(n, "_blank");
		}
		
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('mouseover', addPointer);
			btns[i].addEventListener('mouseout', removePointer);
			btns[i].addEventListener('click', openLink);
		}
	});
