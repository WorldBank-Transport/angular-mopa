'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the mopaApp
 */
 
 angular.module('mopaApp')
 .controller('LogoutCtrl',
    ['$scope', 'AuthenticationService',
    function ($scope, AuthenticationService) {
        // logout status
        AuthenticationService.ClearCredentials();
        $scope.logMessage = 'You have logged out';
        $scope.page = 'login';

    }]);