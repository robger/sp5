(function() {
	var app = angular.module('app', [
		'ui.router',
		'ngAnimate',
		'ui.bootstrap',
		'ui.grid',
		'ui.grid.exporter',
		'ui.grid.selection',
		'backand',
		'toastr'
	])

	// define for requirejs loaded modules
	define('app', [], function() { return app; });

	// function for dynamic load with requirejs of a javascript module for use with a view
	// in the state definition call add property `resolve: req('/views/ui.js')`
	// or `resolve: req(['/views/ui.js'])`
	// or `resolve: req('views/ui')`
	function req(deps) {
		if (typeof deps === 'string') deps = [deps];
		return {
			deps: function ($q, $rootScope) {
				var deferred = $q.defer();
				require(deps, function() {
					$rootScope.$apply(function () {
						deferred.resolve();
					});
					deferred.resolve();
				});
				return deferred.promise;
			}
		}
	}

	app.config(function($stateProvider, $urlRouterProvider, $controllerProvider,BackandProvider){
		var origController = app.controller
		app.controller = function (name, constructor){
			
			$controllerProvider.register(name, constructor);
			return origController.apply(this, arguments);
		}

		BackandProvider.setAppName('mynewtestapp')
			.setAnonymousToken('bc424084-e0f2-432f-b791-67bf58684461')
			.setSignUpToken('');

		var viewsPrefix = 'views/';

		// For any unmatched url, send to /
		$urlRouterProvider.otherwise("/")

		$stateProvider
			// you can set this to no template if you just want to use the html in the page
			.state('home', {
				url: "/",
				templateUrl: viewsPrefix + "home.html",
				data: {
					pageTitle: 'Home'
				}
			})
			.state('sponsors', {
				url: "/sponsors",
				templateUrl: viewsPrefix + "sponsors.html",
				data: {
					pageTitle: 'Sponsors'
				},
			})
			.state('users', {
				url: "/users",
				templateUrl: viewsPrefix + "users.html",
				data: {
					pageTitle: 'Users'
				},
			})
			.state('about', {
				url: "/about",
				templateUrl: viewsPrefix + "about.html",
				data: {
					pageTitle: 'About'
				}
			})
			.state('contact', {
				url: "/contact",
				templateUrl: viewsPrefix + "contact.html",
				data: {
					pageTitle: 'Contact'
				}
			})
			.state('contact.list', {
				url: "/list",
				templateUrl: viewsPrefix + "contact-list.html",
				controller: function($scope){
					$scope.things = ["A", "Set", "Of", "Things"];
				}
			})
			.state('theme', {
				url: "/theme",
				templateUrl: viewsPrefix + "theme.html",
				data: {
					pageTitle: 'Theme Example'
				}
			})
			.state('blog', {
				url: "/blog",
				templateUrl: viewsPrefix + "blog.html",
				data: {
					pageTitle: 'Blog'
				}
			})
			.state('grid', {
				url: "/grid",
				templateUrl: viewsPrefix + "grid.html",
				data: {
					pageTitle: 'Grid'
				}
			})
			.state('ui', {
				url: "/ui",
				resolve: req('/views/ui.js'),
				templateUrl: viewsPrefix + "ui.html",
				data: {
					pageTitle: 'UI'
				}
			})
	})
	.directive('updateTitle', ['$rootScope', '$timeout',
		function($rootScope, $timeout) {
			return {
				link: function(scope, element) {
					var listener = function(event, toState) {
						var title = 'Sponso';
						if (toState.data && toState.data.pageTitle) title = title + ' - ' + toState.data.pageTitle;
						$timeout(function() {
							element.text(title);
						}, 0, false);
					};

					$rootScope.$on('$stateChangeSuccess', listener);
				}
			};
		}
	]);
}());
