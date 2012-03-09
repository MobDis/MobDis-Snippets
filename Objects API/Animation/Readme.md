#(class)

##Prev_Page 

Go to previous page of the history with animations.

####Arguments

+ animation (integer from 0 to 6 required)

 - 0 - Slide Left

 - 6 - Slide Right

 - 1 - Slide Up

 - 2 - Slide Down

 - 3 - Pop

 - 4 - Fade

 - 5 - Flip

####class method

 - start()

    start the previous page animation



####example code

    a = new Prev_Page(0);//for slide left
    a.start();

    b = new Prev_Page(6);//for slide right
    b.start();


##Show_page

Go to another page 

####Arguments

+ page name and id (string)

 String that consist of page name and id separated by '|'  
 Page name can be found from the children div of body  with `data-role= content` . The id of the div is page name and the data-id is the id.

 example    
 ```<body><div data-role="page" id="red3" data-id="18"></body>```

 page name should be the value of `id` attribute which is `red3` and the page id should be the value of  `data-id` which is `18`. Then join it together to become a string `"red3|18"` .



+ animation (integer from 0 to 6 required)

 - 0 - Slide Left

 - 6 - Slide Right

 - 1 - Slide Up

 - 2 - Slide Down

 - 3 - Pop

 - 4 - Fade

 - 5 - Flip

####class method

 - start()

    start the previous page animation

####example code

    b= new Show_Page("red3|18",0)
    b.start()

