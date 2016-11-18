'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mopaApp
 */
angular.module('mopaApp')
  .controller('MainCtrl', function ($scope, $location, report) {
    report.query(function(data) {
        $scope.reports = data;
      });

    $scope.openReport = function(id) {
      $location.path('/report/' + id);
    };
  });
