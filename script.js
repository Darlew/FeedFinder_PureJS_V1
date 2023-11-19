function initMap() {
	//map options
	var options = {
		zoom: 12,
		center: { lat: -32.9401, lng: 151.7045 },
	};

	//new map
	var map = new google.maps.Map(document.getElementById("map"), options);

	//Array of markers
	var markers = [
		{
			name: "The Newcastle Hotel",
			coords: { lat: -32.9156, lng: 151.7488 },
			content: "<h1>" + this.name + "</h1>",
		},
		{
			coords: { lat: -32.91756662176913, lng: 151.7485167530358 },
			content: "<h1>Hamilton Station Hotel</h1>",
		},
		{
			coords: { lat: -32.918454113594976, lng: 151.74773532122225 },
			content: "<h1>Sydney Junction Hotel</h1>",
		},
	];

	for (var i = 0; i < markers.length; i++) {
		addMarker(markers[i]);
	}

	//Add marker
	function addMarker(props) {
		var marker = new google.maps.Marker({
			position: props.coords,
			map: map,
		});

		if (props.iconImage) {
			marker.setIcon(props.iconImage);
		}
		if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
				content: props.content,
			});

			marker.addListener("click", function () {
				infoWindow.open(map, marker);
			});
		}
	}
}
