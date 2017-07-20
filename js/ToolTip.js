//弹出框组件
(function($,doucument){
	"use strict";
	var NAME = "ToolTip",
	DEFAULTS = {
		showDirection:"top",
		css:{
			contentWidth:300,
			contentHeight:160,
			titleWidth: 300,
			titleHeight: 40,
			arrowWidht:30,
			titleBgColor:"rgba(0,0,0,0.5)",
			titleFontColor:"rgba(256,256,256,1)",
			contentFontColor:"rgba(256,256,256,1)",
			contentBgColor:"rgba(0,0,0,0.2)",
			arrowBgColor:"rgba(0,0,0,0.2)",
			boderRadius:5,
		},
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
    	
    };
	
	var idIncrementer = 0;
	
	var ToolTip = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	ToolTip.DEFAULTS = DEFAULTS;
    ToolTip.NAME     = NAME;
    
    //初始化
    ToolTip.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
            //鼠标移入、移出的事件响应
            $root.on("mouseenter", function () {
                console.log("test mouseenter");
            }).on("mouseleave", function () {
                console.log("test mouseleave");
            });
            
            CreateToolTipDiv(that);
            
	}
    
    function CreateToolTipDiv(that){
    	var titleDiv = CreateToolTipTitleDiv(that);
    	var contentDiv = CreateToolTipContentDiv(that);
    	var arrowDiv;
    	if(that.options.showDirection == "top"){
    		arrowDiv = CreateToolTipArrowUpDiv(that);
    	}
    	else if(that.options.showDirection == "bottom"){
    		arrowDiv = CreateToolTipArrowDownDiv(that);
    	}
    	else if(that.options.showDirection == "left"){
    		arrowDiv = CreateToolTipArrowLeftDiv(that);
    	}
    	else if(that.options.showDirection == "right"){
    		arrowDiv = CreateToolTipArrowRightDiv(that);
    	}
    	
    	titleDiv.appendTo(contentDiv);
    	arrowDiv.appendTo(contentDiv);
    	
    	contentDiv.appendTo("body");
    }
    
    
    function CreateToolTipTitleDiv(that){
    	var div = $("<div>");
    	var titleWidth = that.options.css.titleWidth,
    		titleHeight = that.options.css.titleHeight,
    		titleBg = that.options.css.titleBgColor,
    		titleFontColor = that.options.css.titleFontColor,
    		boderRadius = that.options.css.boderRadius;
    	
    	div.css({
    		"position":"absolute",
    		"top":-titleHeight+"px",
    		"left":"0"+"px",
    		"width":titleWidth+"px",
    		"height":titleHeight+"px",
    		"background-color":titleBg,
    		"border-top-left-radius":boderRadius+"px",
    		"border-top-right-radius":boderRadius+"px",
    		"color":titleFontColor,
    		"line-height": titleHeight+"px"
    	});
    	div.text(that.options.title);
    	return div;
    }
    
    function CreateToolTipContentDiv(that){
    	var div = $("<div>");
    	var contentWidth = that.options.css.contentWidth,
    		contentHeight = that.options.css.contentHeight,
    		contentBg = that.options.css.contentBgColor,
    		contentFontColor = that.options.css.contentFontColor,
    		boderRadius = that.options.css.boderRadius;
    	var top = 200;
    	var left = 200;
    	
    	
    	div.css({
    		"position":"absolute",
    		"top":top+"px",
    		"left":left+"px",
    		"width":contentWidth+"px",
    		"height":contentHeight+"px",
    		"background-color":contentBg,
    		"border-bottom-left-radius":boderRadius+"px",
    		"border-bottom-right-radius":boderRadius+"px",
    		"color":contentFontColor
    	});
    	div.text(that.options.content);
    	return div;
    }
    
    function CreateToolTipArrowUpDiv(that){
    	var div = $("<div>");
    	var arrowWidth = that.options.css.arrowWidht,
    		contentWidth = that.options.css.contentWidth,
    		contentHeight = that.options.css.contentHeight,
    		titleHeight = that.options.css.titleHeight,
    		arrowBgColor = that.options.css.arrowBgColor;
    		
    	var left = contentWidth/2,
    		top =  -titleHeight-arrowWidth;
    	
    	div.css({
    		"position":"absolute",
    		"left":left+"px",
    		"top":top+"px",
    		"width":"0px",
    		"height":"0px",
    		"border-right":arrowWidth+"px "+"solid "+"transparent",
    		"border-bottom":arrowWidth+"px "+"solid "+arrowBgColor,
    		"border-left":arrowWidth+"px "+"solid "+"transparent"
    	});
    	return div;
    }
    
    function CreateToolTipArrowDownDiv(that){
    	var div = $("<div>");
    	var arrowWidth = that.options.css.arrowWidht,
    		contentWidth = that.options.css.contentWidth,
    		contentHeight = that.options.css.contentHeight,
    		titleHeight = that.options.css.titleHeight,
    		arrowBgColor = that.options.css.arrowBgColor;
    	var left = contentWidth/2,
    		top =  contentHeight;
    	div.css({
    		"position":"absolute",
    		"left":left+"px",
    		"top":top+"px",
    		"width":"0px",
    		"height":"0px",
    		"border-top":arrowWidth+"px "+"solid "+ arrowBgColor,
    		"border-right":arrowWidth+"px "+"solid "+"transparent",
    		"border-left":arrowWidth+"px "+"solid "+"transparent"
    	});
    	return div;
    }
    
    function CreateToolTipArrowLeftDiv(that){
    	var div = $("<div>");
    	var arrowWidth = that.options.css.arrowWidht,
    		contentWidth = that.options.css.contentWidth,
    		contentHeight = that.options.css.contentHeight,
    		titleHeight = that.options.css.titleHeight,
    		arrowBgColor = that.options.css.arrowBgColor;
    	var left = -arrowWidth,
    		top =  contentHeight/2 - arrowWidth/2*3;
    	
    	div.css({
    		"position":"absolute",
    		"left":left+"px",
    		"top":top+"px",
    		"width":"0px",
    		"height":"0px",
    		"border-right":arrowWidth+"px "+"solid "+arrowBgColor,
    		"border-bottom":arrowWidth+"px "+"solid "+"transparent",
    		"border-top":arrowWidth+"px "+"solid "+"transparent"
    	});
    	return div;
    }
    
    function CreateToolTipArrowRightDiv(that){
    	var div = $("<div>");
    	var arrowWidth = that.options.css.arrowWidht,
    		contentWidth = that.options.css.contentWidth,
    		contentHeight = that.options.css.contentHeight,
    		titleHeight = that.options.css.titleHeight,
    		arrowBgColor = that.options.css.arrowBgColor;
    	var left = contentWidth,
    		top =  contentHeight/2 - arrowWidth/2*3;
    	div.css({
    		"position":"absolute",
    		"left":left+"px",
    		"top":top+"px",
    		"width":"0px",
    		"height":"0px",
    		"border-left":arrowWidth+"px "+"solid "+arrowBgColor,
    		"border-bottom":arrowWidth+"px "+"solid "+"transparent",
    		"border-top":arrowWidth+"px "+"solid "+"transparent",
    	});
    	return div;
    }
    
    //入口方法
     $.fn.toolTip = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.ToolTip')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.ToolTip', (data = new ToolTip(this, options)))
        })
    }
    
    //构造
    $.fn.toolTip.Constructor = ToolTip;
}(jQuery, document))

