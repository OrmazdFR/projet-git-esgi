document.addEventListener('keydown', (e) => {
	e = e || window.event;
	if (e.keyCode == 59) {
		// Next Frame (while paused) + Increase playback rate 59
		var kcode = 190;
		document.dispatchEvent(new KeyboardEvent("keydown", {
			'keyCode': kcode
		}))
	}
});