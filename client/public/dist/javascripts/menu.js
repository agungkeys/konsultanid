$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('current');
});