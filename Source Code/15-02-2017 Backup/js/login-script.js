$(function() {

	'use strict';

/*--------------------------------------------------------------
    Remeber me setting
--------------------------------------------------------------*/
    $('.form-inline .checkbox input[type="checkbox"]').on('click', function(){
        if($(this).prop("checked") == true){
            $('.form-inline .checkbox .check-icon').css({
                'backgroundPosition': '0 0'
            })
        }
        else if($(this).prop("checked") == false){
            $('.form-inline .checkbox .check-icon').css({
                'backgroundPosition': '0 -16px'
            })
        }
    });


}); // end of document.ready