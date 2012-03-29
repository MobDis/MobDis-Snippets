#3DModel

##Object Structure

```html
<div class="drsElement">
	<div class="threeDModel childDef">
		<img class="threeDImageHolder">
		<div id="threeDImageLoader"></div>
		<img id="image_01" class="dummyholder">
		                   .
		                   .
		                   .
		                   .
		                   .
		                   .
		                   .
		                   .
		                   .
		                   (x72 times)
		<img id="image_72" class="dummyholder">                   
	</div>	
</div>
```

### '.threeDModel' div
This is the enclosing div for the 3D Model object.

### ".threeDImageHolder" img
This html image object holds the current image that is displayed in the 3D model.

### "dummyholder" img
There a total of 72 image objects in the 3D model, allowing users to upload as many as 72 images for the 3D mode. These images are contained in the ".dummyholder" image divs.

##Events
Following are some of the functions which you can declare in your custom javascript and use to perform any functions upon the occurence of the event.

###didFullTurn(threeDModelObjectId)
This function is called when the a complete turn is executed either programmatically or manually by the user.

###didTurnRight(threeDModelObjectId)
This function is called when 3D model object is turned towards the right.

###didTurnLeft(threeDModelObjectId)
This function is called when 3D model object is turned towards the left.

###didSpinRight(threeDModelObjectId)
This function is called when 3D model object spins towards the right.

###didSpinLeft(threeDModelObjectId)
This function is called when 3D model object spins towards the left.

##Actions
You can call these functions with the appropriate parameters to perform the corresponding actions. For example, scrollTo(x,y) gives a specific location in space to which the object is expected to scroll to.
