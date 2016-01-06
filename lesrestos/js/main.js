      // Initialise map
      function initMap() { // InitMap start
          // Plan du resto
          var map = new google.maps.Map(document.getElementById('map'), {
              center: {
                  lat: 48.856,
                  lng: 2.352
              },
              zoom: 6
          });
          // Ajout un resto
          var map2 = new google.maps.Map(document.getElementById('map2'), {
              center: {
                  lat: 48.856,
                  lng: 2.352
              },
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          });

          // Create the search box and link it to the UI element.
          var input = document.getElementById('pac-input');
          var searchBox = new google.maps.places.SearchBox(input);
          map2.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

          // Bias the SearchBox results towards current map's viewport.
          map2.addListener('bounds_changed', function() {
              searchBox.setBounds(map2.getBounds());
          });

          var markers = [];
          // [START region_getplaces]
          // Listen for the event fired when the user selects a prediction and retrieve
          // more details for that place.
          searchBox.addListener('places_changed', function() {
              var places = searchBox.getPlaces();

              if (places.length == 0) {
                  return;
              }

              // Clear out the old markers.
              markers.forEach(function(marker) {
                  marker.setMap(null);
              });
              markers = [];

              // For each place, get the icon, name and location.
              var bounds = new google.maps.LatLngBounds();
              places.forEach(function(place) {
                  var icon = {
                      url: place.icon,
                      size: new google.maps.Size(71, 71),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(17, 34),
                      scaledSize: new google.maps.Size(25, 25)
                  };

                  // Create a marker for each place.
                  var marker = new google.maps.Marker({
                      map: map2,
                      icon: icon,
                      title: place.name,
                      position: place.geometry.location
                  });
                  markers.push(marker);

                  // Info window
                  var contentHtml = '<p> Addresse : ' + place.name + '</p>' +
                      '<input type="button" id="addAddress" class="btn btn-success" value="Ajouter cet adresse dans la liste ?" />';
                  var infoWindow = new google.maps.InfoWindow({
                      content: contentHtml
                  });

                  // Add listener to marker and display infoWindow when click
                  marker.addListener('click', function() {
                      infoWindow.open(map2, marker);
                      $("#addAddress").on("click", function() {

                          var address = {};

                          // console.log(place.geometry.location.lat());
                          // console.log(place.geometry.location.lng());

                          // #################
                          // Add Address
                          // #################

                          // $.ajax({
                          //     type: "POST",
                          //     url: "data/restos_test.json",
                          //     data: address,
                          //     contentType: "application/json; charset=utf-8",
                          //     dataType: "json",
                          //     success: function(data) {
                          //         console.log(data);
                          //     },
                          //     error: function() {
                          //         console.log("Error occured");
                          //     }
                          // });


                      });
                  });

                  if (place.geometry.viewport) {
                      // Only geocodes have viewport.
                      bounds.union(place.geometry.viewport);
                  } else {
                      bounds.extend(place.geometry.location);
                  }
              });
              map2.fitBounds(bounds);
          });

      } // InitMap end

      // Adds a marker to the map.
      function addMarker(location, map) {
          // Add the marker at the clicked location, and add the next-available label
          // from the array of alphabetical characters.
          var marker = new google.maps.Marker({
              position: location,
              map: map
          });
      }

      // Rebuild map and add a pin marker
      function changePosition(latLng, zoom, title) {
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: zoom,
              center: latLng,
              title: title
          });
          addMarker(latLng, map);
      }


      $(document).ready(function() { // Jquery start

          // #################
          // Management of Map
          // #################
          var restos;

//           var query = "SELECT * FROM " +
//               '1Y9-XOpp6P4E9q4LcT04qOPMVALl_h4XreAijK-2l';
//           var encodedQuery = encodeURIComponent(query);
//
//           // Construct the URL
//           var url = ['https://www.googleapis.com/fusiontables/v2/query'];
//           url.push('?sql=' + encodedQuery);
//           url.push('&key=AIzaSyBg63wEVqhWLz0zwv0xMveTtsqsmTO-IfE');
//           //url.push('&callback=?');
// console.log(url.join(''));
          $.ajax({ // Ajax allows to get the restos data from a json file
              type: "GET",
              // url: url.join(''),
              url: "data/restos.json",
              // dataType: "jsonp",
              dataType: "json",
              success: function(data) {
console.log(data);

                  if (false === jQuery.isEmptyObject(data.restos)) {
                      restos = data.restos;
                      var htmlResto = '';
                      $.each(restos, function(index, el) {
                          htmlResto += '<li class="list-group-item" id="' + el.id + '">' + el.description + '</li>';
                      });
                      $("#restos").html(htmlResto);

                      // Add mouse on hover effet
                      $("li.list-group-item").hover(function() {
                          $(this).addClass('list-group-item-info');
                      }, function() {
                          $(this).removeClass('list-group-item-info');
                      });

                      // Add click listener
                      $("#restos li").click(function(event) {
                          var idClicked = $(this).attr('id');
                          var resto = $.grep(restos, function(e) {
                              if (idClicked == e.id) {
                                  return e;
                              };
                          });

                          // Rebuild the map
                          changePosition(resto[0].position, resto[0].zoom, resto[0].description);
                      });

                  };

              },
              error: function() {
                  console.log("Error occured");
              }
          }); // Ajax end


          // #####################
          // Management of Scroll
          // #####################

          $('.container').fullpage({
              menu: '#menu',
              anchors: ['firstPage', 'secondPage', '3rdPage'],
              // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
              autoScrolling: false,
              resize: false,
              sectionSelector: '.section',
              fitToSection: false
          });

      }); // Jquery end
