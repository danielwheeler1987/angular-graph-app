(function(angular) {
  'use strict';

  var app = angular.module('oilPricesBarGraph', []);

  app.directive('oilPricesBarGraph', function(oilPricesService) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        // Need to use D3 here to inject a generated SVG!
      }
    };
  });

})(window.angular);
