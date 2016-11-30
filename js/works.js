$(document).ready(function() {
	var $grid = $('.grid');
	$grid.imagesLoaded(function(){
		$grid.masonry({
			itemSelector: '.work-image',
			percentPosition: true,
			columnWidth: '.work-image'
		});
	});

	$grid.isotope({
		itemSelector: '.work-image',
		layoutMode: 'fitRows',
	});

	$('.filter').click(function (e) {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter : filterValue});
		$grid.masonry({
			itemSelector: '.work-image',
			percentPosition: true,
			columnWidth: '.work-image'
		});
	});
});