'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:ReportdetailCtrl
 * @description
 * # ReportdetailCtrl
 * Controller of the mopaApp
 */
angular.module('mopaApp')
  .controller('ReportdetailCtrl', function ($scope, $routeParams, report) {
    report.get({id: $routeParams.id}, function(response) {
      if(response.status === 404) {
        $scope.report = null;
      }
      $scope.report = response[0];
    });
  });
