 
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,         
        dots: false,
        // items: 5, 
        slideTransition: `linear`,
        autoplay: 1000,
        smartSpeed: 1000,
        autoplayTimeout: 1000,
        loop: true,
        responsive:{ 
            0:{
                items:2,
                nav: false
        
            },
           768:{
                items:5
                
            }
        }
    });
});