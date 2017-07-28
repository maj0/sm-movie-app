angular.module('movie', [])
	.factory('movieApi', function($http, $q) {
		var service = {};
		var baseUrl = 'https://api.themoviedb.org/3';//movie/550?
		var api_key = '1dec39d1390f102f1795b7ddb8d85160';
		
		function httpPromise(url) {
			var deferred = $q.defer();
			console.log('get url=' + url);
			$http.get(url)
			.success(function(data) {
				console.log('Promise sucess data:' + data);
				deferred.resolve(data);
			})
			.error(function() {
				deferred.reject();
			});
			return deferred.promise;
		}
		
		service.search = function(query) {
			return httpPromise(
					baseUrl + '/search/multi?api_key=' + api_key + '&query=' + encodeURIComponent(query)
				);
		};
		service.find = function(id) {
			return httpPromise(baseUrl + 
				'/movie/' +
				encodeURIComponent(id) + 
				'?api_key=' + api_key
			);
		};
		return service;
	});