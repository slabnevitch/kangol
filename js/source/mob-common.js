export const mobCommon = () => {
	$(function () {


    $('.lazy').lazy();

    if($(this).scrollTop() > 170) {
        $('.mob-header-bottom').css({"display" : ""});
        $('.catalog-trigger').removeClass("active");
        $('.mob-header').addClass("fixed");
        // $("body").removeClass("fixed-important");
    } else {
        // $("body").addClass("fixed-important");
        $('.catalog-trigger').addClass("active");
        $('.mob-header-bottom').css({"display" : "block"});
        $('.mob-header').removeClass("fixed");
    }

    $(window).scroll(function() {
        if($(this).scrollTop() > 170) {
            $('.mob-header-bottom').css({"display" : ""});
            $('.catalog-trigger').removeClass("active");
            $('.mob-header').addClass("fixed");
            $("body").removeClass("fixed-important");

        } else {
            $("body").addClass("fixed-important");
            $('.catalog-trigger').addClass("active");
            $('.mob-header-bottom').css({"display" : "block"});
            $('.mob-header').removeClass("fixed");
        }


    });

    $(".product-card .ic-fav, .product-card-2 .ic-fav").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".tag-list .tag").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".catalog-trigger").click(function(e){
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".mob-header-bottom").hide();
            $(".mob-header-bottom").removeClass("active");

        } else {
            $(".mob-header-bottom").show();
            $(".mob-header-bottom").addClass("active");

            $(this).addClass("active");


        }
    });


    $('.slider-product').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('.slider-product-2').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    
    $('.home-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1.025,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('.bestsellers-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: false,
        //infinite: false
    });

    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    // modal size
    $(".js-modal-size").click(function(e){
        e.preventDefault();
        e.stopPropagation();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".modal-size").hide();
        } else {
            $(".mob-menu-trigger").removeClass("active");
            $(".modal-menu").hide();
            $(".modal-search").hide();
            // $(".modal-size").hide();
            $(".modal-shops").hide();
            $(".modal-sort").hide();
            // $(".footer-icon-view").removeClass("active");
            $(".mob-modal-view").hide();
            $(".mob-modal").hide();
            $(".modal-cart").hide();
            $(".modal-icon-block").removeClass("active");
            $(".mob-search").removeClass("active");

            $(this).addClass("active");
            $(".modal-size").show();
        }
    });
});
}