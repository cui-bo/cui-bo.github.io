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

      function changePosition(latLng, zoom, title) {
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: zoom,
              center: latLng,
              title: title
          });
          addMarker(latLng, map);
      }


      $(document).ready(function() { // Jquery start

          // $.ajax({
          //   type:"GET",
          //   url:"data/restos.json",
          //   dataType:"text",
          //   success:function(data) {
          //     console.log(data);
          //   },
          //   error:function() {
          //       console.log("Error occured");
          //   }

          // for (var i = restos.length - 1; i >= 0; i--) {
          //     restos[i]
          // };

          $("#resto_1").click(function() {
              changePosition({
                  lat: 48.864,
                  lng: 2.331
              }, 16, "Resto SHU");
          });

          $("#resto_2").click(function() {
              changePosition({
                  lat: 48.884,
                  lng: 2.341
              }, 16, "La Vache et le Cuisinier");
          });

          $("#resto_3").click(function() {
              changePosition({
                  lat: 48.842,
                  lng: 2.325
              }, 16, "Les Grillades de Buenos Aires");
          });

          $("#resto_4").click(function() {
              changePosition({
                  lat: 48.862,
                  lng: 2.309
              }, 16, "Resto Thiou");
          });


      }); // Jquery end
