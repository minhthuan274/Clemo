$(document).ready(function() {
	var curActive = $('.nav.navbar-nav').find('.active-nav');
	$('.nav.navbar-nav a').hover(function() {
		curActive.removeClass('active-nav');
		$(this).addClass('active-nav');
	}, function() {
		$(this).removeClass('active-nav');
		curActive.addClass('active-nav');
	});
});