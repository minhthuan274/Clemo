$(document).ready(function() {
	var nameTitle = '';
	$('.btn-link, .btn').click(function () {
		nameTitle = $(this).attr('name');
		$('main').load('snippets/service-snippets.html');
		$('.footer-top').show();
		$('#title-aboutus').text(nameTitle);
	});
});