'use strict';

(function($){
	$(document).ready(function() {
		// MAP

    function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
  });

  //new AutocompleteDirectionsHandler(map);
}

// SLIDER

 $(document).ready(function(){
      $('.team__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true
 
      });
    });

 // ISOTOPE

 $('.blocks').isotope({
        itemSelector: '.blocks__img',
        percentPosition: true,
        masonry: {
          gutter: 7
        }
      });

      $('.filters').on('click', 'li', function() {
        var val = $(this).data('filter');
        $('.blocks').isotope({filter: val})
      });

  
    
  });

})(jQuery);

