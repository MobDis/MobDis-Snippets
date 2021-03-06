#Tabbar and NavBar

Using Tabbar and NavBar snippet, you are able to insert a combination of both Tab Bar and Nav Bar on the same page.


##How to use

1) Place <b>tabNavBar.css</b> in custom CSS panel and <b>tabNavbar.js</b> in custom JS Panel

2) Insert and edit the following code in <b>tabNavbar.js</b> to add <b>Tab</b>

    .append("<li><a data-first-page='#__pageid__' data-tab='__tabname__'>__tabname_shown__></a></li>") 

- **___pageid___** must be replace with the page id of the first tab. You can retrieve the page id by "Inspecting Element" with the web developer console.
- **__tabname__** An identifier name without any space between words 
- **__tabname_shown__** A name representation of the Tab

```
    //This section of the snippet will create the Nav Bar and the Tab Bar.
    $("div[data-role=page]").each(function(i,e){
        var $e = $(e);
        $e
            .prepend('<div data-role="header" data-position="fixed" data-id="header"> <a href="#" class="cus-back-button" data-transition="fade">Back</a> <h1>'+ $e.attr("id") +'</h1> </div> ')
            .append("<div class='page-footer' data-id='footer' data-role='footer' data-position='fixed' ><div class='tabnavbar' data-role='navbar'><ul></ul></div></div>")
            .find("div[data-role=navbar] ul")

                /**** 
                * Insert the code here
                * .append("<li><a data-first-page='#__pageid__' data-tab='__tabname__'>__tabname_shown__></a></li>") 
                *
                *****/

                .append("<li><a data-first-page='#blue1' data-tab='blue'>Blue</a></li>")
                .append("<li><a data-first-page='#green1' data-tab='green'>Green</a></li>")
                .append("<li><a data-first-page='#red1' data-tab='red'>Red</a></li>")
    });
```
## tabNavbar.js


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
##Things to note
This snippet will allow you to create both tab bar and nav bar on the same page. If you only want to have either a tab bar or nav bar , please see other snippets.