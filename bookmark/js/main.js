var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  // Get data
  $http.get('data/bookmark.json').then(function(response) {
    $scope.bookmarks = response.data.bookmarks;
  });

  // Save data
  $scope.save = function() {
  /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
    $scope.msg = 'Data saved';
  });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.bookmarks);
  };
});
