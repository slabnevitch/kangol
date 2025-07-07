export const inputReset = () => {
	$('.reset, .inp-reset').on('click', function(e) {
		$(this).prev('.form__input').val('');
	});
	$('input[type="tel"]').on('input', function () {
	  this.value = this.value.replace(/[^0-9]/g, '');
	});
}