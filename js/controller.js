app.controller('appController', function($scope) {
	console.log ('Initialising Controller');
	$scope.currTitle = 'Add title in controller.js';
	$scope.openTitle = 'Open in a new window';
	$scope.openURL = function(address) {
		window.open(address);
	};
	$scope.openSelf = function(address) {
		if (address==''||address==null) {
			window.open(window.location.href);
		} else {
			window.open(address);
		}
	};
});