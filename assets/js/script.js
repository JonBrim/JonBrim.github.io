$( ".toggle" ).click( function(){
	$( ".navigation" ).toggleClass( "open" );
});
$(document).click(function() {
  $('.navigation').removeClass('open');
});