$(document).ready(function() {
	$('#indicators-slide-work li, #control-slide-work a').click(function(event) {
		var numberSlide = $('#number-slide');
		var numberCurSlide =$('#indicators-slide-work .active').attr('number');
		numberSlide.text(numberCurSlide +'/5');
	});
});