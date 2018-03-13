$(document).on( "scroll", function() {
	var windowHeight = $(window).height();
	if ( $(document).scrollTop() > 75 ) {
		$( ".nav" ).addClass( "shrink" );
		$( ".page-content" ).addClass( "shrink" );
	}
	else {
		$( ".nav" ).removeClass( "shrink" );
		$( ".page-content" ).removeClass( "shrink" );
	}
});