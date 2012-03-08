#Tabbar and NavBar

Using Tabbar and NavBar snippet, you are able to create a iphone like tabbarview and Navigationcontroller that able to switch between tab and go back to history within the tab.


##How to use

1) place the code into the panel from tabNavBar.css and tabNavbar.js

2) place to edit

to add a tab

    .append("<li><a 
        data-first-page='#__pageid__' 
        data-tab='__tabname__'>
            __tabname_shown__
        </a></li>")

- **___pageid___** must be replae with the page id of the first page of the tab. You can find pageid from inspect element the div with data-role = "page" and paste in the id
- **__tabname__** must be replace with the name withoutspace
- **__tabname_shown__** must be replace with the name want to show in tabbar

## Code Snippet


    var Tab={};
    Tab.last;
    Tab.history={};
    Tab.currentTabHistory=function(){return this.history[this.current]};
    Tab.current="blue";
    Tab.change=false;
    Tab.lastHistoryOf=function(tab){
        return Tab.history[tab][Tab.history[tab].length-1];
    }
    
    //create the header and footer , replace or add the append <li>
    $("div[data-role=page]").each(function(i,e){
    	var $e = $(e);
    	$e
    		.prepend('<div data-role="header" data-position="fixed" data-id="header"> <a href="#" class="cus-back-button" data-transition="fade">Back</a> <h1>'+ $e.attr("id") +'</h1> </div> ')
    		.append("<div class='page-footer' data-id='footer' data-role='footer' data-position='fixed' ><div class='tabnavbar' data-role='navbar'><ul></ul></div></div>")
    		.find("div[data-role=navbar] ul")
    			/**__Tab__**
    			add 
    			.append("<li><a data-first-page='#__pageid__' data-tab='__tabname__'>__tabname_shown__></a></li>") 
    			below*/
    			.append("<li><a data-first-page='#blue1' data-tab='blue'>Blue</a></li>")
    			.append("<li><a data-first-page='#green1' data-tab='green'>Green</a></li>")
    			.append("<li><a data-first-page='#red1' data-tab='red'>Red</a></li>")
    });
    	
    $(function(){
    		//populate history with the first page
    		$("div[data-role=navbar]:first a").each(function(i,e){
    			Tab.history[$(e).attr("data-tab")]=[$(e).attr("data-first-page")];
    		});
    
    		
    		//add button active class to current tab base on Tab.current
    
    		$("div[data-role=navbar] a[data-tab="+ Tab.current +"]")
    			.addClass("ui-btn-active");
    		
    		
    		//navbar tab tap will change page
    		$("div.tabnavbar a").bind("tap", function(e){
    			var $this = $(this)
    			,		lastTab = Tab.current
    			
    			Tab.current = $this.attr("data-tab");
    			//if change of tab with same page , wont change page
    			if(Tab.lastHistoryOf(Tab.current) !== Tab.lastHistoryOf(lastTab)){
    				Tab.change=true;
    				$.mobile.changePage(Tab.lastHistoryOf(Tab.current),{hashChange:false, transition: "fade"});
    			}
    			//will update the active button of tab
    			$(".tabnavbar a")
    				.removeClass("ui-btn-active")
    				.filter("[data-tab="+Tab.current+"]")
    				.addClass("ui-btn-active");
    				
    		});
    		
    		$('div[data-role=page]')
    			//page show
    			.bind('pageshow', function(e,ui){
    				$("div[data-role=page]").each(function(){
    					$(this).attr("data-url","page_"+$(this).attr("data-id"));
    				});
    			})
    			//pagbeforeeshow
    			.bind('pagebeforeshow', function(e,ui){
    				if(Tab.change == false){
    					Tab.history[Tab.current].push("#"+$(this).attr("id"));
    				}else{
    					Tab.change=false;
    				}
    				if(Tab.currentTabHistory().length<=1){
    					$(".cus-back-button").hide();
    				}else{
    					$(".cus-back-button").show();
    				}
    				
    				
    			});
    		
    		//bind back button
    		$(".cus-back-button")
    			.hide()
    			.bind("tap",function(){
    			if(Tab.currentTabHistory().length>0){
    				if(Tab.currentTabHistory().length<=1){
    					$.mobile.changePage(Tab.currentTabHistory()[0]);
    				}else{
    					if(Tab.currentTabHistory().length<=2){
    						Tab.currentTabHistory().pop();
    						$.mobile.changePage(Tab.currentTabHistory()[0])
    					}else{
    						Tab.currentTabHistory().pop();
    						$.mobile.changePage(Tab.currentTabHistory().pop());
    					}
    				}
    				
    			}
    		});
    		
    });



css

    .page-footer{
    	z-index:16777271;
    }
