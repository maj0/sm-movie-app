describe('Home Controller', function() {
	var results = [ 
	    {
			"title": "Star Wars: Episode IV - A New Hope",
			"imdbID": "tt0076759",
			"poster_path":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/k2D7iNM612FfCg25VdwiA53tjiO.jpg",
			"id":4194,"media_type":"movie"
		},
		{
			"title": "Star Wars: Episode V - The Empire Strikes Back",
			"imdbID": "tt0080684",
			"poster_path":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/k2D7iNM612FfCg25VdwiA53tjiO.jpg",
			"id":3122,"media_type":"tv"
		},
		{
			"title": "Star Wars: Episode VI - Return of Jedi",
			"poster_path":"https://image.tmdb.org/t/p/w185_and_h278_bestv2/k2D7iNM612FfCg25VdwiA53tjiO.jpg",
			"imdbID": "tt0086190",
			"id":140607,"media_type":"movie"
		}
	];
	var $scope;
	var $interval;

	//beforeEach(module('movie'));
	beforeEach(module('movieApp'));
	// setup fake function call	
	beforeEach(inject(function(_$q_, _PopularMovies_) {
		spyOn(_PopularMovies_, 'get').and.callFake(function() {
			var deferred = _$q_.defer();
			deferred.resolve(['movie/4194','tv/3122','movie/140607']);
			return deferred.promise;
		});
	}));
	// setup fake function call
	beforeEach(inject(function(_$q_, _movieApi_) {
		spyOn(_movieApi_, 'find').and.callFake(function() {
			var deferred = _$q_.defer();
			var args = _movieApi_.find.calls.mostRecent().args[0];
			//console.log('find args='+args);
			if(args === 'movie/4194') {
				deferred.resolve(results[0]);
			} else if (args ===  'tv/3122') {
				deferred.resolve(results[1]);
			} else if (args ===  'movie/140607') {
				deferred.resolve(results[2]);
			} else {
				deferred.reject();
			}
			return deferred.promise;
		});
	}));
	beforeEach(inject(function(_$controller_, _$interval_, _$rootScope_, _movieApi_, _PopularMovies_) {
		$scope = {};
		$interval = _$interval_;
		_$controller_('HomeController', {
			$scope: $scope,
			$interval: _$interval_,
			movieApi: _movieApi_,
			PopularMovies: _PopularMovies_
		});
		_$rootScope_.$apply();
	}));
	
	it('should rotate movies every 5 seconds', function() {
		//console.log('HomeController spec scope=' + angular.mock.dump($scope));
		//console.log('HomeController spec scope.result.title=' + $scope.result.title);
		// should have a default movie
		expect($scope.result.title).toBe(results[0].title);
		// should update after 5 seconds
		$interval.flush(5000);
		expect($scope.result.title).toBe(results[1].title);
		// should update after 5 seconds
		$interval.flush(5000);
		expect($scope.result.title).toBe(results[2].title);
		// should have a default movie
		$interval.flush(5000);
		expect($scope.result.title).toBe(results[0].title);
	})

});