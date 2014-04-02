/*jslint browser: true*/
/*global $, jQuery, alert*/

var chart;
	
function buildGraph(fileName) {
	var colors = d3.scale.category20c();
	keyColor = function(d, i) {return colors(d.key)};

	var myColors = ['rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(240,240,191)','rgb(224,230,202)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)'];

 	d3.json('data/' + fileName + '.json', function(error, data) {
		nv.addGraph(function() {
			chart = nv.models.stackedAreaChart()
					.x(function(d) { return d[0] })
					.y(function(d) { return d[1] })
                    .yDomain([0,93000])
					.color(myColors)
					.showControls(true)
					.tooltipContent(false)
					.transitionDuration(1000)
					.clipEdge(true)
					.useInteractiveGuideline(true);

			chart.xAxis
				.showMaxMin(false)
				.tickFormat(function(d) { return d3.time.format('%m/%d/%y')(new Date(d)) });

			chart.yAxis
				.showMaxMin(true)
				.axisLabel('Total Flow (cfs)')
				.axisLabelDistance(25)
				.tickFormat(d3.format(',f'));

			d3.select('#platte_graph_container svg')
				.datum(data)
				.transition().duration(800).call(chart);

			nv.utils.windowResize(chart.update);

			return chart;
		});
 	});
};

function reBuildGraph(fileName) {
	d3.json('data/' + fileName + '.json', function(error, data) {
		nv.addGraph(function() {
			d3.select('#platte_graph_container svg')
				.datum(data)
				.transition().duration(800).call(chart);
			
			nv.utils.windowResize(chart.update);
		});
	});
};