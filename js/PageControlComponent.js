(function($,doucument){
	
	var NAME = "PAGECOMPONENT",
	DEFAULTS = {
		CSS:{
			width: 400,
			height:60,
			backgroundColor:"#FEEFFF"
		},
		PageNum:5,
		
		parentId:"pageContainer"
    };
	
	var idIncrementer = 0;
	
	var PageComponent = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	PageComponent.DEFAULTS = DEFAULTS;
    PageComponent.NAME     = NAME;
    
    //初始化
    PageComponent.prototype.init = function(){
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
        var parent = $("<div>");
        var left = that.options.CSS.left || 0,
         	top = that.options.CSS.top || 0,
         	width = that.options.CSS.width,
         	height = that.options.CSS.height;
         	bgColor = that.options.CSS.backgroundColor;
         	
        parent.css({"background-color":bgColor,
					"position":"relative",
					"display":"block",
			  		"left":left + "px",
			  		"top" : top + "px",
			  		"width": width + "px",
			  		"height":height + "px",
		});
		parent.appendTo(that.$);
		
		var pageItem = $("div");
		var pageItemWidth = height*3/4,
			pageItemRadius = pageItemWidth/2;
			bgColor = "#ffffff",
			borderColor = "#0588f0",
			borderWidth = 2;
			
		pageItem.css({
			"position":"relative",
			"background-color":"#028293",
			"width":pageItemWidth + "px",
			"height":pageItemWidth + "px",
			"border-radius":pageItemRadius + "px",
			"border":"solid",
			"border-color":borderColor,
			"border-width":borderWidth+"px"
		});
		
		pageItem.appendTo(that.$);
	}
    
    //入口方法
     $.fn.pageComponent = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.pageComponent')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.pageComponent', (data = new PageComponent(this, options)))
        })
    }
    
    //构造
    $.fn.pageComponent.Constructor = PageComponent;
	
}(jQuery, document))
