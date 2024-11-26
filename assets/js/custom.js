// intialize wow.js
new WOW().init();

$(document).ready(function(){
	$('.owl-carousel').owlCarousel();
	$('.pre-loader').slideUp();

	$('#bar1').inviewport({
		threshold: 10, 
		className: 'barfiller'
	});
	$('#bar2').inviewport({
		threshold: 30, 
		className: 'barfiller'
	
	});
	$('#bar3').inviewport({
		threshold: 30, 
		className: 'barfiller'
	
	});
	$('#bar4').inviewport({
		threshold: 30, 
		className: 'barfiller'
	
	});
	$('#bar5').inviewport({
		threshold: 30, 
		className: 'barfiller'
	});

	// for progressbar
	$('#bar1').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar2').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar3').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar4').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar5').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar6').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar7').barfiller({
		barColor:'#bfbfbf'
	});
	$('#bar8').barfiller({
		barColor:'#bfbfbf'
	});
});

$(function(){
	// click to remove and add active
	$('.navbar ul li').click(function(){
		$('.navbar ul li').removeClass('active');
		$(this).addClass('active');
	});
	$('#navigation').navpoints({
		speed: 750,
		offset: 70,
	});
});

// For filter
// (function($){
// 	// init Isotope
// 	var $grid = $('.grid').isotope({
// 	// options
// 	});

// 	// filter items on button click
// 	$('.filter-button').on( 'click', 'li', function() {
// 		var filterValue = $(this).attr('data-filter');
// 	$grid.isotope({ filter: filterValue });
// 	});
// })(jQuery);


var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 2, //The number of item displayed
	autoplayTimeout: 2500, //time interval of slider
	autoplayHoverPause: true, //mouse hover to pause slider
	center: false, //center mode
	nav: true, //for navigation button and dots
	margin: 40,

	// for responsive
	responsive: {
		0: {
		items: 1
		},
		600: {
		items: 2
		},
		1000: {
		items: 3
		}
	}
});
