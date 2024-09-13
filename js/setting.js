//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});

$(function () {
    $(".setup-step .setup-step__item").click(function () {
        var num = $(".setup-step .setup-step__item").index(this);
        $(".setup-block__img-item").removeClass('active');
        $(".setup-block__img-item").eq(num).addClass('active');
        $(".setup-step .setup-step__item").removeClass('active');
        $(this).addClass('active')
    });
});

$('.question-block__ct-item').on('click', function(){
    $(this).toggleClass("active");
    $(this).find("dd").slideToggle();
});
jQuery(document).ready(function ($) {
    
    $(window).on("scroll", function () {
        
        if($(window).scrollTop()> $(".sec-setup").offset().top){
            $("#header").addClass("white");
        }
        else {
            $("#header").removeClass("white");
        }
    });
});