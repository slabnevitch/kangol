export const inputReset = () => {
	$('.reset, .inp-reset').on('click', function(e) {
		$(this).prev('input').val('');
	});
}