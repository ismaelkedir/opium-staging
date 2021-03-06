$(function() {
    'use strict';

    navScrollTo();

    $(window).scroll(function() {

        var wScroll = $(this).scrollTop();
        var wHeight = $(this).height();
        var wWidth = $(window).width();
        var selector = $('.parallax-bg');        

        changeNavbar();
        revealSections();
        
        if (wWidth > 992) {
            parallexBg();
        }

        function changeNavbar() {
            if (wScroll > $('.carousel').height()) {
                //  $('nav').removeClass('navbar-static-top');
                $('nav.navbar.navbar-default.navbar-static-top#homepage-navbar').addClass('navbar-fixed-top animated slideInDown');
                $('.logo-white').addClass('hidden');
                $('.logo').removeClass('hidden');
               //  $('.navbar-brand').css({
               //      'width': '80px'
               //  });
                return;
            } else {
                $('.logo').addClass('hidden');
                $('.logo-white').removeClass('hidden');
                $('nav.navbar.navbar-default.navbar-static-top#homepage-navbar').removeClass('navbar-fixed-top animated slideInDown');
               //  $('.navbar-brand').css({
               //      'width': '160px'
               //  });
                return;
            };
        };

        function revealSections() {
            $('.carousel .carousel-caption').css({
                'margin-top': '-' + wScroll / 5 + 'px'
            });

            // =========== Commented temporarily ==============
            // Reveal about section
            // if (wScroll > $('.about-section').offset().top - wHeight / 1.5) {
            //     $('.about-section').addClass('animated fadeIn');
            // };

            
            // Reveal recomend-title section
            /*
            if (wScroll > $('.recomend-section').offset().top - wHeight / 1.5) {
                $('.recomend-section').addClass('animated fadeIn');
            };


            // Reveal recomendations section
            if (wScroll > $('.recomendations').offset().top - wHeight / 1.5) {
                $('.dishes .dish').each(function(i) {
                    setTimeout(function() {
                        $('.dishes .dish').eq(i).addClass('animated fadeIn');
                    }, 100 * (i + 1));
                });
            };

            // Reveal the menu-items section
            (if (wScroll > $('.menu-section').offset().top - wHeight / 1.5) {
                var eachMenu = '.menu-section .menu';

                $(eachMenu).each(function(i) {
                    setTimeout(function() {
                        $(eachMenu).eq(i).addClass('animated fadeInDown');
                    }, 100 * (i + 1));
                });
            };
            */

            // Reveal the our-chef section
            // if (wScroll > $('.chef-section').offset().top - wHeight / 1.5) {
            //     $('.chef-section').addClass('animated fadeIn');
            //     setTimeout(function() {
            //         $('.chef-card').addClass('animated fadeIn');
            //     }, 500)
            // };
        }

        // Parallax the background images with different scrolling speed than the page
        function parallexBg() {
            selector.css('background-position', 'center ' + -(wScroll * 0.15) + 'px');
        }
    });

    function navScrollTo() {
        // navigation scrolling animations
        $('.navbar .navbar-nav li a').click(function(e) {
            var targetIsId = e.currentTarget.id;
    
            // Check if the href leads to an id of an element
            if (targetIsId) {
                e.preventDefault();

                    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');

                hideDropdown();
            }
        });
    }

    // collapses the mobile navbar if the screen width is less than 1090px
    function hideDropdown() {
        if ($(window).width() < 1090) {
            $('.navbar .navbar-toggle').click();
        }
    }
});


