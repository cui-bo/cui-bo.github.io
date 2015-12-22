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
                    var num1 = tab[3], num2 = tab[4],
                        num3 = tab[5], num4 = tab[6],
                        num5 = tab[7];
                    var star1 = tab[8], star2 = tab[9];

                    if(!(num1 in retourChiffre)) {
                        retourChiffre[num1] = 1;
                    } else {
                        retourChiffre[num1]++;
                    }
                    if(!(num2 in retourChiffre)) {
                        retourChiffre[num2] = 1;
                    } else {
                        retourChiffre[num2]++;
                    }
                    if(!(num3 in retourChiffre)) {
                        retourChiffre[num3] = 1;
                    } else {
                        retourChiffre[num3]++;
                    }
                    if(!(num4 in retourChiffre)) {
                        retourChiffre[num4] = 1;
                    } else {
                        retourChiffre[num4]++;
                    }
                    if(!(num5 in retourChiffre)) {
                        retourChiffre[num5] = 1;
                    } else {
                        retourChiffre[num5]++;
                    }

                    if(!(star1 in retourEtoile)) {
                        retourEtoile[star1] = 1;
                    } else {
                        retourEtoile[star1]++;
                    }

                    if(!(star2 in retourEtoile)) {
                        retourEtoile[star2] = 1;
                    } else {
                        retourEtoile[star2]++;
                    }
                }
                console.log(retourChiffre);
                console.log(retourEtoile);

                $("#result1").text(JSON.stringify(retourChiffre));
                $("#result2").text(JSON.stringify(retourEtoile));
            },
            error:function() {
                console.log("Error occured");
            }
        });
    });


});
