$(document).ready(function(){
/*
    $.ajax({
        type:"GET",
        url:"data/euromillions.csv",
        dataType:"json",
        success:function(data) {
            console.log(data);
        }
    });
//*/

    $("#chiffre").click(function() {
        $.ajax({
            type:"GET",
            url:"data/euromillions.csv",
            dataType:"text",
            success:function(data) {
                var csv = $.csv.toArrays(data);             // récupérer le csv par la fonction CSV
                console.log(csv.length);                    // la taille du fichier
                var retourChiffre = {};                     // tableau de retour des chiffres
                var retourEtoile = {};                      // tableau de retour des étoiles
                for (var i=1; i<csv.length; i++) {          // Boucle le tableau
                    var line = csv[i][0];                   // chaque ligne de csv
                    var tab = line.split(";");              // split chaque ligne par ;

                    if (typeof tab !== 'undefined' && tab.length > 0) {

                        for (var a=1; a<6; a++) {
                            var nom = tab[2+a];

                            if (typeof retourChiffre[nom] === 'undefined') {
                                retourChiffre[nom] = 1;
                            } else {
                                retourChiffre[nom]++;
                            }
                        }

                        for (var a=1; a<3; a++) {
                            var nom = tab[7+a];

                            if (typeof retourEtoile[nom] === 'undefined') {
                                retourEtoile[nom] = 1;
                            } else {
                                retourEtoile[nom]++;
                            }
                        }
                    }
                }

                // Pour trier
                var sortedRetourChiffre = [];
                for (var indice in retourChiffre){
                    sortedRetourChiffre.push([indice, retourChiffre[indice]]);
                }
                sortedRetourChiffre.sort(function(a, b) {
                    return a[1] - b[1];
                });

                // Pour l'affichage
                var newHTML = [];
                $.each(sortedRetourChiffre, function(index, value){
                    newHTML.push('<span style="color:red">' + value[0] + ' </span> - <span style="color:blue">' + value[1] + '</span><br>');
                });
                newHTML.push('<br><br>' );

                $.each(retourEtoile, function(index, value){
                    newHTML.push('<span style="color:red">' + index + ' </span> - <span style="color:blue">' + value + '</span><br>');
                });


                $("#result1").html(newHTML.join(' '));
            },
            error:function() {
                console.log("Error occured");
            }
        });
    });


});
