#Image Scroll & Zoom

Use this code snippet to include an image which can scroll and zoom if it is larger than its parent <div>. 

##Demo:
You can view a demo of this widget by opening imageScroll.html on your browser.

##How to use:

###Include the following script tags in your <head> tag:

<script type="text/javascript" src="jQMBuilder.js"></script>
<script type="text/javascript" src="jquery-easing.js"></script>
<script type="text/javascript" src="uscrollview.js"></script>
<script type="text/javascript" src="vscrollview.js"></script>
<script type="text/javascript" src="imageScroll.js"></script>

###

In imageScroll.js, fill in the following variables:
- divName : The id of the img tag containing your image
- scrollDir: the direction of your scroll,
				- "x": for horizontal scroll only
				- "y": for vertical scroll only
				- "xy": for both horizontal & vertical scroll
- imgHeightConstant: the height in pixels of the <div> within which you would like your image to scroll.
- imgWidthConstant: the width in pixels of the <div> within which you would like your image to scroll.


##Things to note
If you are not already importing jQuery in your project, please include it as a script
tag in your header.