$(document).ready(function(){

      //$('.grid').
        for (var j = 1;  j <= 50; j++) {
          $('#selectable').after('<li class="ui-state-default" id="'+j+'">'+j+'</li>');
        }


      //$( "#selectable" ).selectable();


      function getRandomNumber(range, limit) {
        var arr = []
        while(arr.length < limit){
          var randomnumber=Math.ceil(Math.random()*range)
          var found=false;
          for(var i=0;i<arr.length;i++){
        	if(arr[i]==randomnumber){found=true;break}
          }
          if(!found)arr[arr.length]=randomnumber;
        }
        return arr;
      }


      $('#chiffre').click(function() {
            var result = getRandomNumber(50, 5);
            var ball = '';
            for (var i = 0; i < result.length; i++) {
              ball = ball.concat('<li class="ball">' + result[i] + '</li>');
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
