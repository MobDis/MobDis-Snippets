//create the header
$("div[data-role=page]").each(function(i,e){
	var $e = $(e);
	$e
		.prepend('<div data-role="header" data-position="fixed" data-id="header"> <a href="#" data-rel="back" data-transition="fade">Back</a> <h1>'+ $e.attr("id") +'</h1> </div> ')
});
