/*jslint browser: true*/
/*global $, jQuery, alert*/

var chart;
	
function buildGraph(fileName) {
	var colors = d3.scale.category20c();
	keyColor = function(d, i) {return colors(d.key)};

	var myColors = ['rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(240,240,191)','rgb(224,230,202)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)'];
    var myColors = ['rgb(84,48,5)','rgb(140,81,10)','rgb(191,129,45)','rgb(223,194,125)','rgb(246,232,195)','rgb(199,234,229)','rgb(128,205,193)','rgb(53,151,143)','rgb(1,102,94)','rgb(0,60,48)'];
    
 	d3.json('data/' + fileName + '.json', function(error, data) {
		nv.addGraph(function(){
            
            
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
				.tickFormat(function(d) { return d3.time.format('%m/%d')(new Date(d)) });
            
            chart.xScale(d3.time.scale());

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