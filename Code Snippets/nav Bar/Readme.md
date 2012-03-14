#Tabbar and NavBar

Using NavBar snippet, you are able to create a iphone like Navigationcontroller to go back to history and show the page name


##How to use

1) place the code into the panel from NavBar.js

## Code Snippet

    //create the header
    $("div[data-role=page]").each(function(i,e){
    	var $e = $(e);
    	$e
    		.prepend('<div data-role="header" data-position="fixed" data-id="header"> <a href="#" data-rel="back" data-transition="fade">Back</a> <h1>'+ $e.attr("id") +'</h1> </div> ')
    });
