describe('Movie Result Directive', function() {
	var result = {
		"backdrop_path":"/gAlEO2hFU29uFv6RcC7efps0iL9.jpg",
		"created_by":[{"id":1,"name":"George Lucas","profile_path":"/8qxin8urtFE0NqaZNFWOuV537bH.jpg"}],
		"episode_run_time":[25,30,22],
		"first_air_date":"2008-10-03",
		"genres":[
			{"id":10759,"name":"Action & Adventure"},
			{"id":16,"name":"Animation"},
			{"id":10765,"name":"Sci-Fi & Fantasy"}
		],
		"homepage":"http://www.cartoonnetwork.com/clonewars/",
		"id":4194,
		"in_production":false,
		"languages":["en"],
		"last_air_date":"2014-03-07",
		"name":"Star Wars: The Clone Wars",
		"networks":[{"id":56,"name":"Cartoon Network"}],
		"number_of_episodes":121,
		"number_of_seasons":6,
		"origin_country":["SG","US"],
		"original_language":"en",
		"title":"Star Wars: The Clone Wars",
		"original_name":"Star Wars: The Clone Wars",
		"overview":"Star Wars: The Clone Wars is an Emmy Award-winning American 3D CGI animated television series created by George Lucas and produced by Lucasfilm Animation with the division Lucasfilm Animation Singapore, Lucasfilm and CGCG Inc. The series debuted on the US version of Cartoon Network on October 3, 2008. It is set in the fictional Star Wars galaxy, during the same time period as the previous 2003 Star Wars: Clone Wars series. Each episode has a running time of 22 minutes, to fill a half-hour time slot. In 2007, Star Wars creator George Lucas stated \"there will be at least 100 episodes produced [about five seasons]\". Dave Filoni is the supervising director of the series. Genndy Tartakovsky, director of the first Clone Wars series, was not involved with the production, but character designer Kilian Plunkett referred to the character designs from the 2D series when designing the characters for the 3D series. There is also an online comic, depicting story-snippets between the single episodes.\n\nThe first trailer for the series was released on the official Star Wars website on May 8, 2007. The series was launched with an animated feature film, which was released in theaters on August 15, 2008. Season 2 ended on April 30, 2010. Season 3 premiered on September 17, 2010, with the complete second season releasing on Blu-ray Disc and DVD October 26, 2010. Season 4 premiered on September 16, 2011 with the Complete Season 3 on Blu-ray Disc and DVD released October 18, 2011. The fourth season was released for Blu-ray Disc and DVD release on October 23, 2012. Season 5 premiered on September 29, 2012 with a new time slot of 9:30 A.M. PT/ET.","popularity":11.326648,
		"poster_path":"/k2D7iNM612FfCg25VdwiA53tjiO.jpg",
		"production_companies":[],
		"seasons":[
			{"air_date":"2008-08-14","episode_count":38,"id":12281,"poster_path":null,"season_number":0},
			{"air_date":"2008-10-03","episode_count":22,"id":12278,"poster_path":"/AiP9Qfc2pmiqCeeQHVkvDcrTST6.jpg","season_number":1},
			{"air_date":"2009-11-08","episode_count":22,"id":12279,"poster_path":"/1fBVJ8DSAxJVVxYmXMsadBUFOzm.jpg","season_number":2},
			{"air_date":"2010-09-17","episode_count":22,"id":12280,"poster_path":"/n9lOLpX6DDmL4NviuseCybIzXEa.jpg","season_number":3},
			{"air_date":"2011-09-16","episode_count":22,"id":12282,"poster_path":"/woKc0qB2TAbSZp0VZQ6vyqgZf9.jpg","season_number":4},
			{"air_date":"2012-09-29","episode_count":20,"id":62850,"poster_path":"/dhsNoBLjJjfIzwLZTz6jDyI1Qza.jpg","season_number":5},
			{"air_date":"2014-03-07","episode_count":13,"id":62851,"poster_path":"/wGFIWjkvDufyDDWfcIcvahAhD4g.jpg","season_number":6}
		],
		"status":"Canceled",
		"type":"Scripted",
		"vote_average":7.4,
		"vote_count":90
	};
	var expectedHTML = [
						'<div class="col-sm-4">',
								'<img ng-src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/k2D7iNM612FfCg25VdwiA53tjiO.jpg" alt="Star Wars: The Clone Wars" width="220" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/k2D7iNM612FfCg25VdwiA53tjiO.jpg">',
							'</div>',
							'<div class="col-sm-8">',
								'<h3 class="ng-binding">Star Wars: The Clone Wars</h3>',
								'<p class="ng-binding">Star Wars: The Clone Wars is an Emmy Award-winning American 3D CGI animated television series created by George Lucas and produced by Lucasfilm Animation with the division Lucasfilm Animation Singapore, Lucasfilm and CGCG Inc. The series debuted on the US version of Cartoon Network on October 3, 2008. It is set in the fictional Star Wars galaxy, during the same time period as the previous 2003 Star Wars: Clone Wars series. Each episode has a running time of 22 minutes, to fill a half-hour time slot. In 2007, Star Wars creator George Lucas stated \"there will be at least 100 episodes produced [about five seasons]\". Dave Filoni is the supervising director of the series. Genndy Tartakovsky, director of the first Clone Wars series, was not involved with the production, but character designer Kilian Plunkett referred to the character designs from the 2D series when designing the characters for the 3D series. There is also an online comic, depicting story-snippets between the single episodes.\n\nThe first trailer for the series was released on the official Star Wars website on May 8, 2007. The series was launched with an animated feature film, which was released in theaters on August 15, 2008. Season 2 ended on April 30, 2010. Season 3 premiered on September 17, 2010, with the complete second season releasing on Blu-ray Disc and DVD October 26, 2010. Season 4 premiered on September 16, 2011 with the Complete Season 3 on Blu-ray Disc and DVD released October 18, 2011. The fourth season was released for Blu-ray Disc and DVD release on October 23, 2012. Season 5 premiered on September 29, 2012 with a new time slot of 9:30 A.M. PT/ET.</p>',
								'<p><a href="" class="ng-binding">4194</a></p>',
							'</div>'
					].join('');

	var $compile;
	var $rootScope;
	
	beforeEach(module('movieApp'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	it('should output movie result to expected HTML format', function() {
		var scope = {};
		//console.log('result.title=' + result.title);
		$rootScope.result = result;
		var element;
		element = $compile('<movie-result result="result"></movie-result')($rootScope);
		//console.log('element='+element[0].outerHTML);
		$rootScope.$digest();
		expect(element.html()).toBe(expectedHTML);
	});

});