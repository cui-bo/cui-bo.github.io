$(document).ready(function(){
  // Variables
  var compte = {};

  var urlAamin = "http://php-cuibo.rhcloud.com/autoecole/admin.php";

  $.ajax({
      type: "GET",
      url: urlAamin,
      dataType: "json",
      success: function(data) {
        console.log(data);


        if (data) {
          var output = "";

          $.each(data, function(i, item) {
            output += "<tr>";
            output += "<td>" + item['nom'] + "</td>";
            output += "<td>" + item['prenom'] + "</td>";
            output += "<td>" + item['adresse'] + "</td>";
            output += "<td>" + item['ville'] + "</td>";
            output += "<td>" + item['code_postal'] + "</td>";
            output += "<td>" + item['tel'] + "</td>";
            output += "<td>" + item['email'] + "</td>";
            output += "</tr>";
          });
          $("#output").append(output);
        }

      },
      error: function() {
          console.log("Error occured");
      }
  }); // Ajax end

});
