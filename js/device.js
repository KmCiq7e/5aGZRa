function detectDeviceType(){const e=navigator.userAgent.toLowerCase();return/mobile/i.test(e)?"Mobile":/tablet/i.test(e)?"Tablet":/desktop/i.test(e)||!/mobile/i.test(e)?"Desktop":"Unknown"}function updateButtonLinkForMobile(){"Mobile"===detectDeviceType()&&(afflink=afflink2)}document.addEventListener("DOMContentLoaded",(function(){updateButtonLinkForMobile()}));