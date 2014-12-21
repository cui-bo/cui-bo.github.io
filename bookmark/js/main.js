// Typeahead js
$(document).ready(function() {

  var arrBookmarks = [];

  // $.getJSON("data/bookmark.json", {}, function(data) {
  //   $.each(data.bookmarks, function(key, bookmark) {
  //     //if (jQuery.inArray(bookmark.category, bookmarks) == -1) {
  //     arrBookmarks.push(bookmark.category);
  //     //}
  //   });
  // });

  $.ajax({
    url: "data/bookmark.json",
    async: false,
    dataType: 'json',
    success: function(data) {
      $.each(data.bookmarks, function(key, bookmark) {
        if (jQuery.inArray(bookmark.category, arrBookmarks) == -1) {
          arrBookmarks.push(bookmark.category);
        }
      });
    }
  });


  $('input.typeahead').typeahead({
    name: 'bookmark',
    local: arrBookmarks,
    //prefetch: 'data/countries.json',
    limit: 10
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
