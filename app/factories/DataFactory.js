/**
 * Created by Marjo on 1/5/2016.
 */
app.factory('DataFactory', ['Http', 'Constants', function(Http, Constants) {
    var dataFactory = {};
    dataFactory.selectedWaiter = {};
    dataFactory.isAuthenticated = false;
    dataFactory.selectedTable = {};
    dataFactory.waiters = [];
    dataFactory.tables = [];
    dataFactory.categories = [];
    dataFactory.mainColor = {
        color: '#4caf50',
        class: 'btn-success'
    };
    dataFactory.products = [
        {
            id: 0,
            name: 'Vodka',
            price: '1000',
            categoryId: 0
        },
        {
            id: 1,
            name: 'Amaro',
            price: '40',
            categoryId: 0
        },
        {
            id: 2,
            name: 'Jager',
            price: '30',
            categoryId: 0
        },
        {
            id: 3,
            name: 'Raki',
            price: '200',
            categoryId: 0
        },
        {
            id: 4,
            name: 'Konjak',
            price: '10',
            categoryId: 0
        },
        {
            id: 5,
            name: 'AMF',
            price: '100',
            categoryId: 0
        },
        {
            id: 6,
            name: 'Kafe',
            price: '100',
            categoryId: 1
        }
    ];

    dataFactory.login = function (data, success, error) {
        Http.POST(Constants.Url.LOGIN, data, success, error);
    };
    
    dataFactory.getWaiters = function(success, error) {
        Http.GET(Constants.Url.WAITERS, {}, success, error)
    };

    dataFactory.getTables = function(success, error) {
        Http.GET(Constants.Url.TABLES, {}, success, error)
    };

    dataFactory.getCategories = function(success, error) {
        Http.GET(Constants.Url.CATEGORIES, {}, success, error)
    };

    dataFactory.getProducts = function(success, error) {
        Http.GET(Constants.Url.PRODUCTS, {}, success, error)
    };


    return dataFactory;
}]);