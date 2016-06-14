(function(angular) {
  'use strict';

  var app = angular.module('oilPricesGraph', []);

  app.directive('oilPricesGraph', function(oilPricesService) {
    return {
      scope: {},
      restrict: 'E',
      link: function($scope, $element, $attrs) {


      },
      controller: function($scope) {
        $scope.priceData = [];

        (function() {
          oilPricesService.get().then(function(jsonData) {
            $scope.priceData = jsonData;
          });
        })();
      }
    };
  });

})(window.angular);
