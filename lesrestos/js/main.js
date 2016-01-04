      // Initialise map
      function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
              center: {
                  lat: 48.856,
                  lng: 2.352
              },
              zoom: 6
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
          var restos;

          $.ajax({ // Ajax allows to get the restos data from a json file
              type: "GET",
              url: "data/restos.json",
              dataType: "json",
              success: function(data) {
                  if (false === jQuery.isEmptyObject(data.restos)) {
                      restos = data.restos;
                      var htmlResto = '';
                      $.each(restos, function(index, el) {
                          htmlResto += '<li class="list-group-item" id="' + el.id + '">' + el.description + '</li>';
                      });
                      $("#restos").html(htmlResto);

                      // Add mouse on hover effet 
                      $("li.list-group-item").hover(function() {
                          /* Stuff to do when the mouse enters the element */
                          $(this).addClass('list-group-item-info');
                      }, function() {
                          /* Stuff to do when the mouse leaves the element */
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

      }); // Jquery end
