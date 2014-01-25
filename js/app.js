'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'UIControllers',
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
	$urlRouterProvider.otherwise("/phones");
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
	.state('phones', {
		url: "/phones",
		templateUrl: "partials/phone-list.html",
		controller: 'PhoneListCtrl'
	})
	.state('phone-detail', {
		url: "/phones/:phoneId",
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
	// this state start Fragment Manager
	.state('testfragment', {
		url: "/testfragment",
		templateUrl: "partials/testbuttonfragment.html",
		controller: 'UIFragmentController',
		data: {
			// define 2 fragments: each fragment has a tab oder button
			fragments: [
				{ title:"TabFragment Title 1", 
					content:"Dynamic content 1",
					fragmentState:"testfragment.fragment1",
					onselect: function() {
						
						//$state.transitionTo('testfragment.fragment1');
						// works
						setTimeout(function() {
							alert("You've selected the alert tab!");
						});
					}
				},
				{ title:"TabFragment Title 2", 
					content:"Dynamic content 2",
					fragmentState:"testfragment.fragment2",
					onselect: function () {
						transitionTo('testfragment.fragment2');
					},
					page:"partials/phone-detail.html"
					//disabled: true,
				}],
			customData1: 44,
			customData2: "red"
		} 
	})
	// this state nests 'testfragment' and renders fragment1
	.state('testfragment.fragment1', {
		url: "/fragment1",
		templateUrl: "partials/testbuttonfragment.fragment1.html",
		controller: 'Fragment1Controller',
		fragmentdata: {
			// inherit 2 fragments
			// overwrite customData1
			customData1: "customData1 fragment 1 ",
			customData2: "red"
		} 
	})
	// this state nests 'testfragment' and renders fragment1
	.state('testfragment.fragment2', {
		url: "/fragment2",
		templateUrl: "partials/testbuttonfragment.fragment2.html",
		controller: 'Fragment2Controller',
		fragmentdata: {
			// inherit 2 fragments
			// overwrite customData1
			customData1: "customData1 fragment 2 ",
			customData2: "red"
		} 
	})
	//

});
