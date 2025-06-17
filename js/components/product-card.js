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