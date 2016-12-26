angular.module('app')
	.controller('navController', function($scope, $state, translateService) {
		$scope.title = 'Sponso';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};

		$scope.translateService = translateService;

		$scope.pages = [
			{
				name: 'Sponsors',
				url: '#/sponsors'
			},
			{
				name: 'Users',
				url: '#/users'
			},
			{
				name: 'Events',
				url: '#/evenementen'
			},
			{
				name: 'Finance',
				url: '#/financien'
			},
			{
				name: 'Youth',
				url: '#/jeugd'
			},
			// {
			// 	name: 'Home',
			// 	url: '#/'
			// },
			// {
			// 	name: 'About',
			// 	url: '#/about'
			// },
			// {
			// 	name: 'Contact',
			// 	url: '#/contact'
			// },
			{
				name: 'Example',
				url: '#/theme'
			},
			// {
			// 	name: 'Blog',
			// 	url: '#/blog'
			// },
			// {
			// 	name: 'Grid',
			// 	url: '#/grid'
			// },
			{
				name: 'UI',
				url: '#/ui'
			},
			// {
			// 	name: 'Dropdown Example',
			// 	url: '#',
			// 	subPages: [
			// 		{
			// 			name: 'About',
			// 			url: '#/about'
			// 		},
			// 		{},
			// 		{
			// 			name: 'Header',
			// 		},
			// 		{
			// 			name: 'Contact',
			// 			url: '#/contact'
			// 		}
			// 	]
			// }
		]
	});
