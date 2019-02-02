/*global $, JQuery , alert*/
$(function (){

    'use strict';

    var windowHeight   = $(window).height(),
        navbarHeight   = $('.navbar').innerHeight();
        // $('.slider .carousel-item, header.offer2').height(windowHeight  - (navbarHeight));
        // $('header.offer.offer2 .slider').css('top' , -(navbarHeight));

    $(".navbar-light .navbar-nav .nav-link").on('click',function(){
      $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // $(window).resize( function(){
    //   $('header.offer2').height(windowHeight  - (navbarHeight));
    // });

});
