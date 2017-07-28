describe('results controller', function() {
	var results = { "results": [
			{
				movieID: "12345",
				"Name": "User 12345",
				"Descript": "Descript user 12345"
			},
			{
				movieID: "12346",
				"Name": "User 12346",
				"Descript": "Descript user 12346"
				
			},
			{
				movieID: "12347",
				"Name": "User 12347",
				"Descript": "Descript user 12347"
				
			}
		]
	};
	var $controller;
	var $q;
	var $rootScope;
	var $scope;
	var $location;
	var movieApi;

	beforeEach(module('movie'));
	beforeEach(module('movieApp'));
	beforeEach(inject(function(_$controller_, _$location_,_$q_, _$rootScope_, _movieApi_) {
		$controller = _$controller_;
		$location = _$location_;
		$scope = {};
		$q = _$q_;
		$rootScope = _$rootScope_;
		movieApi = _movieApi_;
	}));
	
	it('should load search results', function() {
		// controller(<controller name>, locals[, bindings])
		spyOn(movieApi, 'search').and.callFake(function() {
			var deferred = $q.defer();
			deferred.resolve(results);
			return deferred.promise;
		});
		$location.search('q', 'star wars');
		$controller('ResultsController', {$scope: $scope});
		$rootScope.$apply();
		//console.log('scope='+angular.mock.dump($scope));
		expect($scope.results[0].Name).toBe(results.results[0].Name);
		expect($scope.results[1].Name).toBe(results.results[1].Name);
		expect($scope.results[2].Name).toBe(results.results[2].Name);
		expect(movieApi.search).toHaveBeenCalledWith('star wars');
	})
	
	it('should set result status to error', function() {
		// controller(<controller name>, locals[, bindings])
		spyOn(movieApi, 'search').and.callFake(function() {
			var deferred = $q.defer();
			deferred.reject();
			return deferred.promise;
		});
		$location.search('q', 'star wars');
		$controller('ResultsController', {$scope: $scope});
		$rootScope.$apply();
		//console.log('scope='+angular.mock.dump($scope));
		expect($scope.errorMessage).toBe('Something went wrong!');
	})

});