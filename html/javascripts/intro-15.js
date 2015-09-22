// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: DIGNITY.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    
    //Carousels
     $("#intro-15-carousel").owlCarousel({
        slideSpeed: 100,
        paginationSpeed: 100,
        stopOnHover: true,
        transitionStyle : "fadeUp",
        navigation : false,
        navigationText :["<",">"],
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: true
      });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  
