// Typeahead js
$(document).ready(function() {

  var bookmarks = {};
  var bookmarks.category = [];

  $.ajax({
    url: "data/bookmark.json",
    async: false,
    dataType: 'json',
    success: function(data) {
      $.each(data.bookmarks, function(key, bookmark) {
        if (jQuery.inArray(bookmark.category, bookmarks.category) == -1) {
     bookmarks.category.push(bookmark.category);
        }
      });
    }
  });


  $('input.typeahead').typeahead({
    name: 'bookmark',
    local: bookmarks.category,
    //prefetch: 'data/countries.json',
    limit: 10
  });

  $('#search').click(function(){
    
  });

});



/*
// Angular JS
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  // Get data
  $http.get('data/bookmark.json').then(function(response) {
    $scope.bookmarks = response.data.bookmarks;
  });

  // Save data
  $scope.save = function() {
    $http.post('data/new.json', $scope.bookmarks).then(function(data) {
      console.log(data);
      $scope.msg = 'Data saved';
    });
    //$scope.msg = 'Data sent: '+ JSON.stringify($scope.bookmarks);
  };
});
*/
