$(function() {
	
    'use strict';


/*--------------------------------------------------------------
    progerss skill
--------------------------------------------------------------*/
    $('.skill-progress .skill').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $(window).one('scroll', function() {
                progress(85, $('#problem'));
                progress(80, $('#finace'));
                progress(90, $('#travel'));
                progress(94, $('#account'));
            });
        });

        function progress(percent, $element) {
            var myItem = $element.children('div');
            myItem.append('<span></sapn>');

            var progressBarWidth = percent * $element.width() / 100;
            $element.find('div').animate({ width: progressBarWidth }, 2000).find('span').html(percent + "% ");
        }

    });



/*--------------------------------------------------------------
    Advisor slider
--------------------------------------------------------------*/
    $(".advisor-slider").owlCarousel({
        items: 4,
        margin: 20,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            }
        },
        nav: true,
        navText: ["<i class='arrow_left'></i>","<i class='arrow_right'></i>"]
    });




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