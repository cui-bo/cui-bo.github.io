$(document).ready(function(){
  // Variables
  var compte = {};

  var urlAjoutCompte = "http://php-cuibo.rhcloud.com/autoecole/insert.php",
      urlConnuPar = "http://php-cuibo.rhcloud.com/autoecole/connu_par.php";


  // Appel pour l'afficher la table connu_par
  $.ajax({
      type: "GET",
      url: urlConnuPar,
      dataType: "json",
      success: function(data) {
        console.log(data);
        if (data) {
          var dropdown = "";

          $.each(data, function(i, item) {
            dropdown += "<option value='"+ data[i].id +"'>" + data[i].intitule + "</option>";
          });
          $("#connu").append(dropdown);
        }
      },
      error: function() {
          console.log("Error occured");
      }
  }); // Ajax end


  // Actions après la validation
  $("#valide").click(function() {

    // Récupération des données
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var adresse = $("#adresse").val();
    var ville = $("#ville").val();
    var code_postal = $("#code").val();
    var tel = $("#tel").val();
    var email = $("#email").val();
    var mdp = $("#mdp").val();
    var emailconf = $("#emailconf").val();
    var mdpconf = $("#mdpconf").val();
    var connu = $("#connu option:selected").val();

    compte.nom = nom;
    compte.prenom = prenom;
    compte.adresse = adresse;
    compte.ville = ville;
    compte.code_postal = code_postal;
    compte.tel = tel;
    compte.email = email;
    compte.mdp = mdp;
    compte.connu = connu;

/*
compte.nom = "nom";
compte.prenom = "prenom";
compte.adresse = "adresse";
compte.ville = "ville";
compte.code_postal = 123456;
compte.tel = 0;
compte.email = "you@email";
compte.mdp = "mdp";
compte.connu = 2;
*/
    console.log(nom);
    console.log(prenom);
    console.log(adresse);
    console.log(ville);
    console.log(code_postal);
    console.log(tel);
    console.log(email);
    console.log(mdp);
    console.log(emailconf);
    console.log(mdpconf);
    console.log(connu);

    // Afficher les messages erreurs
    $(".alert").remove();
    if(email.toLowerCase() !== emailconf.toLowerCase()) {
      $(".msg").html('<div class="alert alert-danger">Veillez saisir le meme mail.</div>');
      console.log("email not equal");
    } else if (mdp !== mdpconf) {
      $(".msg").html('<div class="alert alert-danger">Veillez saisir le meme mdp.</div>');
    } else {
      $(".alert").remove();
      // Inserer les données dans la base
      $.ajax({
          type: "GET",
          url: urlAjoutCompte,
          dataType: "json",
          data: compte,
          success: function(data) {
            $(".msg").html('<div class="alert alert-success">Votre compte a été créé</div>');
          },
          error: function() {
              console.log("Error occured");
              $(".msg").html('<div class="alert alert-danger">Erreur lors de la création</div>');
          }
      }); // Ajax end
    }
  });


/*
  // Appel backoffice
  $.ajax({
      type: "GET",
      url: urlBackoffice,
      dataType: "json",
      success: function(data) {

      },
      error: function() {
          console.log("Error occured");
      }
  }); // Ajax end


  */
});
