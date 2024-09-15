//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    $(".header-nav").fadeToggle();
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


$(document).ready(function() {
    if($(window).width()>834){
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
        });
    }
    else{
        $(function () {
            $(".setup-step .setup-step__item").click(function () {
                var num = $(".setup-step .setup-step__item").index(this);
                $('.setup-step__ct-img').removeClass('active');
                $(".setup-block__img .setup-block__img-item").removeClass('active');
                $(".setup-block__img .setup-block__img-item").eq(num).addClass('active');
                $(".setup-step .setup-step__item").removeClass('active');
                $(this).addClass('active');
                $(this).find('.setup-step__ct-img').addClass('active');
            });
        });
    }
});





$('.question-block__ct-item').on('click', function(){
    $(this).toggleClass("active");
    $(this).find("dd").slideToggle();
});


$(window).on('scroll load assessFeatureHeaders', function(){
    var scrollTop = $(window).scrollTop();
    var appearenceBuffer = 60;
    var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
    $('body').toggleClass('scrolled-down', scrollTop > 0);
    $('.js-scrollin:not(.fade)').filter(function(){
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        return offset + height >= scrollTop && offset <= windowBottom;
    }).addClass('fade');
});


// function load() {
//     document.body.classList.add('is-hello');
// }
// window.onload = load;

setTimeout(function () {
    $("body").addClass("is-hello");
},500);


$(function () {
    var headerHeight = $('#header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-anchor').click(function(e) {
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 700);
       
        $(".js-mobile").removeClass("js-mobile--close");
        $("html").removeClass("js-locked");
        $(".header-nav").fadeOut();
        e.preventDefault();
    });
});



//resize slider load page
var window_type;
var $window = $(window);
if ($window.width() <= 835) {
    window_type = 'sp';
} else {
    window_type = 'pc';
}
$(window).resize(function() {
    if($window.width() <= 835){
        if( (window_type != 'sp') ){
            location.reload();
        }
    }else{
        if(window_type != 'pc'){
            location.reload();
        }
    }
});