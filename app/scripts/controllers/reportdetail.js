'use strict';

/**
 * @ngdoc function
 * @name mopaApp.controller:ReportdetailCtrl
 * @description
 * # ReportdetailCtrl
 * Controller of the mopaApp
 */
angular.module('mopaApp')
  .controller('ReportdetailCtrl', function ($scope, $routeParams, $http, config, report) {
    $scope.serviceCodes = []
    $scope.pageStatusMessage = 'loading ...';

    $http.get(config.API_ROOT + '/services.json', {}).then(function (response){
      $scope.serviceCodes = response.data;
    });

    report.get({id: $routeParams.id}, function(response) {
      $scope.pageStatusMessage = 'OK';
      $scope.report = response[0];
    }, function(response){
      if(response.status === 404) {
        $scope.report = null;
        $scope.pageStatusMessage = 'Report Not Found';
      }
    });
  });
