(function(angular) {

  'use strict';

  angular.module('routes', [
    'ngComponentRouter'
  ])

  .value('$routerRootComponent', 'app')

  .directive('app', [function() {
    return {
      restrict: 'EA',
      template: [
        '<navigation></navigation>',
        '<content><ng-outlet></ng-outlet></content>',
        '<footer></footer>'
      ].join('')
    };
  }]);

})(window.angular);
