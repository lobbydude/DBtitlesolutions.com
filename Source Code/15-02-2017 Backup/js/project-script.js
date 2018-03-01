$(function() {

	'use strict';
	
/*--------------------------------------------------------------
    Shuffle for all projects box
--------------------------------------------------------------*/
    $(window).on('load', function() {
        // shuffle
        var $main = $('#shuffle-wrapper');
        $main.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });


        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $main.shuffle('shuffle', groupName );
        });
    })



/*--------------------------------------------------------------
    Project gallery lightbox
--------------------------------------------------------------*/
    $('a.lightbox-gallery').fancybox({          
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        helpers : {
            media : {}
        }
    });

}); // end of document.ready