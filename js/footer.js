$(document).ready(function(){

	$('.optin').focus(function(event) {
		/* Act on the event */
		var titleName = $(this).attr('name');
		$(this).attr('placeholder','');
		$('#title-' + titleName).show();
	});

	$('.optin').focusout(function(event) {
		var titleName = $(this).attr('name');
		if($(this)["0"].value == ""){
			$('#title-' + titleName).hide();
			$(this).attr('placeholder',titleName);
		}
		else
			$('#title-' + titleName).show();
	});
});