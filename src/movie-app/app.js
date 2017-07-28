angular.module('movieApp', ['ui.bootstrap','ngRoute','movie'])
 .config(function($routeProvider) {
    console.log('$routeProvider is ' + $routeProvider);
    $routeProvider
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
