angular.module('movieApp')
	.controller('HomeController', function($scope, $interval, movieApi, PopularMovies) {
	var results = [
		/*{
			"title": "Star Wars: Episode IV - A New Hope",
			"imdbID": "tt0076759"
		},
		{
			"title": "Star Wars: Episode V - The Empire Strikes Back",
			"imdbID": "tt0080684"
		},
		{
			"title": "Star Wars: Episode VI - Return of Jedi",
			"imdbID": "tt0086190"
		}*/
	];
	var idx = 0;
	var findMovie = function(id) {
		movieApi.find(id)
			.then(function(data) {
				$scope.result = data;
			});
	};
	var intervalCancel;
	
	// Get PopularMovies List
	/*PopularMovies.get()
		.then(function(data) {
			results = data;*/
			results = ['movie/4194','tv/3122','movie/140607'];
			findMovie(results[0]);
			intervalCancel = $interval(function() {
				idx++;
				findMovie(results[idx % results.length]);
			}, 5000);
		//});
});
