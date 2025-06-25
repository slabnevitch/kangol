export const availabilityBooking = () =>{
	$('.mob-card-availability-list__item-book').on('click', function() {
		$(this)
			.closest('.mob-card-availability-list__item')
			.next('.product__booking')
			.toggleClass('active');
	});
}
export const sizeChecking = () =>{
	$('.list-size__radio').on('change', function() {
		$('.list-size__radio').each(function(i, item) {
			if(item.checked){
				$('.product__order-btn').removeAttr('disabled');
				$('.product__order-btn').text('в корзину');
			}
		});
	});
}
export const footerObserver = () =>{
	//использовать вместе с гистами "header HTML for _scroll" и "styles for _scroll.header"
	var productName = document.querySelector('.product__name'),
	observerCallback = function(entries, observer) {
		console.log(entries);
		if(entries[0].isIntersecting){
			$('.view-product__thumbs').removeClass('view-product__thumbs--sticky');
		}else{
			$('.view-product__thumbs').addClass('view-product__thumbs--sticky');
		}
	};

	var footerObserver = new IntersectionObserver(observerCallback);
	footerObserver.observe(productName);
}