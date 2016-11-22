$(document).ready(function(){

	$('.optin').focus(function(event) {
		/* Act on the event */
		var titleName = $(this).attr('name');
		$(this).attr('placeholder','');
		$('#title-' + titleName).css('opacity', '0.5');
	});

	$('.optin').focusout(function(event) {
		var titleName = $(this).attr('name');
		if($(this)["0"].value == ""){
			$('#title-' + titleName).css('opacity', '0');;
			$(this).attr('placeholder',titleName);
		}
		else
			$('#title-' + titleName).show();
	});

	$('#submit-btn').click(function() {
		$("#submit-row").load('snippets/submit-successful.html');
	});

	$("#newMessage-btn").click(function() {
		$("#submit-row").load('snippets/submit-form.html');
	});
});