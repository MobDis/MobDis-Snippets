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