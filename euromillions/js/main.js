$(document).ready(function(){

/*
  $('#chiffre').click(function() {
        $.ajax({
            type: 'POST',
            url: 'generate_numbers.php',
            data: {'min': 1, 'max':50, 'quantity': 5},
            dataType: 'json',
            cache: false,
            success: function(result) {
                var ball = '';
                for (var i = 0; i < result.length; i++) {
                  ball = ball.concat('<li class="ball">' + result[i] + '</li>');
                }
                $(".balls").html(ball);
            },
        });
    });

    $('#etoile').click(function() {
          $.ajax({
              type: 'POST',
              url: 'generate_numbers.php',
              data: {'min': 1, 'max':10, 'quantity': 2},
              dataType: 'json',
              cache: false,
              success: function(result) {
                  var star = '';
                  for (var i = 0; i < result.length; i++) {
                    star = star.concat('<li class="star">' + result[i] + '</li>');
                  }
                  $(".stars").html(star);
              },
          });
      });

      */

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
              var result = getRandomNumber(10, 2);
              var star = '';
              for (var i = 0; i < result.length; i++) {
                star = star.concat('<li class="star">' + result[i] + '</li>');
              }
              $(".stars").html(star);
          });
});
