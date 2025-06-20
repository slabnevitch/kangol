export const mainSliderInit = () => {
	$('.main-slider__carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1.025,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: false,
        
        responsive: [
		    {
		      breakpoint: 1023,
		      settings: {
			        autoplay: true,
			        autoplaySpeed: 5000
			    }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
}