$(document).ready(function(){
    // Order Model
    $('.order-button').click(function(){
        $('#orderDeliveryModel').show();
    });
    $('.close').click(function(){
        $('#orderDeliveryModel').hide();
    });
    $(window).click(function(e){
        if(e.target.id === 'orderDeliveryModel'){
            $('#orderDeliveryModel').hide();   
        }
    });

})

