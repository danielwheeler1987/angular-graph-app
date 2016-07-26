(function(angular) {
  'use strict';

  angular.module('oilPricesService', [])

  .factory('oilPricesService', ['$http', '$q', function($http, $q){
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: 'services/data.json',
          cache: true
        });
      }
    };
  }]);

})(window.angular);
