$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		// slidesToScroll: 3,
		// autoplay: true,
		speed: 1000,
		// easing:'ease',
		// infinite: false,
		autoplaySpeed: 800,
		// initialSlide: 1,
		// pauseOnFocus: true,
		// pauseOnHover: true,
		// pauseOnDotsHover: true,
		// draggable: false, //desktop
		// swipe: false, //touchscreen
		// touchThreshold: 10, //how much smaller distance of slider should make finger to swipe next slide
		// touchMove: false,
		// waitForAnimate: false, //can or can't move slide faster
		// centerMode: true,
		// variableWidth: true,
		// rows: 3,
		// slidesPerRow: 2,
		// vertical: true,
		// verticalSwiping: true,
		// fade: true, //used with arrows:false
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		// mobileFirst: true,
		// appendArrows: $('.content'),
		// appendDots: $('.content'),
	});
});