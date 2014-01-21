'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'phonecatUIControllers',
  'ui.router',
  'ui.bootstrap'
]);

/*
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
*/

phonecatApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /phones
	$urlRouterProvider.otherwise("/phone-list");
	// Now set up the states
	$stateProvider
	.state('state1', {
		url: "/state1",
		templateUrl: "partials/phone-detail.html",
		//controller: 'PhoneListCtrl'
		controller: function($scope) {
			$scope.phones = ["A", "Set", "Of", "Things"];
		}
	})
	.state('phone-list', {
		url: "/phone-list",
		templateUrl: "partials/phone-list.html",
		controller: 'PhoneListCtrl'
	})
	.state('phone-detail', {
		url: "/phone-detail",
		templateUrl: "partials/phone-detail.html",
		controller: 'PhoneDetailCtrl'
	})
	.state('car', {
		url: "/car",
		templateUrl: "partials/car.html"
	})
	.state('traffic', {
		url: "/traffic",
		templateUrl: "partials/traffic.html",
		controller: function($scope) {
			$scope.things = ["A", "Set", "Of", "Things"];
		}
	})
	.state('map', {
		url: "/map",
		templateUrl: "partials/map.html",
		controller: function($scope) {
			$scope.things = ["A", "Set", "Of", "Things"];
		}
	})
});
