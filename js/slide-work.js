$(document).ready(function() {

		var numberSlide = $('#number-slide');
		var numberCurSlide =$('#indicators-slide-work .active').attr('number');
		numberSlide.text(numberCurSlide +'/5');
});