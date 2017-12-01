$(function () {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 175,
        fitWidth: true,
    });


    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });
    
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
}());