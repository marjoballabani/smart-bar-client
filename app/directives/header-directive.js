/**
 * Created by Marjo on 1/7/2016.
 */
app.directive('headDirective', [function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/header.html',
        controller: 'mainController'
    }
}]);