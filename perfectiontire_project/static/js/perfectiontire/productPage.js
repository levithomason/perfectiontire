function ProductPageController($scope) {
    var container = $('#isotope_container');

    $scope.productData = PRODUCT_DATA;

    console.log(PRODUCT_DATA);

    var init = function() {

        container.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });

        container.isotope('reLayout');
    };

    init();
}
