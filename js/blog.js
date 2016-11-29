jQuery(document).ready(function()  {
	var $gird = $('.gird').isotope({
	itemSelector: '.element-item',
	layoutMode : 'fitRows',
	});

	// $('#fliters').on('click', '.btn', function() {
	// 	var filterValue = $(this).attr('data-filter');
	// 	console.log(filterValue);
	// 	$gird.isotope({ filter : filterValue});
	// });

	$('.filter').click(function(event) {
		var filterValue = $(this).attr('data-filter');
		$gird.isotope({ filter : filterValue});
	});

	$('#btn-show-more').click(function(event) {
		$('#blog-show-more').load('snippets/snippets-blog.html');
	});
});