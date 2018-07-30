/*global $, JQuery , alert*/
$(function (){

    'use strict';

    var windowHeight   = $(window).height(),
        uppernavHeight = $('.upper-bar').innerHeight(),
        navbarHeight   = $('.navbar').innerHeight(),
testimonialHeight      = $('.testimonial').innerHeight();

    $('.slider ,.slider .carousel-item ').height(windowHeight - (uppernavHeight + navbarHeight));
    $('.testimonial .carousel-item').height(testimonialHeight - 250);


    // futer work shuffle
    $('.featured-work ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class') == 'all'){
            $('.gallary .col-md').css('opacity', 1);

        }else{
            $('.gallary .col-md').css('opacity', '0.07');
           $($(this).data('class')).parent().css('opacity', 1);
        }

    });

    //change navbar active color

    $(".navbar-light .navbar-nav .nav-link").on('click',function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

        $('html , body').animate({

            scrollTop: $('#'+ $(this).data('value')).offset().top - navbarHeight

        },1000);
    });

    $(window).scroll(function(){

        $('section').each(function() {

            if ( $(window).scrollTop() > ( ($(this).offset().top ) - navbarHeight) ) {

            var sectionID = $(this).attr('id');

            $('.navbar-light .navbar-nav .nav-link').parent().removeClass('active');

            $('.navbar-light .navbar-nav .nav-link[data-value="'+ sectionID +'"]').parent().addClass('active');

        }
    });

        // ------------------------ make a scroll top with JQuery

        if ($(this).scrollTop() >= 700){
            $('.scrollUp').show();
        }
        else{
            $('.scrollUp').hide();
        }

        if ($(window).scrollTop() >= (windowHeight - (uppernavHeight + navbarHeight)) ){

            if (!$('.navbar').hasClass('fixed-top')){

                $('.navbar').addClass('fixed-top');
            }
            }else{
                $('.navbar').removeClass('fixed-top');

            }
    });

    /// ---------------------------- make a scroll top in javascript  --------------------

    // var myscroll = document.getElementById('scrollUp');

    // window.onscroll = function () {
    //     'use strict';
    //     if (window.pageYOffset >= 700 ){
    //         myscroll.style.display = "block";
    //     }
    //     else{
    //         myscroll.style.display = "none";
    //     }
    // };

    $('.scrollUp').on('click', function () {
        $('html ,body').animate({
            scrollTop: '0'
        },600);
    });



    // start count up
    $('.counter').counterUp({
            delay: 50,
            time: 2000
    });


});
