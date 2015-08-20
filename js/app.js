
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'

      })
      .when('/search/:title', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
      .when('/id/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      });
});
