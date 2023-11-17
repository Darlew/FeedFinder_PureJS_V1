function initMap() {
	//map options
	var options = {
		zoom: 12,
		center: { lat: -32.9401, lng: 151.7045 },
	};

	//new map
	var map = new google.maps.Map(document.getElementById("map"), options);

	//Add marker
	var marker = new google.maps.Marker({
		position: { lat: -32.9156, lng: 151.7488 },
		map: map,
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<h1>The Newcastle Hotel</h1>",
	});

	marker.addListener("click", function () {
		infoWindow.open(map, marker);
	});
}
