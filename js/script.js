$(document).ready(function() {

	/* For the sticky navigation */
  	$('.js--sec-feat').waypoint(function(direction){
  		if(direction =="down"){
  			$('nav').addClass('sticky-nav');
  		} else {
  			$('nav').removeClass('sticky-nav');
  		}
  	}, {
		  offset: '60px;'
		});



  	/* Scroll on buttons */
  	$('.js--scroll-to-plans').click(function() {
  		$('html, body').animate({scrollTop: $('.js--sec-plans').offset().top}, 1000);
  	});


  	$('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--sec-feat').offset().top}, 1000); 
	});

	/*Navigation scroll
	$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });*/
	$(document).ready(function(){
	  // Add smooth scrolling to all links
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
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
	});



	/* Animations on scroll */
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},{
		offset: '50%'
	});

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
	},{
		offset: '50%'
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},{
		offset: '50%'
	});

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');
	},{
		offset: '50%'
	});


	/* Mobile navigation */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i')
		nav.slideToggle(200);
		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}

	});

	/* Maps */ 
	var map = new GMaps({
	  div: '.map',
	  lat: 31.5397566,
	  lng: 74.4,
	  zoom: 12
	});

	map.addMarker({
	  lat: 31.5397566,
	  lng: 74.3080056,
	  title: 'Ichra',
	  infoWindow: {
	  content: '<p>Our ichra HQ</p>'
	}
	});


});


