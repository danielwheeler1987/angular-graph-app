(function(angular) {

  'use strict';

  angular.module('navigation', [
    'ngComponentRouter'
  ])

  .directive('navigation', [function () {
    return {
      restrict: 'EA',
      template: [
      '<section class="Navigation">',
        '<ul class="Navigation-list">',
          '<li class="Navigation-listItem">',
            '<a ng-link="[\'LineChart\']" class="is-active">Line Chart</a>',
          '</li>',
          '<li class="Navigation-listItem">',
            '<a ng-link="[\'BarChart\']" class="">Bar Chart</a>',
          '</li>',
          '<li class="Navigation-listItem">',
            '<a href="#void" class="">Source Information</a>',
          '</li>',
          '<li class="Navigation-listItem">',
            '<a href="#void" class="">About Myself</a>',
          '</li>',
        '</ul>',
      '</section>'
      ].join('')
    };
  }]);

})(window.angular);
