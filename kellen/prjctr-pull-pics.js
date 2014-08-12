
function getPics(instagram_data) {
	// Concatenates Instagram url to use as API endpoint and gets JSON-encoded data from Instagram server
	// uses tag and count from PRJCTR-begin-state.js
	var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count='+ count;
	$.getJSON(instagramUrl, access_parameters, arrayInit); //appendPics callback
}


function arrayInit(instagram_data) {
	// Puts the pics in an array and appends them to the DOM with class and id
	if (instagram_data.meta.code == 200) {
		var photos = instagram_data.data;
		console.log(photos);

		if (photos.length > 0) {

			var i = 0;
			for (var key in photos) {
				var photo = photos[key];
					$('#target').append('<div class="hidden" id='+i+'> <a href="#"><img src=' + photo.images.standard_resolution.url + '></a></div>');
					i++
			}
		}
		else {
			$('#target').append("No photos were found");
		}
	}
	else {
		var error = instagram_data.meta.error_message;
		$('#target').append('Request Error:' + error);
	}
	unhidePics();
}

function unhidePics () {
	// Hides currently visible pic in array, then unhides the next pic
	if (currentPicId !== 0) {
		var picToHide = document.getElementById(currentPicId-1);
		picToHide.setAttribute('class', 'hidden');
	}
	var picToShow = document.getElementById(currentPicId);
	picToShow.setAttribute('class', 'visible');
	currentPicId++;
}

function slideshow() {
	setInterval(unhidePics, 5000);
}





