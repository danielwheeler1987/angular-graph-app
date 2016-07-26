(function(angular) {

  'use strict';

  var app = angular.module('footer', []);

  app.directive('footer', [function(){
    return {
      scope: {},
      restrict: 'EA',
      transclude: true,
      template: [
        '<section class="Footer">',
          '<p class="Footer-content">Built by Daniel Wheeler</p>',
          '<p class="Footer-content">',
            'You can read the source ',
            '<a href="https://github.com/danielwheeler1987/angular-graph-app">here</a>.',
          '</p>',
          '<ng-transclude></ng-transclude>',
        '</section>'
      ].join('')
    };
  }]);

})(window.angular);
