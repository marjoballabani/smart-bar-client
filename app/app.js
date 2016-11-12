/**
 * Created by Marjo on 1/5/2016.
 */
var app = angular.module('webBar', ['ngRoute', 'routeStyles', 'perfect_scrollbar']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })
            .when('/main', {
                templateUrl: 'templates/main.html',
                controller: 'mainController'
            })
            .when('/bar', {
                templateUrl: 'templates/bar-manager.html',
                controller: 'barManagerController'
            });


    }])
    .run(['$rootScope', '$location', 'DataFactory', function ($rootScope, $location, DataFactory) {
        if (!window.localStorage.Token) {
            $location.path("/");
        }
        $rootScope.$on('$routeChangeStart', function (event, next) {
            // Prevent opening login if logged in
            //todo - when go to login page it remove token
            /*if ($location.path("/") && window.localStorage.Token) {
             delete window.localStorage.Token;
             }*/
            if (!window.localStorage.Token) {
                $location.path('/');
            }
        });
    }]);