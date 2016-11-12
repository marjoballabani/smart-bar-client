/**
 * Created by Marjo on 1/5/2016.
 */
app.controller('loginController', ['$scope', 'DataFactory', '$location',
    function ($scope, DataFactory, $location) {
        console.log('login controller started');
        delete window.localStorage.userToken;
        $scope.password = "";
        $scope.selectedWaiter = DataFactory.selectedWaiter;
        $scope.waiters = DataFactory.waiters;

        DataFactory.getWaiters(function (success) {
                DataFactory.waiters = success.data;
            },
            function (error) {

            });

        /**
         * On password button click
         * @param value
         */
        $scope.appendPass = function (value) {
            $scope.password += value;
        };

        /**
         * Get waiters from dataFactory
         */
        $scope.getWaiters = function () {
            $scope.waiters = DataFactory.waiters;
        };

        $scope.clean = function () {
            $scope.password = $scope.password.slice(0, -1);
        };

        /**
         * Select user
         *
         * @param waiter
         */
        $scope.selectWaiter = function (waiter) {
            $scope.selectedWaiter = DataFactory.selectedWaiter = waiter;
        };

        /**
         * Log in
         */
        $scope.login = function () {
            var data = {
                username: $scope.selectedWaiter.username,
                password: $scope.selectedWaiter.password
            };
            DataFactory.login(data,function (success) {
                if (!success.success) {
                    alert(success.message);
                } else {
                    window.localStorage.Token = success.token;
                    DataFactory.isAuthenticated = true;
                    $location.path("main")
                    
                }
            }, function (error) {

            });
            /*if ($scope.selectedWaiter.password == $scope.password) {
                window.localStorage.userToken = true;
                DataFactory.isAuthenticated = true;
                $location.path("main")
            }*/
        }
    }]);