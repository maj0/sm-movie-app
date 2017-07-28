angular.module('movieApp')
	.controller('SearchController', function($scope, $location) {
		$scope.search = function() {
		//$scope.search = function() {
			console.log('location.url='+$location.url());
			console.log('scope.query=' + $scope.query);
			if($scope.query) {
				$location.path('/results').search('q', $scope.query);
			}
		};
	});
