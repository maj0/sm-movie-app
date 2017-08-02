describe('search controller', function() {
	//var $this;
	var $scope;
	var $location;
	var $controller;
	var $timeout;

	beforeEach(module('movieApp'));
	/*beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
		$controller = _$controller_;
		$location = _$location_;
		$timeout = _$timeout_;
		$scope = {};
	}));*/
	beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
		$location = _$location_;
		$timeout = _$timeout_;
		$scope = {};
		//var fn = function() {
		//	$scope.search = function() {
		//		if($scope.query)
		//		{
		//			$location.path('/results').search('q', $scope.query);
		//		}
		//	}
		//};
		//_$controller_(fn, { $scope: $scope, $location: $location});
		_$controller_('SearchController', { $scope: $scope, $location: $location, $timeout: $timeout});
	}));
	
	it('should redirect to the query results page for non-empty query', function() {
		var query = 'star wars';
		// controller(<controller name>, locals[, bindings])
		//$this = $controller('SearchController', {$location: $location }, {query: 'star wars'});
		//$controller('SearchController', { $scope: $scope, $location: $location }, {query: query});
		$scope.query = query;
		$scope.search();
		expect($location.url()).toBe('/results?q=' + encodeURIComponent(query));
	})
	
	it('should not redirect to the query results page for empty query', function() {
		//$this = $controller('SearchController', {$location: $location }, {query: ''});
		//$controller('SearchController', {$scope: $scope, $location: $location }, {query: ''});
		$scope.query = '';
		$scope.search();
		expect($location.url()==='/'?'':'').toBe('');
	})
	
	it('should redirect after 1 second keyup inactivity', function(){
		//$controller('SearchController', {$scope: $scope, $location: $location, $timeout: $timeout }, {query: 'star wars'});
		$scope.query = 'star wars';
		$scope.keyup();
		$timeout.flush();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
		expect($location.url()).toBe('/results?q=star%20wars');
	})

	it('should cancel timeout after keydown', function(){
		//$controller('SearchController', {$scope: $scope, $location: $location, $timeout: $timeout }, {query: 'star wars'});
		$scope.query = 'star wars';
		$scope.keyup();
		$scope.keydown();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	})
	
	it('should cancel timeout on search', function(){
		//$controller('SearchController', {$scope: $scope, $location: $location, $timeout: $timeout }, {query: 'star wars'});
		$scope.query = 'star wars';
		$scope.keyup();
		$scope.search();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	})

});