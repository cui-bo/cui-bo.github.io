// Typeahead js
$(document).ready(function() {
  $('input.typeahead').typeahead({
    // name: 'accounts',
    // local: ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini',
    //   'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'
    // ]

    name: 'bookmark',
    prefetch: 'data/countries.json',
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
