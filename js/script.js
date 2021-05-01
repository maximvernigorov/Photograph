$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



$(document).ready(function(){

	$('.slider').slick({
		arrows: true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:1,
		speed: 1000,
		easing:'linear',
		infinite:true,
		initialSlide:0,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		responsive:[
		{
			breakpoint: 1024,
			settings: {
				slidesToShow:3,
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow:2,
			}
		},

		{
			breakpoint: 425,
			settings: {
				slidesToShow:1,
			}
		}
		]
	});
});




