var app = angular.module('catalog', []);

function listCtrl($scope, $http) {
	$http({method:'GET', url: '/items.json'}).success(function(data) {
		$scope.items = data;
		console.log($scope.items);
	});
}