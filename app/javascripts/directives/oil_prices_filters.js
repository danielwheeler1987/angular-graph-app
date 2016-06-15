(function(angular) {
  'use strict';

  var app = angular.module('oilPricesFilters', []);

  app.directive('oilPricesFilters', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/oil_prices_filters.html',
      link: function(scope, element, attrs) {
        var minYear = 2000;
        var maxYear = 2016;

        scope.yearSlider = {
          min: minYear,
          max: maxYear,
          opts: {
            floor: minYear,
            ceil: maxYear,
            showTicksValues: true,
            onChange: function(id, minYear, maxYear) {
              scope.updatePriceData(minYear, maxYear);
            }
          }
        };

      }
    };
  });

})(window.angular);
