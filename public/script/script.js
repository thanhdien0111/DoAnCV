$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
        }
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 500);
    })
});