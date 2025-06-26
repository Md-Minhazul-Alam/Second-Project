$(document).ready(function(){
    // Mobile Menu Toggle
    $('.hamburger').click(function(){
        $('.mobile-sidebar').addClass('active')
        $('.overlay').addClass('active')
    });
    $('.close-button, .overlay').click(function(){
        $('.mobile-sidebar').removeClass('active')
        $('.overlay').removeClass('active')
    });
    // Order Model
    $('.order-button').click(function(){
        $('#orderDeliveryModel').show();
    });
    $('.close').click(function(){
        $('#orderDeliveryModel').hide();
    })

})