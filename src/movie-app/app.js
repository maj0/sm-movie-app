angular.module('movieApp', ['ui.bootstrap','ngRoute','movie','movieCore'])
 .config(function($routeProvider) {
    console.log('$routeProvider is ' + $routeProvider);
    $routeProvider
      .when('/', {
        templateUrl: 'movie-app/home.html',
        controller: 'HomeController'
      })
      .when('/results', {
        templateUrl: 'movie-app/results.html',
        controller: 'ResultsController'
      })
      /*.when('/popular/:username', {
        templateUrl: 'user.html',
        controller: 'UserCtrl'
      })
      .when('/repo/:username/:reponame', {
        templateUrl: 'repo.html',
        controller: 'RepoCtrl'
      })*/
        .otherwise({
        redirectTo: '/'
      });
  });
