function keyUpping(original, faked) {
	document.addEventListener('keyup', (ev) => {
		if (ev.keyCode == original) {
			document.dispatchEvent(new KeyboardEvent("keyup", {
				'shiftKey': false,
				'keyCode': faked
			}))
		}
	})
	return 1
}

document.addEventListener('keydown', (e) => {
	e = e || window.event;
	const el = document.activeElement.id
	if (el != "search" && el != "contenteditable-root") {
		switch (e.keyCode) {
			case 59:
			case 169:
				// Next Frame (while paused) + Increase playback rate 59
				var kcode = e.keyCode == 59 ? 190 : 173;
				document.dispatchEvent(new KeyboardEvent("keydown", {
				'keyCode': kcode,
				'shiftKey': e.shiftKey
				}))
				break;
			case 90:
				var kcode = 87;
				document.dispatchEvent(new KeyboardEvent("keydown", {
					'shiftKey': false,
					'keyCode': kcode
				}))
		}
	}
});