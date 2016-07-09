function initAllCameras() {
	$(".camera").each(addCameraElements);
}

function addCameraElements(index, topElement) {
	var commonArgs = $(topElement).closest('.cameraContainer').data('common-args');
	var commonOnclickArgs = $(topElement).closest('.cameraContainer').data('common-onclick-args');

	var url = $(topElement).data('url');
	var name = $(topElement).data('name');
	
	var link = $('<a></a>');
	if (commonOnclickArgs) {
		$(link).attr('href', url + '?' + commonOnclickArgs);
	} else {
		$(link).attr('href', url);
	}

	var label = $('<div class="cameraLabel"></div>');
	$(label).text(name);

	var image = $('<img>');
	if (commonArgs) {
		image.attr('src', url + '?' + commonArgs);
	} else {
		image.attr('src');
	}

	$(link).append(label).append(image);
	$(topElement).append(link);
}

$(document).ready(initAllCameras);
