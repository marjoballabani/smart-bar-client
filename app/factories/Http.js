/**
 * Author: Xhulio
 * Created Date: 2015-10-02 10:07.PD
 * This code is copyright (c) 2015 Prius Solution
 */

app.factory('Http', ['$http', 'Utils', function ($http, Utils) {
    'use strict';
    return {
        /**
         * GET Request
         * @param url
         * @param data
         * @param success callback
         * @param error callback
         */
        GET: function (url, data, success, error) {
            Utils.showLoadingMask();
            $http({
                url: url,
                method: "GET",
                params: data
            }).then(function (data) {
                Utils.hideLoadingMask(function () {
                    success(data);
                });
            }, function (data) {
                Utils.hideLoadingMask(function () {
                    error(data);
                });
            });
        },
        /**
         * PUT Request
         * @param url
         * @param data
         * @param success callback
         * @param error callback
         */
        PUT: function (url, data, success, error) {
            Utils.showLoadingMask();
            $http({
                url: url,
                method: "PUT",
                data: Utils.buildFormData(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                Utils.hideLoadingMask(function () {
                    success(data);
                });
            }).error(function (data) {
                Utils.hideLoadingMask(function () {
                    error(data);
                });
            });
        },
        /**
         * POST Request
         * @param url
         * @param data
         * @param success callback
         * @param error callback
         */
        POST: function (url, data, success, error) {
            Utils.showLoadingMask();
            $http({
                url: url,
                method: "POST",
                data: Utils.buildFormData(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                Utils.hideLoadingMask(function () {
                    success(data);
                });
            }).error(function (data) {
                Utils.hideLoadingMask(function () {
                    error(data);
                });
            });
        },
        /**
         * POST Request
         * @param url
         * @param data
         * @param success callback
         * @param error callback
         */
        DELETE: function (url, data, success, error) {
            Utils.showLoadingMask();
            $http({
                url: url,
                method: "DELETE",
                params: data
            }).success(function (data) {
                Utils.hideLoadingMask(function () {
                    success(data);
                });
            }).error(function (data) {
                Utils.hideLoadingMask(function () {
                    error(data);
                });
            });
        }
    };
}]);