$(document).ready(function(){

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


                    // Pour remplir l'objet de retour
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

                var sortedRetourEtoile = [];
                for (var indice in retourEtoile){
                    sortedRetourEtoile.push([indice, retourEtoile[indice]]);
                }
                sortedRetourEtoile.sort(function(a, b) {
                    return a[1] - b[1];
                });

                // Pour l'affichage
                var newHTML = [], newHTML2 = [];
                $.each(sortedRetourChiffre, function(index, value){
                    newHTML.push('<span style="color:red">' + value[0] + ' </span> - <span style="color:blue">' + value[1] + '</span><br>');
                });
                newHTML.push('<br><br>' );

                $.each(sortedRetourEtoile, function(index, value){
                    newHTML2.push('<span style="color:red">' + value[0] + ' </span> - <span style="color:blue">' + value[1] + '</span><br>');
                });

                $("#result1").html(newHTML.join(' '));
                $("#result2").html(newHTML2.join(' '));


                // Récupérer les 10 premiers chiffres et 4 premiers étoiles
                var tabChiffre = [],
                    tabEtoile = [];
                for (var i=0; i< 10; i++) {
                    tabChiffre.push(sortedRetourChiffre[i][0]);
                }
                for (var i=0; i< 4; i++) {
                    tabEtoile.push(sortedRetourEtoile[i][0]);
                }

                // random
                tabChiffre = tabChiffre.sort(function() {
                  return .5 - Math.random();
                });
                tabEtoile = tabEtoile.sort(function() {
                  return .5 - Math.random();
                });

                // Affichier les boules sur html
                var ball = '';
                for (var i = 0; i < tabChiffre.length; i++) {
                    ball = ball.concat('<li class="ball">' + tabChiffre[i] + '</li>');
                }
                $(".balls").html(ball);


                // Affichier les étoiles sur html
                var star = '';
                for (var i = 0; i < tabEtoile.length; i++) {
                    star = star.concat('<li class="star">' + tabEtoile[i] + '</li>');
                }
                $(".stars").html(star);


            },
            error:function() {
                console.log("Error occured");
            }
        });
    });
});
