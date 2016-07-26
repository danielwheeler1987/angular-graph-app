(function(angular) {

  'use strict';

  angular.module('filters', [
    'rzModule'
  ])

  .directive('filters', [function() {
    return {
      restrict: 'EA',
      template: [
        '<section class="Filters">',
          '<rzslider rz-slider-model="yearSlider.min"',
          'rz-slider-high="yearSlider.max"',
          'rz-slider-options="yearSlider.opts"></rzslider>',
        '</section>'
      ].join(''),
      link: function($scope, $element, $attrs, $outerDirective) {
        var minValue = $scope.minValue;
        var maxValue = $scope.maxValue;

        function sliderOnChangeEvent(id, minValue, maxValue) {
          $scope.updatePriceData(minValue, maxValue);
        }

        $scope.yearSlider = {
          min: minValue,
          max: 2005,
          opts: {
            floor: minValue,
            ceil: maxValue,
            showTicksValues: true,
            onChange: sliderOnChangeEvent
          }
        };
      }
    };
  }]);

})(window.angular);
