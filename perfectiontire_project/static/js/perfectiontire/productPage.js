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

    $scope.filterType = '.tire';
    $scope.productData = PRODUCT_DATA;

    $scope.filterIsotope = function(selector) {
        $scope.filterType = selector;
        container.isotope({ filter: selector });
        container.isotope('reLayout');
    };

    $scope.initIsotope = function() {
        container.isotope();
    };

    // Wait for ng-repeat to finish, then add data!
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        $scope.initIsotope();
    });
}
