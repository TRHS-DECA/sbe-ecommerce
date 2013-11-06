var app = angular.module('catalog', []);

var itemData;

function listCtrl($scope, $http) {
	$http({method:'GET', url: '/items.json'}).success(function(data) {
		$scope.items = data;
		console.log($scope.items);
	});
}

function teamCtrl($scope, $http) {
	$http({method: 'GET', url: '/team.json'}).success(function(data) {
		$scope.team = data;
		console.log($scope.team);
	});
}