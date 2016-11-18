'use strict';

/**
 * @ngdoc overview
 * @name mopaApp
 * @description
 * # mopaApp
 *
 * Main module of the application.
 */
angular
  .module('mopaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/report/add', {
        templateUrl: 'views/reportadd.html',
        controller: 'ReportaddCtrl',
        controllerAs: 'reportAdd'
      })
      .when('/report/:id', {
        templateUrl: 'views/reportdetail.html',
        controller: 'ReportdetailCtrl',
        controllerAs: 'reportDetail'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
