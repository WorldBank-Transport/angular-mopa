'use strict';

describe('Controller: ReportaddCtrl', function () {

  // load the controller's module
  beforeEach(module('mopaApp'));

  var ReportaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportaddCtrl = $controller('ReportaddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
