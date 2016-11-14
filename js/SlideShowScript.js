// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1}
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

$(function(){
	$('#slideshow-first .mySlides:first').addClass('top');

	var change = function (){
		var curr = $('#slideshow-first .mySlides.top');
		var next = curr.next();
		if (!next.length){
			next = $('#slideshow-first .mySlides.first');
			next.addClass('top');
			curr.removeClass('top');
		} else {
			next.addClass('top');
			curr.removeClass('top');
		}
		
	}

	setInterval(change, 5000);
});