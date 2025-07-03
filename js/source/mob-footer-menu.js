import $ from 'jquery'
window.jQuery = $;
window.$ = $;

export const mobFooterMenu = () => {
		function bodyLock(isLock){
	        if(isLock) $('html').addClass('lock');
	        else $('html').removeClass('lock');
	    }

		 $(".mob-menu-trigger").click(function(e){
	        e.stopPropagation();

	        $(".catatalog__select .fstdiv").removeClass('open');
			$(".catatalog__select .fstdropdown").removeClass('open');

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-menu").hide();
	            bodyLock(false);
	        } else {
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");

	            // $(this).addClass("active");
	            $(".modal-menu").show();
	            bodyLock(true);
	        }
	    });

	  	$(".modal-menu__close").click(function(e){
            $(".modal-menu").hide();
            bodyLock(false);
		});

	    $(".btn-list-auth .btn-1").click(function(e){
	        e.stopPropagation();
	        $(".btn-list-auth .btn").removeClass("active");
	        $(this).addClass("active");
	        $(".text-auth-1").show();
	        $(".text-auth-2").hide();
	    });

	    $(".btn-list-auth .btn-2").click(function(e){
	        e.stopPropagation();
	        $(".btn-list-auth .btn").removeClass("active");
	        $(this).addClass("active");
	        $(".text-auth-2").show();
	        $(".text-auth-1").hide();
	    });


	    $(".footer-icon-cart").click(function(e){
	        e.stopPropagation();
	        
	        $(".catatalog__select .fstdiv").removeClass('open');
			$(".catatalog__select .fstdropdown").removeClass('open');
	        
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-cart").hide();
	            bodyLock(false);
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-search").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            // $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");
	            $(".mob-search").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-cart").show();
	            bodyLock(true);
	        }
	    });

	     $(".modal-cart__close").click(function(e){
	     	$(".modal-cart").hide();
	     	$(".footer-icon-cart").removeClass("active");
	     	bodyLock(false);
	     });

	    $(".mob-search").click(function(e){
	        e.stopPropagation();

	        $(".catatalog__select .fstdiv").removeClass('open');
			$(".catatalog__select .fstdropdown").removeClass('open');

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-search").hide();
	            bodyLock(false);
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-cart").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            // $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".footer-icon-cart").removeClass("active");
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-search").show();
	             bodyLock(true);
	        }
	    });

	    $(".modal-search__close").click(function(e){
	        e.stopPropagation();
	        $(".modal-search").hide();
	        $(".mob-search").removeClass("active");
	        bodyLock(false);
	    });

	    $(".footer-icon-fav").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-fav").hide();
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            // $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-fav").show();
	        }
	    });

	    $(".mob-modal .modal-bg").click(function() {
	        $(".mob-menu-trigger").removeClass("active");
	        $(".modal-menu").hide();
	        $(".mob-search").removeClass("active");
	        $(".modal-icon-block").removeClass("active");
	        $(".mob-modal").hide();

	    });

	    $(".footer-icon-account").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-auth").hide();
	            $(".modal-reg").hide();
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-reg").hide();
	            $(".modal-cart").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            // $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".footer-icon-cart").removeClass("active");
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-auth").show();
	        }
	    });

	    $(".open-modal-auth-pass").click(function(e){
	        e.stopPropagation();
	        $(".mob-menu-trigger").removeClass("active");
	        $(".modal-menu").hide();
	        $(".modal-cart").hide();
	        $(".modal-size").hide();
	        $(".modal-shops").hide();
	        $(".modal-sort").hide();
	        // $(".footer-icon-view").removeClass("active");
	        $(".mob-modal-view").hide();
	        $(".mob-modal").hide();
	        $(".footer-icon-cart").removeClass("active");
	        // $(".modal-icon-block").removeClass("active");

	        $(".modal-auth").hide();
	        $(".modal-auth-pass").show();

	    });
	    $(".modal-auth-pass .modal-bg").click(function(e){
	        e.stopPropagation();
	        $(".footer-icon-account").addClass("active");
	        $(".modal-auth-pass").hide();
	        $(".modal-auth").show();
	    });
	    $(".open-reg").click(function(e){
	        e.stopPropagation();
	        $(".mob-menu-trigger").removeClass("active");
	        $(".modal-menu").hide();
	        $(".modal-cart").hide();
	        $(".modal-size").hide();
	        $(".modal-shops").hide();
	        $(".modal-sort").hide();
	        // $(".footer-icon-view").removeClass("active");
	        $(".mob-modal-view").hide();
	        $(".mob-modal").hide();
	        $(".footer-icon-cart").removeClass("active");
	        // $(".modal-icon-block").removeClass("active");

	        $(".modal-auth").hide();
	        $(".modal-reg").show();

	    });




	    $(".open-restore-modal").click(function(e){
	        e.stopPropagation();
	        $(".mob-menu-trigger").removeClass("active");
	        $(".modal-menu").hide();
	        $(".modal-cart").hide();
	        $(".modal-size").hide();
	        $(".modal-shops").hide();
	        $(".modal-sort").hide();
	        // $(".footer-icon-view").removeClass("active");
	        $(".mob-modal-view").hide();
	        $(".mob-modal").hide();
	        $(".footer-icon-cart").removeClass("active");
	        // $(".modal-icon-block").removeClass("active");

	        $(".modal-auth").hide();
	        $(".modal-restore").show();

	    });

	    $(".footer-icon-view").click(function(e){
	        e.stopPropagation();
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".mob-modal-view").hide();
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".modal-sort").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");
	            $(this).addClass("active");

	            $(".mob-modal-view").show();
	        }
	    });

	    $(".footer-icon-sort").click(function(e){
	        e.stopPropagation();
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-sort").hide();
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-size").hide();
	            $(".modal-shops").hide();
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");
	            $(this).addClass("active");

	            $(".modal-sort").show();
	        }
	    });

	    $(".mob-modal-view .view").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");

	        } else {
	            $(".mob-modal-view .view").removeClass("active");
	            $(this).addClass("active");

	        }
	    });

	    $(".footer-icon-shops").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-shops").hide();
	        } else {
	            $(".modal-size").hide();
	            $(".modal-sort").hide();
	            $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-shops").show();
	        }
	    });

	    $(".footer-icon-filter").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-filter").hide();
	        } else {
	            $(".mob-menu-trigger").removeClass("active");
	            $(".modal-menu").hide();
	            $(".modal-size").hide();
	            $(".modal-sort").hide();
	            $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-filter").show();
	        }
	    });

	    $(".modal-size-trigger").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(".modal-size").hide();
	        } else {

	            $(".modal-sort").hide();
	            $(".footer-icon-view").removeClass("active");
	            $(".mob-modal-view").hide();
	            $(".mob-modal").hide();
	            $(".modal-icon-block").removeClass("active");

	            $(this).addClass("active");
	            $(".modal-size").show();
	        }
	    });

	    $(".mob-filter-title").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(this).next().slideUp();
	        } else {
	            $(".mob-filter-title").removeClass("active");
	            $(".mob-filter-sub").slideUp();

	            $(this).addClass("active");
	            $(this).next().slideDown();
	        }
	    });

	    $(".mob-filter-item.selected").click(function(e){
	        e.stopPropagation();
	        $(this).removeClass("selected");

	    });

	    $(".mob-circle-item").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");

	        } else {
	            $(this).addClass("active");

	        }
	    });

	    $(".lk-field-block .link-change").click(function(e){
	        e.stopPropagation();

	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(this).parent().parent().removeClass("active");
	            $(this).html("Изменить");
	        } else {
	            $(this).addClass("active");
	            $(this).html("Подтвердить");
	            $(this).parent().parent().addClass("active");
	        }
	    });


	    $(".lk-accordion .accordion-item:first-child .accordion-menu-title").addClass("active");
	    $(".lk-accordion .accordion-item:first-child .accordion-sub-block").show();
	    $(".lk-accordion .accordion-menu-title").click(function(e){
	        e.stopPropagation();
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(this).next().slideUp();
	        } else {
	            $(".lk-accordion .accordion-menu-title").removeClass("active");
	            $(".lk-accordion .accordion-sub-block").slideUp();
	            $(this).addClass("active");
	            $(this).next().slideDown();
	        }
	    });

	    $(".footer-acc .accordion-item:first-child .accordion-menu-title").addClass("active");
	    $(".footer-acc .accordion-item:first-child .accordion-sub-block").show();
	    $(".footer-acc .accordion-menu-title").click(function(e){
	        e.stopPropagation();
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(this).next().slideUp();
	        } else {
	            $(".footer-acc .accordion-menu-title").removeClass("active");
	            $(".footer-acc .accordion-sub-block").slideUp();
	            $(this).addClass("active");
	            $(this).next().slideDown();
	        }
	    });

	    //$(".mob-menu-acc .accordion-item:first-child .accordion-menu-title").addClass("active");
	    //$(".mob-menu-acc .accordion-item:first-child .accordion-sub-block").show();
	    $(".mob-menu-acc .accordion-menu-title").click(function(e){
	        e.stopPropagation();
	        if($(this).hasClass("active")){
	            $(this).removeClass("active");
	            $(this).next().slideUp();
	        } else {
	            $(".mob-menu-acc .accordion-menu-title").removeClass("active");
	            $(".mob-menu-acc .accordion-sub-block").slideUp();
	            $(this).addClass("active");
	            $(this).next().slideDown();
	        }
	    });
} 