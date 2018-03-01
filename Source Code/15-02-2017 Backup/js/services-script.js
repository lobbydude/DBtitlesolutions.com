$(function() {

	'use strict';

/*--------------------------------------------------------------
    Testimonials slider
--------------------------------------------------------------*/
    $(".testimonials-slider").owlCarousel({
        items: 2,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            767: {
                items: 2
            }
        },
        nav: true,
        navText: ["<i class='arrow_left'></i>","<i class='arrow_right'></i>"]
    });
	

}); // end of document.ready