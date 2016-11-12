/**
 * Created by Marjo on 9/12/2016.
 */
angular.module("webBar").config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(['$q', '$location', 'Constants', function ($q, $location, Constants) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if (window.localStorage.Token) {
                    config.headers['x-access-token'] = window.localStorage.Token;
                }
                return config;
            },
            'responseError': function (response) {
                if (response.status === 401 && response.data.error && response.data.error.message == "401") {
                    // response.message == 401 means that was sent an authorized request
                    if (window.localStorage.Token) {
                        delete window.localStorage.Token;
                    }
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }]);
}]);