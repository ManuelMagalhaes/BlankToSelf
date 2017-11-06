	var previousElement = null;
	var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
	
	document.addEventListener('mouseover', function(e) {

		var hoveredElement = event.target;
		var anchorElement = hoveredElement.closest("A");
		if (anchorElement === null) {
			return;
		} else if (anchorElement.target == "_blank") {
			if (previousElement != null) {
				previousElement.classList.remove(MOUSE_VISITED_CLASSNAME);
			}
			hoveredElement.classList.add(MOUSE_VISITED_CLASSNAME);
			previousElement = hoveredElement;
		}
	}, false);

	document.addEventListener('click', function(e) {

		var hoveredElement = event.target;
		var anchorElement = hoveredElement.closest("A");

		if (anchorElement === null) {
			return;
		} else if (anchorElement.target == "_blank") {

			anchorElement.target = "_self";
		}
	}, false);