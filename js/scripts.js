jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Countdown
    // -------------------------------------------------------------
    (function () {

        $("#back-countdiown").countdown({
            date: "30 sep 2018 20:00:00",
            format: "on"
        });
    
    }()); 


}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})
