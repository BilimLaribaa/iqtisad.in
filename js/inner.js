/**
*
* -----------------------------------------------------------------------------
*
* Template : Grassy - One Page Corporate HTML5 Template 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";   
  // Add "loaded" class when a section has been loaded
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop();
    $("section").each(function() {
      var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
      if(scrollTop >= elementTop) {
        $(this).addClass('loaded');
      }
    });
  });

  // One Page Navigation Setup
  $('.navbar-collapse ul').singlePageNav({
    offset: $('.menu-sticky').outerHeight(),
    filter: ':not(.external)',
    speed: 750,
    currentClass: 'active',

    beforeStart: function() {
    },
    onComplete: function() {
    }
  });

  // Sticky Navbar Affix
  $('.menu-sticky').affix({
    offset: {
      top: $('.toolbar-area').outerHeight(),
    }
  });


    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    // wow init
    new WOW().init();
  
	// Preloader	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
		
    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });
    
    // scrollTop init
   // scrollTop init
	var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
})(jQuery);