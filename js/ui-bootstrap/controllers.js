'use strict';

/* UI Controllers */

var UIControllers = angular.module('UIControllers', ['ui.bootstrap',
	'ui.router']);

UIControllers.controller('UICollapseController', ['$scope', 
		function ($scope) {
			$scope.ui = $scope.ui || {};
			$scope.ui.menu = {
				isCollapsed:"true",
				menuItems:[
					{name:"Car", url:"car"},
					{name:"Phones", url:"phones"},
					{name:"Traffic Info", url:"traffic"},
					{name:"Test Fragment", url:"testfragment"},
					{name:"Map", url:"map"}]	
			};

			//$scope.ui.menu.isCollapsed = true;
		}]);

UIControllers.controller('UITabController', ['$scope', 
		function ($scope) {
			//$scope.ui = {};
			$scope.ui = $scope.ui || {};
			$scope.ui.tabs = [
				{ title:"Default Title 1", 
					content:"Dynamic content 1",
					page:"partials/phone-list.html",
					alertMe: function() {
						setTimeout(function() {
							//alert("You've selected the alert tab!");
						});
					}
				},
				{ title:"Default Title 2", 
					content:"Dynamic content 2",
					page:"partials/phone-detail.html",
					alertMe: function() {
						setTimeout(function() {
							//alert("You've selected the alert tab!");
						});
					}
				},
	    	{ title:"Dynamic Title 2", 
					content:"Dynamic content 2", 
					disabled: true
				}
			];

			//$scope.ui.menu.isCollapsed = true;
		}]);

UIControllers.controller('UIFragmentController', ['$scope', 
		'$state',
		function ($scope, $state) {
    	// test 
			// $scope.data = $state.current.data.customData1; // outputs 5;	
			$scope.data = "this is it";

			$scope.ui = $scope.ui || {};
			$scope.ui.fragments = $state.current.data.fragments; 
			
			// work when This controller is loaded.
			// goto default (first) fragment.
			$state.go($state.current.data.fragments[0].fragmentState);
			//$state.go('.fragment1');

			// inject $state.transitionTo here.
			/** 
			 * This called by tab's select() to move to a state 
			 * associating with the calling fragment.
			 * @input: state name.
			 */
			$scope.fragmentTransition = function (state) {
				$state.go(state);
			};

			//$scope.ui.menu.isCollapsed = true;
		}]);

UIControllers.controller('Fragment1Controller', ['$scope', 
		'$state',
		function ($scope, $state) {
    	// test 
			$scope.testdata = $state.current.fragmentdata.customData1; // outputs 5;	

			$scope.ui = $scope.ui || {};
			//$scope.ui.menu.isCollapsed = true;
		}]);

UIControllers.controller('Fragment2Controller', ['$scope', 
		'$state',
		function ($scope, $state) {
    	// test 
			$scope.testdata = $state.current.fragmentdata.customData1; // outputs 5;	
			$scope.ui = $scope.ui || {};
			//$scope.ui.menu.isCollapsed = true;
		}]);



/*
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);
*/

