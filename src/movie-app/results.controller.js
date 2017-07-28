angular.module('movieApp')
	.controller('ResultsController', function($scope, $location, movieApi) {
			/*$scope.results = [];
			$scope.results.push({data:{Name: "User 12345"}});
			$scope.results.push({data:{Name: "User 12346"}});
			$scope.results.push({data:{Name: "User 12347"}});*/
			console.log('results controller location.url='+$location.url());
			movieApi.search($location.search().q)
			.then(function(data) {
				//console.log('data='+data);
				$scope.results = data.results;
			})
			.catch(function() {
				$scope.errorMessage = 'Something went wrong!';
			});
	});
