/**
 * Created by Marjo on 1/5/2016.
 */
app.controller('tableController', ['$scope', '$rootScope', 'DataFactory', '$location',
    function($scope, $rootScope, DataFactory, $location) {
    console.log('mainController started');
    $scope.tables = DataFactory.tables;

        /**
         * Initial data
         */
        DataFactory.getTables(function(success) {
            $scope.tables = DataFactory.tables = success.data;
        },
        function(error) {

        });
    /**
     * Select a table
     *
     * @param table
     */
    $scope.selectTable = function(table) {
        DataFactory.selectedTable = table;
        if (table.status == 1) {
            DataFactory.mainColor = {
                color: '#4caf50',
                class: 'btn-success'
            };
        } else {
            DataFactory.mainColor = {
                color: '#ff5722',
                class: 'btn-warning'
            };
        }
        $location.path('bar');
        /*$rootScope.$broadcast('selectTable', []);*/
    }
}]);