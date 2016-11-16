'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mopaApp
 */
 
    angular
        .module('mopaApp')
        .controller('LoginCtrl',LoginCtrl);
 
    LoginCtrl.$inject = ['$location', 'AuthenticationService', 'FlashService'];


    function LoginCtrl($location, AuthenticationService, FlashService) {
        var vm = this;
 
        vm.login = login;

        console.log("init")
 
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
 
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/index.html');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }
