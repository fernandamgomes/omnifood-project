$(document).ready(function() {
    /* ----- sticky navigation -----*/
    $ ('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });

    /*----- Scroll - header buttons -----*/
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
     }); 
     
     $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
     });
     
     
       /*-----Scroll NAVIGATION------*/
       $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    /*----- Mobile navigation -----*/
    $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon ion-icon');
      nav.slideToggle(200);
       
      if(icon.hasClass('hide')){
         icon.toggleClass('hide')
      }
   });

});
