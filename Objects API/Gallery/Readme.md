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

###didClickCell(scrollObjectId, cellId)
This event is called when a particular cell in the gallery object is clicked by the user.

##Actions
You can call these functions with the appropriate parameters to perform the corresponding actions. For example, scrollTo(x,y) gives a specific location in space to which the object is expected to scroll to.

###scrollGalleryTo (scrollObjectId,x, y)
This function can be used to programmatically move the galery by scrolling it to a particular location. x,y are the horizontal and vertical coordinates respectively to which the scrollview will scroll.

###moveRight(scrollObjectId)
This function moves the scrollView to the right by one cell.

###moveLeft(scrollObjectId)
This function moves the scrollView to the left by one cell.

###scrollRight(scrollObjectId, byNumOfCells)
This function slightly more specific. It scrolls the gallery to the right by the given number of cells. The underlying assumption being that the cells are approximately the size of the 'data-scroll' div.

###scrollLeft(scrollObjectId, byNumOfCells)
It scrolls the gallery to the left by the given number of cells. The underlying assumption being that the cells are approximately the size of the 'data-scroll' div.

###randomizeGallery(scrollObjectId)
It scrolls the given scrollview to a random image in the scrollView.

###getLayout(scrollObjectId)
This function returns the current layout of the gallery. It returns 'grid' if the gallery is in the grid view and 'none' if the gallery is in its normal single view layout.

###setNumberOfImages(scrollObjectId,imageNumber)
This function sets the number of images for the gallery object. If the 'imageNumber' is greater than the current number of images, more cells are added. If it is lower, the images are deleted from the end.

###reloadGallery(scrollObjectId)
This function can be called if for some reason, the scrollView needs to be reloaded. CSS display property changes can sometime freeze the gallery's scrollView. In this case, the gallery can be easily reloaded by calling this function with the galleryObjectId.
