#(class)

##Prev_Page(animation)

Go to previous page of the history with animations.

####Arguments

+ animation (any string below)

    "slide", "slideright", "slideup", "slidedown", "pop", "fade", "flip"

####Class method

 - start()

    start the previous page animation



####Example code

    a = new Prev_Page(0);//for slide left
    a.start();

    b = new Prev_Page(6);//for slide right
    b.start();


##Show_page

Go to another page 

####Arguments( pageNameNId , animation )

+ page name and id (string)

 String that consist of page name and id separated by '|'  
 Page name can be found from the children div of body  with `data-role= content` . The id of the div is page name and the data-id is the id.

 example    
 ```<body><div data-role="page" id="red3" data-id="18"></body>```

 page name should be the value of `id` attribute which is `red3` and the page id should be the value of  `data-id` which is `18`. Then join it together to become a string `"red3|18"` .



+ animation (any string below)

    "slide", "slideright", "slideup", "slidedown", "pop", "fade", "flip"

####Class method

 - start()

    start the previous page animation

####Example code

    b= new Show_Page("red3|18",0)
    b.start()


##Loopback(event, target)
to repeat all the animations

####Arguments
- event (string)  
event of the loopbak

- target (string)  
target of the loopbak

####Class method

 - start()

    start the loopback.

####Example code

    a = new LoopBack("pageload", "page-id");
    a.start();

#Event

##tap

trigger when a complete touch event

####Example code

    $("#thediv").bind("tap",function(){})

##taphold

trigger when a complete touch event that continue after 1 second

####Example code

    $("#thediv").bind("taphold",function(){})

##swipe

Triggers when a horizontal drag of 30px or more

####Example code

    $("#thediv").bind("swipe",function(){})

##swipeleft

Triggers when a horizontal drag of 30px or more to left

####Example code

    $("#thediv").bind("swipeleft",function(){})

##swiperight

Triggers when a horizontal drag of 30px or more to the right

####Example code

    $("#thediv").bind("swiperight",function(){})
