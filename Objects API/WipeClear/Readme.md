#WipeClear

##Object Structure

```html
<div class="drsElement">
	<div class="swipeReveal childDef">
		<div class="swr-cell ">
			<div>
				<canvas></canvas>
			</div>
		</div>
	</div>	
</div>
```

### 'swr-cell' Div
In the MobDis builder, this cell contains the <img> for the wipeClear widget. On the published/preview site, this div contains the HTML5 <canvas> tag with the image drawn within 
for users to wipe it clear.

##Events
Following are some of the functions which you can declare in your custom javascript and use to perform any functions upon the occurence of the event.

###didLoadWipe(wipeClearObjectId)
This function is called when the widget finished loading the image onto the canvas.

###didStartWipe(wipeClearObjectId)
This function is called when the user starts a wipeClear stroke.

###didStopWipe(wipeClearObjectId)
This function is called when the user stops a wipeClear stroke.

###didCompleteWipe(wipeClearObjectId)
This function is called when the entire image has been wiped clear by the user.

##Actions
You can call these functions with the appropriate parameters to perform the corresponding actions. For example, scrollTo(x,y) gives a specific location in space to which the object is expected to scroll to.

###reloadWipeClear (wipeClearObjectId)
This function can be called to reload the wipeClear widget to wipe it again.

###randomStroke(wipeClearObjectId)
This function executes a random stroke in a random direction of the wipeClear object.

###drawStroke(wipeClearObjectId, x1,y1,x2,y2)
This function can be used to programmatically draw a stroke over the wipeClear image from coordinates (x1,y1) to (x2,y2)

###reloadWipeClear(wipeClearObjectId)
This function can be called if you wish to reload the wipeClear object and wipe it clean another time.

###reloadWipeClearWithImage(wipeClearObjectId, imgSrc)
This function can be called if you wish to reload the wipeClear object with a different image from that of the original and wipe it clean another time. Please note that you need to endure that the image link is valid in order for this function to succeed.

