angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	
	//Takes values from user input
	//then pushes new listing onto the array
    $scope.addListing = function() {
		
		$scope.listings.push({
			'code':$scope.newCode,
			'name':$scope.newName
		});
		$scope.newCode= ''
		$scope.newName= ''
	};
	//deletes listing at index
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1);
	};
	
	//stores the listing at the desired index into detailed info
	//detailedInfo is broken apart by property in index.html
    $scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index];
	};
  }
]);