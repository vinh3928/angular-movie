var app = angular.module("movie", ['ngRoute']);

app.controller("HomeController", function ($scope, $http) {
  $scope.message = "home controller";
});

app.controller("SearchController", function($scope, $http, $routeParams) {
  $scope.message = "search controller";
  $http.get('http://www.omdbapi.com/?s=' + $routeParams.title).then(function(data){
      $scope.allData = data.data.Search;
      console.log($scope.allData);
  });
});

app.controller("ShowController", function($scope, $http, $routeParams) {
  $scope.message = "show controller";
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id + '&plot=full&r=json').then(function(data) {
    $scope.showData = data.data
    console.log(data);
  });

});
