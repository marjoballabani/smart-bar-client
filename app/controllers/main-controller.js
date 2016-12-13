/**
 * Created by Marjo on 1/5/2016.
 */
app.controller('mainController', ['$scope', '$rootScope', 'DataFactory', '$location',
    function ($scope, $rootScope, DataFactory, $location) {
        console.log('mainController started');
        $scope.isAuthenticated = DataFactory.isAuthenticated;
        $scope.selectedTable = DataFactory.selectedTable;
        $scope.selectedView = {
            template: 'templates/tables.html'
        };

        /**
         * When u select a table from table controller
         */
        $rootScope.$on('selectTable', function (data) {
            $scope.selectedView.template = 'templates/bar-manager.html'
        });

        $rootScope.$on('goToTables', function (data) {
            $scope.selectedView.template = 'templates/tables.html';
        });

        /**
         * Go to tables view
         */
        $scope.goToTables = function () {
            /*$location.path('/main');*/
            $rootScope.$broadcast('goToTables', []);
        };

        /**
         * Logout
         */
        $scope.logOut = function () {
            delete window.localStorage.Token;
            DataFactory.isAuthenticated = false;
            $location.path('/');
            $location.replace();
        };

        /**
         * TODO - Depricated
         */
        $scope.minimize = function () {
            var remote = require('remote');
            var window = remote.getCurrentWindow();
            window.minimize();
        };

        /**
         * TODO - Depricated
         */
        $scope.close = function () {
            var remote = require('remote');
            var window = remote.getCurrentWindow();
            window.close();
        };

    }]);