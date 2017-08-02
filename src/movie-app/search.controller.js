angular.module('movieApp')
	.controller('SearchController', function($scope, $location, $timeout) {
		var timeout;
		$scope.keyup = function() {
			timeout = $timeout($scope.search, 1000);
		};
		$scope.keydown = function() {
			$timeout.cancel(timeout);
			timeout = false;
		};
		$scope.search = function() {
		//$scope.search = function() {
			console.log('location.url='+$location.url());
			console.log('scope.query=' + $scope.query);
			if(timeout) $timeout.cancel(timeout);
			if($scope.query) {
				$location.path('/results').search('q', $scope.query);
			}
		};
	});
