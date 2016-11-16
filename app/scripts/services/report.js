'use strict';

/**
 * @ngdoc service
 * @name mopaApp.report
 * @description
 * # report
 * Factory in the mopaApp.
 */
angular.module('mopaApp')
  .factory('report', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
