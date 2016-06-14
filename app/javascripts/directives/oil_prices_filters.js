(function(angular) {
  'use strict';

  var app = angular.module('oilPricesFilters', []);

  app.directive('oilPricesFilters', function() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'templates/oil_prices_filters.html',
      link: function($scope, $element, $attrs) {

      }
    };
  });

})(window.angular);
