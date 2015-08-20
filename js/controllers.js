var app = angular.module("movie", ['ngRoute']);

app.controller("search", function ($scope, $http) {
  $scope.searchTitle = function () {
      $http.get('http://www.omdbapi.com/?s=' + $scope.movieTitle).then(function(data){
          $scope.allData = data.data.Search;
          console.log($scope.allData);
      });

  };

});
