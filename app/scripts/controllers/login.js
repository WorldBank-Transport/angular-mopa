'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mopaApp
 */
 
 angular.module('mopaApp')
 .controller('LoginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope,
        $location, AuthenticationService) {

        $scope.page = 'login';

        if(AuthenticationService.LoggedIn()){
            $scope.page = 'home';
            $location.path('/');
        }

        // reset login status
        AuthenticationService.ClearCredentials();
        

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login(
                $scope.username, $scope.password, function(response) {
                if(response.data) {
                    AuthenticationService.SetCredentials(
                        $scope.username, $scope.password);
                    $scope.page = 'home';
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
