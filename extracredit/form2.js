$(window).resize(function() { // targets h1 to automatically resize text by 6% according to window width
    let size = $(window).width() *0.06;
    $('h1').css('font-size', size + 'px');
});

$(document).ready(function(){
    $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
        breakpoint: 1400,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
        }
    },
        {
        breakpoint: 1026,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
        }
    },
    {
        breakpoint: 903,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
        }
    }
    ]
    });
});