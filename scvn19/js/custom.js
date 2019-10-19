(function ($) {

    "use strict";

        // PRE loader
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("100%", 0.3);
          $('#about').parallax("20%", 0.3);
          $('#work').parallax("40%", 0.3);
          $('#contact').parallax("60%", 0.3);
          $('#footer').parallax("80%", 0.3);
          }
        initParallax();

        //SoundCloud API
        $(window).load(function () {
            var SC_frame = SC.Widget(document.getElementById("SC-frame"));
            //Click A Track (SoundCloud Controlls).
            $("#tr01").click(function(){
                SC_frame.seekTo(0);
            });
            $("#tr02").click(function(){
                SC_frame.seekTo(16000);
            });
            $("#tr03").click(function(){
                SC_frame.seekTo(32500);
            });
            $("#tr04").click(function(){
                SC_frame.seekTo(49200);
            });
            $("#tr05").click(function(){
                SC_frame.seekTo(72000);
            });
        });

        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);
