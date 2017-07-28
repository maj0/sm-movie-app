angular.module('github', [])
	.factory('githubApi', function githubFactory() {
		return {
			search: function() {
				// logic to get data
				return githubData;
			}
		}
	});