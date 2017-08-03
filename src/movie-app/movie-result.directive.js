angular.module('movieApp')
	.directive('movieResult', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				result: '=result'
			},
			template: [
						'<div class="row">',
							'<div class="col-sm-4">',
								'<img ng-src="https://image.tmdb.org/t/p/w185_and_h278_bestv2{{result.poster_path}}" alt="{{result.title}}" width="220">',
							'</div>',
							'<div class="col-sm-8">',
								'<h3>{{ result.title?result.title:result.name }}</h3>',
								'<p>{{ result.overview }}</p>',
								'<p><a href="{{ result.url }}" target="_blank">{{ result.id }}</a></p>',
							'</div>',
						'</div>'
					].join('')
		}
	});