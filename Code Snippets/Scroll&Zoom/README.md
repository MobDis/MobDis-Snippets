#Image Scroll & Zoom

Use this code snippet to include an image which can scroll and zoom if it is larger than its parent <div>. 

##How to use:

###Include the following function at the top of your code snippet depending on your mobdis app version.

####MobDis v2.6:

```javascript
 $(document).ready(function(){
	$.getScript('jQMBuilder.js',function(){
		$.getScript('jquery-easing.js',function(){
			$.getScript('uscrollview.js',function(){
				$.getScript('vscrollview.js',function(){
					$.getScript('jgestures.min.js',function(){
						loadStuff();
					});
				});
			});
		});
	});
 });
```

####MobDis v3.0 onwards:

```javascript
 $(document).ready(function(){
					$.getScript('jgestures.min.js',function(){
						loadStuff();
					});
	 });
```


###Fill in the following variable values in the imageScroll.js snippet

(1) _**divName**_ : The id of the img tag containing your image

(2) _**scrollDir**_ : the direction of your scroll,
						- "x": for horizontal scroll only
						- "y": for vertical scroll only
						- "xy": for both horizontal & vertical scroll

(3) _**imgHeightConstant**_ : the height in pixels of the <div> within which you would like your image to scroll.

(4) _**imgWidthConstant**_ : the width in pixels of the <div> within which you would like your image to scroll.

```javascript
/* Fill in the following values*/
var divName = "scrollImage";
var scrollDir = 'xy';
var imgHeightConstant = 320;
var imgWidthConstant = 320;
/* *********************** */
```

##Code Snippet:
```javascript
/**
 * @author xx
 */

/* Fill in the following values*/
var divName = "scrollImage";
var scrollDir = 'xy';
var imgHeightConstant = 320;
var imgWidthConstant = 320;
/* *********************** */

var myscrollview;
var specialZoom=1;
var jgestures;
var originalW, originalH;
var lastX,lastY;
var imgDiv = "#"+divName;
var scrollSelector = "[data-scroll='"+scrollDir+"']";
var parentDiv;

function loadStuff(){
 	
	var page = document.getElementById(divName);
	parentDiv = page.parentNode;
	
	
	
				if(navigator.userAgent.indexOf('iPhone')<0){
					var img = document.createElement('img');
					img.src = 'zoomIn.png';
					img.id = 'mapZoomIn';
					
					page.parentNode.appendChild(img);$(img).css('top','0px');
					$(img).css('position','absolute');
					$(img).css('left','0px');
					$(img).css('width', '50px');
					$(img).css('height', '50px');
					$(img).css('z-index','100');
					
					var img1 = document.createElement('img');
					img1.src = 'zoomOut.png';
					img1.id = 'mapZoomOut';
					page.parentNode.appendChild(img1);
					$(img1).css('top','0px');
					$(img1).css('position','absolute');
					$(img1).css('left','70px');
					$(img1).css('width', '50px');
					$(img1).css('height', '50px');
					$(img1).css('z-index','100');
				}
				
				var scrollView = document.createElement('div');
				scrollView.setAttribute('data-scroll', scrollDir);
				$(scrollView).css('background-color', 'white');
				var innerDiv = document.createElement('div');
				innerDiv.className = 'scroll-inner';
				$(innerDiv).css('background-color', 'black');
				$(innerDiv).css('width', imgWidthConstant+'px');
				$(innerDiv).css('height',imgHeightConstant + 'px');
				$(scrollView).css('width', imgWidthConstant+'px');
				$(scrollView).css('height', imgWidthConstant+ 'px');
				
			
				$(page).css('width', imgWidthConstant+'px');
				$(page).css('height', imgHeightConstant+'px');
				innerDiv.appendChild(page);
				scrollView.appendChild(innerDiv);
				(parentDiv).appendChild(scrollView);
				$('#area_Punggolmap').css('background-color','white');
				
				$('#mapZoomIn').bind('tap', function(a){
					zoomInMap();
				});
				
				$('#mapZoomOut').bind('tap', function(a){
					zoomOutMap();
				});
				
				$(page).bind('dblclick', function(){
				
					specialZoom = specialZoom + 1;
					this.style.zoom = specialZoom;
					var newH = 1200 * specialZoom;
					var newW = 1692 * specialZoom;
					$(this.parentNode).css('width', newW + 'px');
					$(this.parentNode).css('height', newH + 'px');
					setTimeout(function(){
					
						$(scrollSelector, page.parentNode).each(function(){
						
							var $this = $(this);
							if ($this.hasClass("ui-scrolllistview")) 
								$this.scrolllistview();
							else {
								var st = $this.jqmData("scroll") + "";
								var paging = st && st.search(/^[xy]p$/) != -1;
								var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
								
								var opts = {};
								if (dir) 
									opts.direction = st;
								//if (paging) 
								opts.pagingEnabled = false;
								
								var method = $this.jqmData("scroll-method");
								if (method) 
									opts.scrollMethod = method;
								
								$this.scrollview(opts);
								var temp = specialZoom - 1;
								
								var nx = (lastX / temp) * specialZoom;
								var ny = (lastY / temp) * specialZoom;
								myscrollview._setScrollPosition(nx, ny);
								
								
							}
						});
						
						
					}, 500);
					
					
				});
				
				setTimeout(function(){
				
					$(scrollSelector, parentDiv).each(function(){
					
						originalW = parseInt($(imgDiv).css('width'));
						originalH = parseInt($(imgDiv).css('height'));
						var top = (imgHeightConstant - originalH) / 2;
						$("[data-scroll='xy']", '#'+divName).css('top', top + 'px');
						$('.scroll-inner', '#'+divName).css('width', $(imgDiv).css('width'));
						$('.scroll-inner', '#'+divName).css('height', $(imgDiv).css('height'));
						
						var $this = $(this);
						if ($this.hasClass("ui-scrolllistview")) 
							$this.scrolllistview();
						else {
							var st = $this.jqmData("scroll") + "";
							var paging = st && st.search(/^[xy]p$/) != -1;
							var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
							
							var opts = {};
							if (dir) 
								opts.direction = st;
							//if (paging) 
							opts.pagingEnabled = true;
							
							var method = $this.jqmData("scroll-method");
							if (method) 
								opts.scrollMethod = method;
							
							$this.scrollview(opts);
							myscrollview._setScrollPosition(-10, -10);
							myscrollview._setScrollPosition(0, 0);
							
						}
					});
					
					
					
				}, 500);
				
				setTimeout('loadEventLister();', 2000);
	
 }
 
 function loadEventLister(){

$(imgDiv).bind('pinchopen',function(){
		if(specialZoom>=8){
			return;
		}
  		
		specialZoom = specialZoom +2;
		
		this.style.zoom = specialZoom;
		
		var newH = originalH * specialZoom;
		var newW = originalW * specialZoom;
		$(this.parentNode).css('width',newW+'px');
		$(this.parentNode).css('height',newH+'px');
	
	if(newH>=imgHeightConstant){
			$(this.parentNode.parentNode).css('top','0px');
		}
		else{
			var top = (imgHeightConstant-newH)/2;
			$(this.parentNode.parentNode).css('top',top+'px');
			
		}

		setTimeout(function(){
        
            $(scrollSelector,'#'+divName).each(function(){
            
               var $this = $(this);
                if ($this.hasClass("ui-scrolllistview")) 
                    $this.scrolllistview();
                else {
                    var st = $this.jqmData("scroll") + "";
                    var paging = st && st.search(/^[xy]p$/) != -1;
                    var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
                    
                    var opts = {};
                    if (dir) 
                        opts.direction = st;
                    //if (paging) 
                    opts.pagingEnabled = false;
                    
                    var method = $this.jqmData("scroll-method");
                    if (method) 
                        opts.scrollMethod = method;
                    
                    $this.scrollview(opts);
					var temp = specialZoom-2;
					
					var nx = (lastX/temp)*specialZoom;
					var ny = (lastY/temp)*specialZoom;
					//myscrollview._setScrollPosition(nx,ny);
					console.log('set scrolling to x:'+nx+' y:'+ny);
                }
            });
			
			
        }, 500);
	
	});
	$(imgDiv).bind('pinchclose',function(){
		
  		if(specialZoom<=1){return;}
		specialZoom = specialZoom - 2;
	
		this.style.zoom = specialZoom;
		var newH = originalH * specialZoom;
		var newW = originalW * specialZoom;
		$(this.parentNode).css('width',newW+'px');
	$(this.parentNode).css('height',newH+'px');

if(newH>=imgHeightConstant){
			$(this.parentNode.parentNode).css('top','0px');
			$(this.parentNode.parentNode).css('left','0px ! important');
		}
		else{
			var top = (imgHeightConstant-newH)/2;
			$(this.parentNode.parentNode).css('top',top+'px');
			$(this.parentNode.parentNode).css('left','0px ! important');
			
		}

		setTimeout(function(){
        
            $(scrollSelector, '#'+divName).each(function(){
            
               var $this = $(this);
                if ($this.hasClass("ui-scrolllistview")) 
                    $this.scrolllistview();
                else {
                    var st = $this.jqmData("scroll") + "";
                    var paging = st && st.search(/^[xy]p$/) != -1;
                    var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
                    
                    var opts = {};
                    if (dir) 
                        opts.direction = st;
                    //if (paging) 
                    opts.pagingEnabled = false;
                    
                    var method = $this.jqmData("scroll-method");
                    if (method) 
                        opts.scrollMethod = method;
                    
                    $this.scrollview(opts);
					var temp = specialZoom+2;
					
					var nx = (lastX/temp)*specialZoom;
					var ny = (lastY/temp)*specialZoom;
				//	myscrollview._setScrollPosition(nx,ny);
					console.log('set scrolling to x:'+nx+' y:'+ny);
                }
            });
			
			
        }, 500);
		
	
	});

	
	
	
}


function zoomInMap(){
	
		var mapImg = document.getElementById(divName);
		if(specialZoom>=8){
			return;
		}
  		
		specialZoom = specialZoom +2;
		
		mapImg.style.zoom = specialZoom;
		
		var newH = originalH * specialZoom;
		var newW = originalW * specialZoom;
		$(mapImg.parentNode).css('width',newW+'px');
		$(mapImg.parentNode).css('height',newH+'px');
		console.log('scroll inner: '+$(mapImg.parentNode).css('width'));
		console.log('scroll inner: '+$(mapImg.parentNode).css('height'));
		if(newH>=imgHeightConstant){
			$(mapImg.parentNode.parentNode).css('top','0px');
		}
		else{
			var top = (imgHeightConstant-newH)/2;
			$(mapImg.parentNode.parentNode).css('top',top+'px');
			
		}
		setTimeout(function(){
        
            $(scrollSelector, '#'+divName).each(function(){
            
               var $this = $(this);
                if ($this.hasClass("ui-scrolllistview")) 
                    $this.scrolllistview();
                else {
                    var st = $this.jqmData("scroll") + "";
                    var paging = st && st.search(/^[xy]p$/) != -1;
                    var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
                    
                    var opts = {};
                    if (dir) 
                        opts.direction = st;
                    //if (paging) 
                    opts.pagingEnabled = false;
                    
                    var method = $this.jqmData("scroll-method");
                    if (method) 
                        opts.scrollMethod = method;
                    
                    $this.scrollview(opts);
					var temp = specialZoom-2;
					
					var nx = (lastX/temp)*specialZoom;
					var ny = (lastY/temp)*specialZoom;
					myscrollview._setScrollPosition(nx,ny);
					console.log('set scrolling to x:'+nx+' y:'+ny);
                }
            });
			
			
        }, 500);
	
	
	
}

function zoomOutMap(){
	
		var mapImg = document.getElementById(divName);
		
  		if(specialZoom<=1){return;}
		specialZoom = specialZoom - 2;
	
		mapImg.style.zoom = specialZoom;
		var newH = originalH * specialZoom;
		var newW = originalW * specialZoom;
		$(mapImg.parentNode).css('width',newW+'px');
		$(mapImg.parentNode).css('height',newH+'px');
		if(newH>=imgHeightConstant){
			$(mapImg.parentNode.parentNode).css('top','0px');
			$(mapImg.parentNode.parentNode).css('left','0px ! important');
		}
		else{
			var top = (imgHeightConstant-newH)/2;
			$(mapImg.parentNode.parentNode).css('top',top+'px');
			$(mapImg.parentNode.parentNode).css('left','0px ! important');
			
		}
		setTimeout(function(){
        
            $(scrollSelector, '#'+divName).each(function(){
            
               var $this = $(this);
                if ($this.hasClass("ui-scrolllistview")) 
                    $this.scrolllistview();
                else {
                    var st = $this.jqmData("scroll") + "";
                    var paging = st && st.search(/^[xy]p$/) != -1;
                    var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
                    
                    var opts = {};
                    if (dir) 
                        opts.direction = st;
                    //if (paging) 
                    opts.pagingEnabled = false;
                    
                    var method = $this.jqmData("scroll-method");
                    if (method) 
                        opts.scrollMethod = method;
                    
                    $this.scrollview(opts);
					var temp = specialZoom+2;
					
					var nx = (lastX/temp)*specialZoom;
					var ny = (lastY/temp)*specialZoom;
					
					if (specialZoom == 1) {
						myscrollview._setScrollPosition(0, 0);
						
					}
					else {
						myscrollview._setScrollPosition(nx, ny);
					}
					console.log('set scrolling to x:'+nx+' y:'+ny);
                }
            });
			
			
        }, 500);
	
	
}

```