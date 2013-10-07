angular.module('app', [])
    // To properly use isotope, we need to wait for ng-repeat to finish before trying to render!
    .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});

function ProductPageController($scope) {
    var container = $('#isotope_container');

	$scope.filterCategory = "";

    $scope.productData = PRODUCT_DATA;

	// isotope filtering
    $scope.filterIsotope = function() {
    	var filters = $scope.filterCategory;
        console.log(filters);
        container.isotope({
        	filter: filters,
        	layoutMode : 'cellsByRow'
    	});
        container.isotope('reLayout');
    };

    $scope.initIsotope = function() {
        container.isotope();
    };

    // Wait for ng-repeat to finish, then add data!
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        $scope.initIsotope();
    });

	// Tilter terms
	$scope.filterTypeSet = function(selector) {
		$scope.filterType = "." + selector;
		$scope.filterIsotope();
    };
	$scope.filterTypeReset = function(selector) {
		$scope.filterType = '';
		$scope.filterIsotope();
    };

	$scope.filterCategorySet = function(selector) {
		$scope.filterCategory = "." + selector;
		$scope.filterIsotope();
    };
	$scope.filterCategoryReset = function() {
		$scope.filterCategory = "";
		$scope.filterIsotope();
    };
	$scope.filterInit = function() {

	}

    // button classes
    $scope.filterActive = function(selector) {

    };

}
