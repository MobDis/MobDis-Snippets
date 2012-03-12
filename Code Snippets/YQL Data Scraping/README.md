#Data Scrapping with YQL

Using Yahoo Query Language (YQL), you are able to scrape data and display them in Mobdis sites through objects like the textbox. 

##How to use:
Add a textbox object. Paste the entire code snippet in the custom code panel.

Edit the snippet at the following places:

(1) _**URL of the scrapped site**_

(2) _**xpath of the element you want to scrape**_

(3) _**ID of the textbox object**_

```javascript
var yql = "http://query.yahooapis.com/v1/public/yql?q=",
		request = "select * from html where url=",
		urlRequest = "http://www.patschoolhouse.com/programmes/toddler/curriculum", // (1) URL of the scrapped site
		xpath = "//div[@id=\"content-area\"]/div/div/div[@class=\"content\"]", // (2) xpath of the element you want to scrape
		fullURL = yql + encodeURIComponent( request + '"'+urlRequest+'" and xpath=\''+ xpath+"'"),
		nodeID = '#text-1', // (3) FILL IN ID of the textbox
		pageID = '#'+$(nodeID).parent().parent(),
		ele = $(pageID + ' ' + nodeID +'_content div');
```

## YQL.js


```javascript
document.addEventListener("DOMContentLoaded" , function(){
  if(window.location.toString().match("builder")<=0){  // Check code is not executed in the builder

	var yql = "http://query.yahooapis.com/v1/public/yql?q=",
		request = "select * from html where url=",
		urlRequest = "http://www.patschoolhouse.com/programmes/toddler/curriculum", // (1) URL of the scrapped site
		xpath = "//div[@id=\"content-area\"]/div/div/div[@class=\"content\"]", // (2) xpath of the element you want to scrape
		fullURL = yql + encodeURIComponent( request + '"'+urlRequest+'" and xpath=\''+ xpath+"'"),
		nodeID = '#text-1', // (3) FILL IN ID of the textbox
		pageID = '#'+$(nodeID).parent().parent(),
		ele = $(pageID + ' ' + nodeID +'_content div');

	var init = function(){
		$.get(fullURL,function(data){
			$(data).find('.content').each(function() {
		        ele.html(this);
		    });

		ele.html(ele.html());
		var obj = ele.parent()[0];
		makeScroll(obj);
		})
	};
        
        /*Make the textBox scrollable*/
	function makeScroll(obj){
	    $(obj).attr('data-scroll', 'y');
	    $("[data-scroll='y']", obj.parentNode).each(function() {

	        var $this = $(this);
	        if ($this.hasClass("ui-scrolllistview")) $this.scrolllistview();
	        else {
	            var st = $this.jqmData("scroll") + "";
	            var paging = st && st.search(/^[xy]p$/) != -1;
	            var dir = st && st.search(/^[xy]/) != -1 ? st.charAt(0) : null;
	            var opts = {};
	            if (dir) opts.direction = st;
	            //if (paging)
	            opts.pagingEnabled = false;
	            var method = $this.jqmData("scroll-method");
	            if (method) opts.scrollMethod = method;
	            $this.scrollview(opts);
	        }
	    });
	}

	init();

  }
})
```

##Things to note

Test out your YQL query at [YQL Console](http://developer.yahoo.com/yql/console/#h=select%20*%20from%20html%20where%20url%3D%22http%3A//finance.yahoo.com/q%3Fs%3Dyhoo%22%20and%20xpath%3D%27//div%5B@id%3D%22yfi_headlines%22%5D/div%5B2%5D/ul/li/a%27) to ensure your query is correct.