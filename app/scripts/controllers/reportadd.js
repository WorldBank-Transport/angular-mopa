'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:ReportaddCtrl
 * @description
 * # ReportaddCtrl
 * Controller of the mopaApp
 */
angular.module('mopaApp')
  .controller('ReportaddCtrl', function ($scope, $location, report) {
    $scope.newReport = {};

    // FIXME: adding dummy coordinates
    $scope.newReport = {lat: -25.933857882269, long: 32.579494714737};

    $scope.now = function (){
       return new Date().toISOString();
    };

    $scope.submitReport = function (){
      report.save($scope.newReport, function (response){
        $location.url('/report/' + response[0].service_request_id);
      });
    };
  });
