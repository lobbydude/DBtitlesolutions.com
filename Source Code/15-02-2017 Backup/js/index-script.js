$(function () {

    'use strict';

    /*--------------------------------------------------------------
     Rev slider
     --------------------------------------------------------------*/
    jQuery("#main-slider").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: "",
                left: {
                    container: "slider",
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 155,
                    v_offset: 35
                },
                right: {
                    container: "slider",
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 110,
                    v_offset: 35
                }
            },
            bullets: {
                enable: true,
                hide_onmobile: false,
                style: "",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        },
        disableProgressBar: "on",
        responsiveLevels: [4096, 1199, 991, 767, 700, 600, 500, 470, 350, 320],
        gridwidth: [1170, 970, 750, 650, 500, 450, 430, 320, 280, 280],
        gridheight: [450, 450, 450, 450, 450, 450, 450, 450, 450, 450]
                // gridheight:[640,640,650,450,450,450,450,450,450,450]      
    });



    /*--------------------------------------------------------------
     progerss skill
     --------------------------------------------------------------*/
    $('.skill-progress .skill').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            $(window).one('scroll', function () {
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
            $element.find('div').animate({width: progressBarWidth}, 2000).find('span').html(percent + "% ");
        }

    });



    /*--------------------------------------------------------------
     Advisor slider
     --------------------------------------------------------------*/
    $(".advisor-slider").owlCarousel({
        items: 4,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2
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
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });




    /*--------------------------------------------------------------
     Testimonials slider
     --------------------------------------------------------------*/
    $(".testimonials-slider").owlCarousel({
        items: 2,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 2
            }
        },
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });



    /*--------------------------------------------------------------
     Fact section counting
     --------------------------------------------------------------*/
    $('.facts').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            $('#cases').animateNumber({number: 462}, 2000);
            $('#clients').animateNumber({number: 176}, 2000);
            $('#advisors').animateNumber({number: 43}, 2000);
            $('#awards').animateNumber({number: 110}, 2000);
            $('#customers').animateNumber({number: 958}, 2000);
        });
    });




    /*--------------------------------------------------------------
     brands slider
     --------------------------------------------------------------*/
    $(".brands-slider").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });




    /*--------------------------------------------------------------
     Quote select box
     --------------------------------------------------------------*/
    $('#discuss').selectmenu();



}); // end of document.ready