$(function(){"use strict";$(".navbar .navbar-nav li a").click(function(a){var e=a.currentTarget.id,n=e+"-section";e&&(a.preventDefault(),$("html body").animate({scrollTop:$("#"+n).offset().top},1e3))}),$(window).scroll(function(){var a=$(this).scrollTop(),e=$(this).height(),n=$(window).width(),t=$(".parallax-bg");a>$(".carousel").height()?($("nav.navbar.navbar-default.navbar-static-top#homepage-navbar").addClass("navbar-fixed-top animated slideInDown"),$(".logo-white").addClass("hidden"),$(".logo").removeClass("hidden")):($(".logo").addClass("hidden"),$(".logo-white").removeClass("hidden"),$("nav.navbar.navbar-default.navbar-static-top#homepage-navbar").removeClass("navbar-fixed-top animated slideInDown")),function(){$(".carousel .carousel-caption").css({"margin-top":"-"+a/5+"px"}),a>$(".about-section").offset().top-e/1.5&&$(".about-section").addClass("animated fadeIn"),a>$(".recomend-section").offset().top-e/1.5&&$(".recomend-section").addClass("animated fadeIn"),a>$(".recomendations").offset().top-e/1.5&&$(".dishes .dish").each(function(a){setTimeout(function(){$(".dishes .dish").eq(a).addClass("animated fadeIn")},100*(a+1))}),a>$(".menu-section").offset().top-e/1.5&&$(".menu-section .menu").each(function(a){setTimeout(function(){$(".menu-section .menu").eq(a).addClass("animated fadeInDown")},100*(a+1))});a>$(".chef-section").offset().top-e/1.5&&($(".chef-section").addClass("animated fadeIn"),setTimeout(function(){$(".chef-card").addClass("animated fadeIn")},500))}(),n>992&&t.css("background-position","center "+-.15*a+"px")})});