window.onscroll = function() {
		
    // Get the navbar
    var main__header = document.querySelector(".main_header");

    // Get the offset position of the navbar
    var scrollY = 20;
    
    if (window.pageYOffset >= scrollY) {
        main__header.classList.add("fixed_top"); 
    
    } else {
        main__header.classList.remove("fixed_top");
    
    }
    
};

$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.mobile-menu').toggleClass('menu-clicked');
        $('.menus').css({'transition':'.3s'});
        $('.menus').toggleClass('menu-open');
    })
    $('.close-menu').click(function(){
        $('.mobile-menu').toggleClass('menu-clicked');
        $('.menus').toggleClass('menu-open');
    })
});