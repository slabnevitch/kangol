export const inputReset = () => {
	$('.reset, .inp-reset').on('click', function(e) {
		$(this).prev('.form__input').val('');
	});
}