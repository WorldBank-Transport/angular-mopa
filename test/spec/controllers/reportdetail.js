'use strict';

describe('Controller: ReportdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mopaApp'));

  var ReportdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportdetailCtrl = $controller('ReportdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportdetailCtrl.awesomeThings.length).toBe(3);
  });
});
