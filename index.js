jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 600) {
        $('header').addClass('border-bottom');
        // $('header').removeClass('border-bottom');
      } else if (ww >= 601) {
        $('header').addClass('border-bottom');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });