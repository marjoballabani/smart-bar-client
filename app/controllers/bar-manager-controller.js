/**
 * Created by Marjo on 1/7/2016.
 */
app.controller('barManagerController', ['$scope', 'DataFactory', '$location', function ($scope, DataFactory, $location) {
    console.log('barManager controller started');
    $scope.selectedTable = DataFactory.selectedTable;
    $scope.selectedWaiter = DataFactory.selectedWaiter;
    $scope.categories = DataFactory.categories;
    $scope.tempProducts = [];
    $scope.products = DataFactory.products;
    $scope.selectedProduct = null;
    $scope.mainColor = DataFactory.mainColor;
    $scope.total = 0;
    $scope.bill = [
        {
            name: '',
            count: 0,
            total: 0
        }
    ];

    $scope.tempBill = {
        name: '',
        count: 1,
        total: 0
    };


    /**
     * Initial data
     */
    DataFactory.getCategories(function(success) {
        $scope.categories = DataFactory.categories = success.data;
    },
    function(error) {

    });

    /**
     * Get all products
     */
    $scope.getProducts = function() {
        DataFactory.getProducts(function(success) {
                $scope.products = DataFactory.products = success.data;
            },
            function(error) {

            });
    };

    /**
     * Chose a product and put it into the bill
     *
     * @param product
     */
    $scope.choseProduct = function(product) {
        var found = false;
        var i = 0;
        var pos = 0;
        while (i < $scope.bill.length) {
            if (product.name == $scope.bill[i].name) {
                found = true;
                pos = i;
            }
            i++;
        }
        if (found) {
            $scope.bill[pos].count += 1;
            $scope.bill[pos].total = $scope.bill[pos].count * product.price;
            $scope.total += parseInt($scope.bill[pos].total);
        } else {
            $scope.tempBill.name = product.name;
            $scope.tempBill.count = 1;
            $scope.tempBill.total = product.price;
            $scope.total += parseInt(product.price);
            $scope.bill.push($scope.tempBill);
            $scope.tempBill = {
                name: '',
                count: 1,
                total: 0
            };
        }
    };

    /**
     * Select a product from bill table
     *
     * @param product
     */
    $scope.selectBillProduct = function(product) {
        $scope.selectedProduct = product;
    };

    /**
     * rise up or discount a selected product number from bill
     *
     * @param isRise
     */
    $scope.countSelectedProduct = function(isRise) {
        var price = $scope.bill[$scope.selectedProduct].total / $scope.bill[$scope.selectedProduct].count;
        if (isRise) {
            $scope.bill[$scope.selectedProduct].count ++;
            $scope.bill[$scope.selectedProduct].total = parseInt($scope.bill[$scope.selectedProduct].total) + price;
            $scope.total += price;
        } else {
            $scope.bill[$scope.selectedProduct].count --;
            $scope.bill[$scope.selectedProduct].total = parseInt($scope.bill[$scope.selectedProduct].total) - price;
            $scope.total -= price;
        }
    };

    /**
     * Delete a product from bill
     */
    $scope.deleteBillProduct = function() {
        $scope.bill.splice($scope.selectedProduct, 1);
        $scope.selectedProduct = null
    };

    /**
     * Select a product category
     *
     * @param categoryId
     */
    $scope.selectCategory = function(categoryId) {
        var tempProducts = [];
        for (var i = 0; i < DataFactory.products.length; i++) {
            if ($scope.products[i].categoryId == categoryId) {
                tempProducts.push(DataFactory.products[i]);
            }
        }
        $scope.tempProducts = tempProducts;
    };

    $scope.scrollbarConfig = {
        scrollButtons: {
            scrollAmount: 'auto', // scroll amount when button pressed
            enable: true // enable scrolling buttons by default
        },
        scrollInertia: 400, // adjust however you want
        axis: 'y', // enable 2 axis scrollbars by default,
        theme: 'dark',
        autoHideScrollbar: true
    };

    /*$(document).ready(function() {
        $("product-category").customScrollbar();
    });*/
}]);