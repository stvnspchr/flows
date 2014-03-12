Flows in the Platte River
=====
An interactive graphic that visualizes flow rates on the Platte River in Nebraska.

1. [About](#about)
2. [The Implementation](#the-implementation)
3. [The Story](#the-story)
4. [The Future](#the-future)

## About
The Platte River system flows through Nebraska in four segments: the North Platte River, the South Platte River, the Platte River proper, and the Loup Rivers. At various places along the river's journey, the United States Geological Survey, [USGS](http://usgs.gov), has gauging stations where a variety of river parameters are measured. Discharge, or simply the flow rate, is perhaps the most indicative of the current state of the stream. Measured in cubic feet per second, flow rates can tell us how much water is in the river at any given time.

This interactive was developed and designed by Steven Speicher as part of the Platte Basin Timelapse project: a partnership with the University of Nebraska's [Institute of Natural Resources](http://ianrhome.unl.edu/), [Nebraska Educational Telecommunications](http://netnebraska.org/), and [many other local and state organizations](http://plattebasintimelapse.com/supporters).

## Implementation
This web interactive uses:
* HTML/CSS
* [Bootstrap] (http://getbootstrap.com/)
* jQuery
* [d3.js] (http://d3js.org/)
* [nv.d3.js] (http://nvd3.org/)

In order to better visualize and 'see' the river, USGS data is scraped from their web logs, parsed into JSON formats, and read into d3. The nv.ds.js reusable library of visualizations tools is used to create a stacked area graph, streamgraph, and proportions graph.

The chart is rendered onto a web page formatted in Twitter's Bootstrap. The page also includes an SVG showing geographic location of the river and gauging stations and a set of images from the Platte Basin Timelapse project's image dataset. 

A set of jQuery event listeners allow different datasets to be redrawn on the chart.

## The Story
This interactive aims to tell complex, deep-time stories of the Platte River in Nebraska. Drought and flood are immediately apparent, although many river features--precipitation, irrigation, groundwater flow--are subtly layered into the data and chart.

A user is invited to 'explore' the Platte River by interacting with various timeframes and locations to discover their own stories and themes.

## The Future
It is a goal to make this interactive a real-time data feed, by using HTTP requests to automatically pull data into the chart. This is a future implementation beyond the scope of PBT's current staffing and time budgets.