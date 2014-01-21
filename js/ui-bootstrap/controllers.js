'use strict';

/* UI Controllers */

var phonecatUIControllers = angular.module('phonecatUIControllers', ['ui.bootstrap',
	'ui.router']);

phonecatUIControllers.controller('UICollapseController', ['$scope', 
		function ($scope) {
			$scope.ui = $scope.ui || {};
			$scope.ui.menu = {
				isCollapsed:"true",
				menuItems:[
					{name:"Phones", url:"phone-list"},
					{name:"Phone detail", url:"phone-detail"},
					{name:"Car", url:"car"},
					{name:"Traffic Info", url:"traffic"},
					{name:"Map", url:"map"}]	
			};

			//$scope.ui.menu.isCollapsed = true;
		}]);

phonecatUIControllers.controller('UITabController', ['$scope', 
		function ($scope) {
			//$scope.ui = {};
			$scope.ui = $scope.ui || {};
			$scope.ui.tabs = [
				{ title:"Dynamic Title 1", 
					content:"Dynamic content 1",
					page:"partials/phone-list.html",
					alertMe: function() {
						setTimeout(function() {
							//alert("You've selected the alert tab!");
						});
					}
				},
				{ title:"Dynamic Title 3", 
					content:"Dynamic content 3",
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


/*
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);
*/

