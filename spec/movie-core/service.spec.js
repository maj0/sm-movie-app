describe('movie popular users service', function() {

	var PopularMovies;
	var $httpBackend;

	beforeEach(angular.mock.module('movieCore'));
	//$http is not available in test environment we nee to provide it
	beforeEach(angular.mock.inject(function(_PopularMovies_, _$httpBackend_){
			PopularMovies = _PopularMovies_;
			$httpBackend = _$httpBackend_;
		}));
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it('should creat popular users', function() {
		var expectData = function(data) {
			//console.log(angular.mock.dump(data))
			return angular.fromJson(data).userId === '12345';
		};
		$httpBackend.expectPOST(/./, expectData)
		.respond(201);
		var popularMovie = new PopularMovies({
			userId: '12345',
			description: 'Popular user!'
		});
		popularMovie.$save();
		expect($httpBackend.flush).not.toThrow();
	});
	it('should get popular user by id', function() {
		$httpBackend.expectGET(function(url) {
			//console.log('url='+url);
			return true;
		}).respond(200);
		PopularMovies.get({userId: '12345'});
		expect($httpBackend.flush).not.toThrow();
	});
	
	it('should update popular user', function() {
		$httpBackend.expectPUT(function(url) {
			//console.log('url='+url);
			return true;
		}).respond(200);
		
		var popularMovie = new PopularMovies({
			userId: '12345',
			description: 'Great user!'
		});

		popularMovie.$update();
		expect($httpBackend.flush).not.toThrow();
	});
	
	it('should authenticate requests', function() {
		var headerData = function(headers) {
			//console.log(angular.mock.dump(headers));
			return angular.fromJson(headers).authToken === 'teddybear';
		};
		
		var matchAny = /.*/;
		
		$httpBackend.whenGET(matchAny, headerData)
			.respond(200);
		$httpBackend.expectPOST(matchAny, matchAny, headerData)
			.respond(200);
		$httpBackend.expectPUT(matchAny, matchAny, headerData)
			.respond(200);
		$httpBackend.expectDELETE(matchAny, headerData)
			.respond(200);
		
		var popularMovie = {id: '12345', description: 'This user is great!' };
		
		PopularMovies.query();
		PopularMovies.get({id: '12345'});
		new PopularMovies(popularMovie).$save();
		new PopularMovies(popularMovie).$update();
		new PopularMovies(popularMovie).$remove();
		
		/*$httpBackend.flush(1);
		$httpBackend.flush(1);
		$httpBackend.flush(1);
		$httpBackend.flush(1);
		$httpBackend.flush(1);*/
		//can be replaced with one line code
		expect($httpBackend.flush).not.toThrow();
	});
});
