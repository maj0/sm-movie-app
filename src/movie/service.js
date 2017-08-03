angular.module('movie', [])
	.factory('movieApi', function($http, $q) {
		var service = {};
		var baseUrl = 'https://api.themoviedb.org/3';//movie/550?
		var api_key = '1dec39d1390f102f1795b7ddb8d85160';
		
		function httpPromise(url) {
			var deferred = $q.defer();
			//console.log('get url=' + url);
			$http.get(url)
			.success(function(data) {
				//console.log('Promise sucess data:' + data);
				data.url = url; // to be used in movie-result directive
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
		//https://api.themoviedb.org/3/tv/4194?api_key=1dec39d1390f102f1795b7ddb8d85160
		//https://api.themoviedb.org/3/tv/253?api_key=1dec39d1390f102f1795b7ddb8d85160
		//https://image.tmdb.org/t/p/w185_and_h278_bestv2/tWqifoYuwLETmmasnGHO7xBjEtt.jpg
		service.find = function(id) {
			return httpPromise(baseUrl + '/' + id + '?api_key=' + api_key);
		};
		return service;
	});