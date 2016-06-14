(function(angular) {
  'use strict';

  var app = angular.module('oilPricesService', []);

  app.factory('oilPricesService', function($http){
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: 'data.json',
          cache: true
        });
      }
    };
  });

})(window.angular);
