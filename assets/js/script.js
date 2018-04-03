$( ".toggle" ).click( function(){
	$( ".navigation" ).toggleClass( "open" );
	return false;
});
$(document).click(function() {
	$( ".navigation" ).removeClass( "open" );
});