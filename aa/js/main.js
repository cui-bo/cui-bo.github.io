
$(document).ready(function() {

  totalCost = 0;
  totalPerson = 7;
  function calculTotal() {
    // Total Cost
    $.ajax({
      url: "http://31.33.159.63/aa/sum.php",
      type: "GET",
      dataType : 'jsonp',
      success: function(data) {
        //totalCost = data;
        $.each(data, function(key, value) {
          var indice = key + 1;
          $('input[id='+indice+']').val(value);
          totalCost += parseInt(value);
        });
        $('#totalCost').text(totalCost);
        updateIHM();
      },
      failure: function() {
        console.log('There is an error');
      }
    });
  }

  calculTotal();

  function updateIHM() {
    // Maj l'IHM
    eachPay = totalCost / totalPerson;
    eachPay = eachPay.toFixed(2);
console.log(eachPay);
    for(i = 1; i <= totalPerson; i++) {
      $('#in'+i).text();
      $('#out'+i).text();
      var v = $('input[id='+i+']').val() ? $('input[id='+i+']').val() : 0;
      var c = parseFloat(v);
      var d = parseFloat(eachPay);

      if(c > eachPay) {
        var receive = c - eachPay;
        $('#in'+i).text(receive.toFixed(2));
        $('#out'+i).text(0);
      } else if (c < eachPay) {
        var out = eachPay - c;
        $('#in'+i).text(0);
        $('#out'+i).text(out.toFixed(2));
      } else {
        $('#in'+i).text(0);
        $('#out'+i).text(0);
      }
    }
  }

  function majTotal() {
    var v2 = 0;
    for(i = 1; i <= totalPerson; i++) {
      v3 = $('input[id='+i+']').val() ? $('input[id='+i+']').val() : 0;
      v2 = parseInt(v3) + parseInt(v2);
    }
    $('#totalCost').text(v2);
    totalCost = v2;
  }

  function videChamps() {
    for(i = 1; i <= totalPerson; i++) {
      v11 = $('input[id='+i+']').val() ? $('input[id='+i+']').val() : 0;
      if (parseFloat(v11) !== 0) {
        return;
      }
    }
    $('#in'+i).text(0);
    $('#out'+i).text(0);
  }


  $(".money").keyup(function() {
    var self = this;
    var id = self.id;
    var cost = $('input[id='+id+']').val();

    // update database
    $.ajax({
      url: "http://31.33.159.63/aa/update.php",
      type: "POST",
      dataType : 'json',
      data : {"id": id, "cost": cost},
      success: function(data) {
        console.log("success");
      },
      failure: function() {
        console.log('There is an error');
      }
    });

    majTotal();
    updateIHM();
    //videChamps();

  });



});
