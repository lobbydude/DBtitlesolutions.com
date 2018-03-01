$(function() {

	'use strict';

/*--------------------------------------------------------------
    Preloder
--------------------------------------------------------------*/
$(window).on('load', function() {
    var perloderWrapper = $('.preloder-wrapper'),
        perloder = $('.preloder'),
        perloderLeftSide = $('.preloder-leftpart'),
        PerloderRightSide = $('.preloder-rightpart');

    perloder.css({
        'display': 'none'
    });
    perloderLeftSide.addClass('floatOutLeft');
    PerloderRightSide.addClass('floatOutRight');
    $(".preloder-wrapper").delay(1000).fadeOut(10);
})



/*--------------------------------------------------------------
    Select Language
--------------------------------------------------------------*/
    $('#select-lan').selectmenu();



/*--------------------------------------------------------------
    Header searchbox setting
--------------------------------------------------------------*/
    var openBtn = $('.navbar-search > li > .btn');
    var searchBox = $('.navbar-search > li > ul');
    openBtn.on('click', function() {
        if (openBtn.attr('data-on') == 0) {
            searchBox.css({
                'left': '-215px',
                'visibility': 'visible',
                'opacity': 1
            });
            openBtn.find('.fa-search').addClass('fa-close').removeClass('fa-search');
            openBtn.attr('data-on', 1);
        } else if (openBtn.attr('data-on') == 1) {
            searchBox.css({
                'left': '-190px',
                'visibility': 'hidden',
                'opacity': 0
            });
            openBtn.find('.fa-close').addClass('fa-search').removeClass('fa-close');
            openBtn.attr('data-on', 0);
        }

        return false;
    })



/*--------------------------------------------------------------
    Navigation fixed top
--------------------------------------------------------------*/
    var topOffset = $("nav").offset().top;
    $(window).scroll(function() {
        var g = $(this).scrollTop();
        if (g >= topOffset) {
            $("nav").addClass("smaller");
        
        } else {
            $("nav").removeClass("smaller");
            
        }
    });



/*--------------------------------------------------------------
    Navigational arrow for mobile Dropdown menu
--------------------------------------------------------------*/
    $('#navbar .navbar-nav > li > ul').siblings('a').append("<i class='fa fa-angle-down'></i>");
    $('#navbar .navbar-nav > li > ul > li > a').append("<i class='fa fa-angle-right'></i>");



/*--------------------------------------------------------------
    Footer lightbox
--------------------------------------------------------------*/
    $("a.lightbox-img").fancybox({          
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers : {
            media : {}
        }
    });


}); // end of document.ready