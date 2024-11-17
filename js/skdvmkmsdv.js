function detectDeviceType() {
		const userAgent = navigator.userAgent.toLowerCase();

		if (/mobile/i.test(userAgent)) {
			return 'Mobile';
		}
		else if (/tablet/i.test(userAgent)) {
			return 'Tablet';
		}
		else if (/desktop/i.test(userAgent) || !/mobile/i.test(userAgent)) {
			return 'Desktop';
		}
		return 'Unknown';
	}

	function updateButtonLinkForMobile() {
		const deviceType = detectDeviceType();
		if (deviceType === 'Mobile') {
			afflink = afflink2;
		}
	}

document.addEventListener('DOMContentLoaded', function() {
	updateButtonLinkForMobile();
});
