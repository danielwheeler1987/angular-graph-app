(function(angular) {

  'use strict';

  angular.module('lineChart', [])

  .directive('lineChart', ['d3Service', 'oilPricesService', function(d3Service, oilPricesService) {
    return {
      transclude: true,
      restrict: 'EA',
      template: [
        '<div class="Chart">',
          '<div class="Chart-filters"><filters></filters></div>',
          '<div class="Chart-display"></div>',
        '</div>'
      ].join(''),
      link: function ($scope, $element, $attrs) {
        $scope.$watch('filteredData', function(data) {
          if ($scope.filteredData.length === 0) return;
          render(data);
        });

        function render(data) {
          d3Service.d3().then(function(d3) {
            var svgEl = $element[0].getElementsByClassName('Chart-display')[0];
            svgEl.innerHTML = '';

            // Define the resolution
            var width = 1000;
            var height = 500;

            // Create the SVG 'canvas'
            var svg = d3.select(svgEl)
                        .append("svg")
                        .attr("viewBox", "0 0 " + width + " " + height);

            // Define the padding around the graph
            var padding = 75;

            // Set the scales
            var minDate = d3.min(data, function(d) { return new Date(d.date); });
            var maxDate = d3.max(data, function(d) { return new Date(d.date); });

            var xScale = d3.scale.linear()
                .domain([minDate, maxDate])
                .range([padding, width - padding]);

            var yScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d) { return d.price; })])
                .range([height - padding, padding]);

            // x-axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickFormat(function (date) {
                  var date = new Date(date);
                  var d  = date.getDate();
                  var day = (d < 10) ? '0' + d : d;
                  var m = date.getMonth() + 1;
                  var month = (m < 10) ? '0' + m : m;
                  var yy = date.getYear();
                  var year = (yy < 1000) ? yy + 1900 : yy;
                  return year + '-' + month + '-' + day;
                })
                .ticks(20); // set rough # of ticks

            svg.append("g")
                .attr("class", "axis x-axis")
                .attr("transform", "translate(0," + (height - padding) + ")")
                .call(xAxis)
                .selectAll("text")
                .attr("dx", "-3.15em")
                .attr("dy", ".15em")
                .attr("transform", function(d) {
                  return "rotate(-65)";
                });

            // y-axis
            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .tickFormat(function (price) { return '$' + price.toFixed(2); })
                .ticks(10); // set rough # of ticks

            svg.append("g")
                .attr("class", "axis y-axis")
                .attr("transform", "translate(" + padding + ",0)")
                .call(yAxis);

            // draw line graph
            var line = d3.svg.line()
                .x(function(d) {
                    return xScale(new Date(d.date));
                })
                .y(function(d) {
                    return yScale(d.price);
                })
                .interpolate("basis");

            // Add title to chart
            svg.append("text")
               .attr("x", 0)
               .attr("y", 24)
               .attr("text-anchor", "left")
               .style("font-size", "24px")
               .text("Oil Barrel Prices - Line Chart");

            // Add smart label to the y-axis
            svg.append("text")
               .attr("transform", "rotate(-90)")
               .attr("y", 0)
               .attr("x",0 - (height / 2))
               .attr("dy", "1em")
               .style("text-anchor", "middle")
               .style("font-size", "13px")
               .text("Price (USD)");

            // add data to chart
            svg.append("svg:path").attr("d", line(data));
          });
        }
      },
      controller: function($scope, $element, $attrs, $transclude) {
        var priceData = [];
        $scope.minValue = 2000;
        $scope.maxValue = 2016;
        $scope.filteredData = [];

        (function() {
          oilPricesService.get().then(function(json) {
            priceData = json.data;
            $scope.filteredData = priceData;
          });
        })();

        function buildRegex(minYear, maxYear) {
          var temp = [];
          for (var i = minYear; i <= maxYear; i++) temp.push(i);
          return new RegExp(temp.join('|'), 'g');
        }

        $scope.updatePriceData = function(minYear, maxYear) {
          $scope.filteredData = priceData.filter(function(record) {
            var date = record.date;
            var regex = buildRegex(minYear, maxYear);
            if (date.match(regex)) return record;
          });
        };
      }
    };
  }]);

}(window.angular));
