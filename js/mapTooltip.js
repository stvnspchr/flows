var mouseX;
var mouseY;

$(document).mousemove( function(e) {
	var margin = $(document).width() - $(".container").width();
	var offset = margin / 2;
   	mouseX = e.pageX - offset - 10;
   	mouseY = e.pageY - $(".interactive").height() - $("header").height() - $('#topbar').height();
});  

$(document).ready(function() {
	$( "#stateline" ).mouseover(function() {
		$( "#stateline-tooltip" ).removeClass( "hidden" );
		$('#stateline-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#stateline-tooltip" ).addClass( "hidden" );
	});
	
	$( "#roscoe" ).mouseover(function() {
		$( "#roscoe-tooltip" ).removeClass( "hidden" );
		$('#roscoe-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#roscoe-tooltip" ).addClass( "hidden" );
	});
	
	$( "#overton" ).mouseover(function() {
		$( "#overton-tooltip" ).removeClass( "hidden" );
		$('#overton-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#overton-tooltip" ).addClass( "hidden" );
	});
	
	$( "#kearney" ).mouseover(function() {
		$( "#kearney-tooltip" ).removeClass( "hidden" );
		$('#kearney-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#kearney-tooltip" ).addClass( "hidden" );
	});
	
	$( "#grandisland" ).mouseover(function() {
		$( "#grandisland-tooltip" ).removeClass( "hidden" );
		$('#grandisland-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#grandisland-tooltip" ).addClass( "hidden" );
	});
	
	$( "#dunning" ).mouseover(function() {
		$( "#dunning-tooltip" ).removeClass( "hidden" );
		$('#dunning-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#dunning-tooltip" ).addClass( "hidden" );
	});
	
	$( "#saintpaul" ).mouseover(function() {
		$( "#saintpaul-tooltip" ).removeClass( "hidden" );
		$('#saintpaul-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#saintpaul-tooltip" ).addClass( "hidden" );
	});
	
	$( "#northbend" ).mouseover(function() {
		$( "#northbend-tooltip" ).removeClass( "hidden" );
		$('#northbend-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#northbend-tooltip" ).addClass( "hidden" );
	});
	
	$( "#louisville" ).mouseover(function() {
		$( "#louisville-tooltip" ).removeClass( "hidden" );
		$('#louisville-tooltip').css({'top':mouseY,'left':mouseX});
	}).mouseout(function() {
		$( "#louisville-tooltip" ).addClass( "hidden" );
	});
});