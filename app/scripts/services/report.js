'use strict';

/**
 * @ngdoc service
 * @name mopaApp.report
 * @description
 * # report
 * Factory in the mopaApp.
 */
angular.module('mopaApp')
  .factory('report', function ($resource, config) {

    var resourceConfig = {
      get: {method: 'GET', isArray: true}
    };

    return $resource(config.API_ROOT + '/requests/:id.json', {}, resourceConfig);
  });
