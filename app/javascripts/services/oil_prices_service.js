(function(angular) {
  'use strict';

  var app = angular.module('oilPricesService', []);

  app.factory('oilPricesService', ['$http', '$q', function($http, $q){
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: 'data.json',
          cache: true
        });
      }
    };
  }]);

})(window.angular);
