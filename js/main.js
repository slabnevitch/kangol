// Import vendor jQuery plugin example (not module)
// import $ from '~/app/libs/jquery/jquery.min.js';
// import $ from 'jquery'
// window.jQuery = $;
// window.$ = $;
// console.log($)

// Swiper----------------------------
// import Swiper, { Navigation, Mousewheel } from 'swiper/modules';
// Swiper.use([Navigation, Mousewheel]);

// Lazysizes--------------------------
// import 'lazysizes'; //основной скрипт

// import a plugin
// import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
// require ('~/app/libs-vanilla/service-functions/ibg-class.js');

//- remove-class--------------------------
// import {removeClass} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- siblings--------------------------
// import {siblings} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeIn--------------------------
// import {fadeIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeOut--------------------------
// import {fadeOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- fadeToggle--------------------------
// import {fadeToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideIn--------------------------
// import {slideIn} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideOut--------------------------
// import {slideOut} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- slideToggle--------------------------
// import {slideToggle} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- theme-switcher --------------------------
// Для переключения цвет. схемы нужны 2 кнопки, с классами .switcher и .reset
// Для .reset нужно изначально задать display: none, а при добавлении класса .active установить для него display: block
// сама тема меняется добавлением к <html> тегу классов dark & light.
// в соответствии с этими классами нужно менять иконки Луны и Солнца
// Работающий пример: all layout/FarmDev
// require('~/app/libs-vanilla/service-functions/theme-switcher.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- multilevel-panel--------------------------
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- isMobile--------------------------
// import {isMobile} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- scrollDisable(надежное отключение скролла на ios--------------------------
// import scrollDisabler from '~/app/libs-vanilla/service-functions/scrollDisable.js'

//- scrollWidth(фикс прыгания стр-цы. при открытии модалки--------------------------
// require ('~/app/libs-vanilla/service-functions/scrollWidth.js');

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/service-functions/all-functions.js';

//- ScrollTabs (прокрутка длинных табов на моббильных экранах)-------------------------- 
// import {ScrollTabs} from '~/app/libs-vanilla/service-functions/all-functions.js';
// new ScrollTabs();

// import {multiDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';//
// if(document.querySelectorAll('[data-dropdowned]') != null){
// 	multiDropdown();
// }

//- singleDropdown--------------------------
// import {singleDropdown} from '~/app/libs-vanilla/service-functions/all-functions.js';
// if(document.querySelectorAll('[data-single-dropdown]') != null){
// 	singleDropdown();
// }


//- WITH JQUERY===================================

//- jquery-UI--------------------------Не проверено!
// require('~/app/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// const dlmenu = require('~/app/libs/dlmenu/js/jquery.dlmenu.js')
// папку dl-menu/fonts копировать в главную fonts и переименовать в "dl-menu-font"

//- magnific-popup--------------------------
// const magnificPopup = require('~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
require('./vendor/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('~/app/libs/slick-master/slick.js')
		
//- superfish--------------------------Не проверено!
// require('~/app/libs/superfish/dist/js/hoverIntent.js')
// require('~/app/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
// require('~/app/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// var Slideout = require('~/app/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------Не проверено!
// require('~/app/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('~/app/libs-vanilla/multilevel-dropdown/multidropdown.js')

//- accordion--------------------------
// require('~/app/libs-vanilla/accordion/vanilla-accordion.js')

//- spoilers-------------------------
// require('~/app/libs-vanilla/spoilers/spoilers.js')
	
//- tabs--------------------------
// require('~/app/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('~/app/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// При подключении скрипта ScrollTrigger.js micromodal выдает ошибку при инициализации!!
// var MicroModal = require('~/app/libs-vanilla/micromodal/micromodal.js')

//- GraphModal--------------------------
// не требует подключения scrollWidth(фикс прыгания стр-цы. при открытии модалки)
// require('/app/libs-vanilla/graph-modal/dist/graph-modal.min.js')

//- VenoBox--------------------------
// модалка для всех видов содержимого - inline, iframe, photo
// Внимание! Копирует, исходное содержимоев  модалку в режиме inline, поэтому не подходит для отправки форм через onsubmit!
// Лучше вообще не использовать для форм.
// var VenoBox = require('~/app/libs-vanilla/VenoBox/dist/venobox.js')

//- bottomSheet--------------------------
// require('/app/libs-vanilla/bottomSheet/bottomSheetES6.js')
	
//- swiper--------------------------
// const Swiper = require('~/app/libs-vanilla/swiper/swiper-bundle.min.js')

//- tiny-slider--------------------------
// import {tns} from '~/app/libs-vanilla/tiny-slider/dist/tiny-slider.js';

//- wNumb--------------------------
// var wNumb = require('~/app/libs-vanilla/wnumb/wNumb.js')

// - noUiSlider--------------------------
// var noUiSlider = require('~/app/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('~/app/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// var FormHandler = require('~/app/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.js')

//- ratings--------------------------
// require('~/app/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// import {ScrollToSects} from '~/app/libs-vanilla/scroll-to-sects/scrolltosect.js';

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// import tippy from 'tippy.js';

//- sticky-sidebar -------------------------- Не проверено!
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE: new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
var SimpleBar = require('~/app/js/vendor/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
require('./vendor/fstdropdown/fstdropdown.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// var baguetteBox = require('~/app/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
require('./vendor/counter/counter.js')

//- jquery.lazy-------------------------
require('~/app/js/source/lazy_load/jquery.lazy.min.js')
	
//- end VANILLA JS===================================

// jQuery(document).ready(function() {
// 	console.log('jQuery document ready');

// });

import {mobFooterMenu} from '~/app/js/source/mob-footer-menu.js';
import {mobCommon} from '~/app/js/source/mob-common.js';

mobFooterMenu();
mobCommon();

document.addEventListener('DOMContentLoaded', () => {

	$('.announcement-header__close').on('click', function(){
		$(this).closest('.header__announcement').remove();
	})

	if(document.querySelector('[data-simplebar]') !== null){
		new SimpleBar(document.querySelector('[data-simplebar]'), { 
			autoHide: false,
			clickOnTrack: false
			 // scrollbarMinSize: 300
		});
	}
	
	// открытие фильтра на стр. листинга
	if(document.getElementById('cards-filter-open') !== null && document.getElementById('cards-filter-select') !== null){
		document.getElementById('cards-filter-open').onclick = () => {
			document.querySelector(".catatalog__select .fstdiv").classList.toggle('open');
			document.querySelector(".catatalog__select .fstdropdown").classList.toggle('open');
		}		
		
		document.documentElement.addEventListener('click', docClick);
		function docClick(e) {
			console.log(e.target.closest('#cards-filter-open'));
			if (e.target.closest('#cards-filter-open') === null){
				document.querySelector(".catatalog__select .fstdiv").classList.remove('open');
				document.querySelector(".catatalog__select .fstdropdown").classList.remove('open');
			}
		}
	}
	//END открытие фильтра на стр. листинга

	// scroll наверх страницы
	$('.to-top-btn').on('click', function() {
		window.scroll({
		  top: 0, 
		  behavior: 'smooth'
		});
	});
	//END scroll наверх страницы
	
	// document.querySelector('.fstdropdown-select').onchange = (e)=> console.log(e.target.value);
}); //DOMContentLoaded
