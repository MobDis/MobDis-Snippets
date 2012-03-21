#Gallery

##Object Structure

```html
<div class="drsElement">
	<div data-scroll="x">
		<div class="gallery-inner">
			<img class="gallery-cell">
			<img class="gallery-cell">
			<img class="gallery-cell">
			<img class="gallery-cell">
			<img class="gallery-cell">
		</div>
	</div>	
</div>
```

### 'data-scroll' Div
This size of this div determines the boundary of the gallery object.

### 'gallery-inner' Div
The size of this div is the size of the content you would like to display within the gallery. This div
could be bigger in size than the 'data-scroll' div. This is the div that will scroll up/down to view the
extra content.

### 'gallery-cell' Div
This is a html <img> tag which contains each image in the gallery. There will be as many 'galler-cell' tags in the gallery as images inside it.

##Events
Following are some of the functions which you can declare in your custom javascript and use to perform any functions upon the occurence of the event.

###didScroll(scrollObjectId)
This event is called when the gallery object is scrolled up/down/left/right.  The parameter of the scrollobject is the if of the drsElement div. You can access all child objects of the gallery using this div.

##Actions
You can call these functions with the appropriate parameters to perform the corresponding actions. For example, scrollTo(x,y) gives a specific location in space to which the object is expected to scroll to.

###scrollTo (id,x, y)
This function can be used to programmatically move the galery by scrolling it to a particular location. x,y are the horizontal and vertical coordinates respectively to which the scrollview will scroll.

###scrollRight(id, byNumOfCells)
This function slightly more specific. It scrolls the gallery to the right by the given number of cells. The underlying assumption being that the cells are approximately the size of the 'data-scroll' div.

###scrollLeft(id, byNumOfCells)
It scrolls the gallery to the left by the given number of cells. The underlying assumption being that the cells are approximately the size of the 'data-scroll' div.





