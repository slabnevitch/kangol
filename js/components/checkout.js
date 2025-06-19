export const checkoutLabels = () => {
	$('.delivery-checkout__method .payment-checkout__input').on('change', deliveryMethodCheck);
	

	function deliveryMethodCheck(e) {
		const target = e.target;
		console.log(e.target.value);
		if(target.value === 'delivery'){
			$('.checkout__delivery').addClass('checkout__delivery--delivery');
			$('.checkout__delivery').removeClass('checkout__delivery--self-pickup');
		}else if(target.value === 'self-pickup'){
			$('.checkout__delivery').removeClass('checkout__delivery--delivery');
			$('.checkout__delivery').addClass('checkout__delivery--self-pickup');
		}
	}
}