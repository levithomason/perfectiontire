function ProductPageController($scope) {
    $scope.productData = PRODUCT_DATA;

    console.log(PRODUCT_DATA);

    var init = function() {
        $('#isotope_container').isotope();
    };

    init();
}
