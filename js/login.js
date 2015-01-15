$(document).ready(function() {
 var arrUsers = [];
  // Get users
   $.ajax({
   	url: "_data/users.json",
   	async: false,
   	dataType: 'json',
   	success: function(data) {
   		$.each(data.users, function(key, user) {
   			arrUsers.push(user);
   		});
   	}
   });

  var validLogin = function() {
    var inputUsername = $('input[name="login"]').val();
    var inputPassword = $('input[name="password"]').val();
    // Redirect
    $.each(arrUsers, function(key, user) {
      if ((user.username == inputUsername) && (user.password ==
          inputPassword)) {
        window.location.replace('pinterest/index.html');
        //window.location.replace('http://cuiborails.wordpress.com');
      }
    });
  }

  // Click submit button
  $('#submit').click(function() {
    validLogin();
  });

  // Press enter key
  $('input[name="password"]').keydown(function(event) {
    if (event.keyCode == 13) {
      validLogin();
    }
  });


});
