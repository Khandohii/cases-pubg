$(function(){
	//Кномка меню
	$('.mob_menu_link').click(function(e){
		e.preventDefault()

		if( $(this).hasClass('active') ){
			$(this).removeClass('active').next().slideUp(200)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})

	//Слайдер
	$('.carousel_clothes .items').bxSlider({
		auto: true,
		controls: false,
		pager: false,
		minSlides: 1,
		maxSlides: 55,
		infiniteLoop: true,
		slideWidth: 117,
		touchEnabled: false,
	})

	//Слайдер
	$('.ruletka .items').owlCarousel({
		autoplay: true,
		nav: false,
		dots: false,
		margin: 12,
		loop: true,
		center: true,
		responsive : {
			// breakpoint from 950 up
			950 : {
				items: 7,
			},
			// breakpoint from 700 up
			700 : {
				items: 5,
			},
			// breakpoint from 450 up
			450 : {
				items: 3,
			},
			// breakpoint from 320 up
			0 : {
				items: 2,
			},

		}
	})

	//Селект
	$('aside.sidebar .heading .select select').selectbox({})

	//Аккордион
	$(".faq .item .name").click(function() {
		if ($(this).parent().hasClass('active')) {
			$(this).next().slideUp(300);
			$(this).parent().removeClass('active');
		} else {
			$(this).next().slideDown(300);
			$(this).parent().addClass('active');
		}
	});	
});