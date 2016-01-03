var map;

function initialize() {
  var position = {
    lat: 48.856,
    lng: 2.352
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: position
  });

}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

function changePosition(latLng, zoom, title) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: latLng,
    title: title
  });
  addMarker(latLng, map);
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function() { // Jquery start

  $("#paris").click(function() {
    changePosition({
      lat: 48.856,
      lng: 2.352
    }, 12, "paris");
  });

  $("#londre").click(function() {
    changePosition({
      lat: 51.507,
      lng: -0.127
    }, 12, "londre");
  });

  $("#beijing").click(function() {
    changePosition({
      lat: 39.904,
      lng: 116.407
    }, 12, "bei jing");
  });

  $("#resto_thiou").click(function() {
    changePosition({
      lat: 48.862,
      lng: 2.309
    }, 17, "Resto Thiou");
  });


}); // Jquery end
