$(document).ready(function(){

	var str = "";
    var tab = [];
    for (var j = 1;  j <= 50; j++) {
	    str += '<li class="ui-state-default" id="'+j+'">'+j+'</li>';
        tab.push(j);
    }
	
	$("#selectable").append(str);


      function getRandomNumber(range, limit) {
        var arr = [];

        while(arr.length < limit){
          var randomnumber=Math.ceil(Math.random()*range)
          var found=false;
          for(var i=0;i<arr.length;i++){
        	if(arr[i]==randomnumber ){
                found=true;break
            }
          }
          if(!found)arr[arr.length]=randomnumber;
        }
        return arr;
      }


      $('#chiffre').click(function() {
          // Enlève tous les couleurs
          $('li').removeClass('ui-selected');

          var result = getRandomNumber(50, 45);   // Les 45 qu'on choisi


          var tabRest = [];  // 5 qui reste

          $.grep(tab, function(e) {
              if ($.inArray(e, result) == -1) {
                  tabRest.push(e);
              }
          });


          for(var k= 0; k<result.length; k++) {
              $('#' + result[k]).addClass('ui-selected');
          }

          // générer les numéros gagants
          var ball = '';
          for (var i = 0; i < tabRest.length; i++) {
              ball = ball.concat('<li class="ball">' + tabRest[i] + '</li>');
          }
          $(".balls").html(ball);


        });

        $('#etoile').click(function() {
              var result = getRandomNumber(11, 2);
              var star = '';
              for (var i = 0; i < result.length; i++) {
                star = star.concat('<li class="star">' + result[i] + '</li>');
              }
              $(".stars").html(star);
          });
});
