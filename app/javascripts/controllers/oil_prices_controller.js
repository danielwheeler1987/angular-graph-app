(function(angular) {
  'use strict';

  var app = angular.module('oilPricesController', ['oilPricesService']);

  app.controller('oilPricesController', ['$scope', 'oilPricesService', function(scope, service){
    var priceData = [];
    scope.filteredData = [];

    scope.getPriceDate = (function() {
      service.get().then(function(jsonData) {
        priceData = jsonData.data;
        scope.filteredData = priceData;
      });
    })();

    scope.updatePriceData = function(minYear, maxYear) {
      scope.filteredData = priceData.filter(function(record) {
        var date = record.date,
            regex = buildRegex(minYear, maxYear);

        if (date.match(regex)) {
          return record;
        }
      });
    };

    function buildRegex(minYear, maxYear) {
      var temp = [];

      for (var i = minYear; i <= maxYear; i++) {
        temp.push(i);
      }

      return new RegExp(temp.join('|'), 'g');
    }

  }]);

})(window.angular);
