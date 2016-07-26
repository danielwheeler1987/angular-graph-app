(function(angular) {

  'use strict';

  angular.module('content', [])

  .directive('content', [function(){
    return {
      scope: {},
      restrict: 'EA',
      transclude: true,
      template: [
        '<section class="Content">',
          '<ng-transclude></ng-transclude>',
        '</section>'
      ].join('')
    };
  }]);

})(window.angular);
