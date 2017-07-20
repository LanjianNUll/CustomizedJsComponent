//分页组件    
//第一种形式：中间有页码的   如   <<  1  2  3  4  >>
//第二种形式：只有上页下页的   如  <<    >>
(function($,doucument){
	'use strict';
	var NAME = "PAGECOMPONENT",
	DEFAULTS = {
		pageItemClick:function(pageNum){
			//0  表示上一页   -1 表示下一页
				console.log("当前点击页为： "+pageNum);
			},
		css:{
			width: 600,
			height:60,
			circleWidth:60,
			circleHeight:60,
			radius:30,
			backgroundColor:"rgba(0,0,0,0)",
			boder:"solid",
			borderColor:"#000000",
			borderWidth:1,
			mouseOverColor:"rgba(0,0,0,0)",
			mouseOverBoderColor:"#03feef",
			mouseOverFontColor:"#03feef",
			fontColor:"#FFFACD",
			fontSize: 20,
			gapWidth:20
		},
		PageNum:0,
		MaxPageNum:99,
		PrePageContent:"<<",
		LastPageContent:">>",
		CurrentPageNum:1,
		parentId:"pageContainer"
   	};
   	
	var idIncrementer = 0;
	var circleArray = [];
	
	var PageComponent = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        that.init();
	}
	
	PageComponent.DEFAULTS = DEFAULTS;
    PageComponent.NAME     = NAME;
    
    //初始化
    PageComponent.prototype.init = function(){
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
        var cricleNum =  that.options.PageNum;
        if(that.options.PageNum>that.options.MaxPageNum){
        	cricleNum = that.options.MaxPageNum;
        }
        //0  表示上一页   -1 表示下一页
        var prePageItem = CreateCircle(that,0,that.options.PrePageContent);
        var lastPageItem = CreateCircle(that,-1,that.options.LastPageContent);
        
        prePageItem.appendTo(that.$);
        for(var i = 1; i < cricleNum+1; i++){
        	var pageItem = CreateCircle(that,i);
        	circleArray.push(pageItem);
        	pageItem.appendTo(that.$);
        }
        lastPageItem.appendTo(that.$);
        if(cricleNum !=0){
        	SetCurrentPageNum(that,that.options.CurrentPageNum);
        }
	}
    
    function CreateCircle(that,i,textContent){
    	 var circleWidth = that.options.css.circleWidth,
    	 	circleHeight = that.options.css.circleHeight,
         	radius = that.options.css.radius,
         	bgColor = that.options.css.backgroundColor,
         	boder = that.options.css.boder,
         	borderColor = that.options.css.borderColor,
        	borderWidth = that.options.css.borderWidth,
        	mouseOverBoderColor = that.options.css.mouseOverBoderColor,
        	mouseOverColor = that.options.css.mouseOverColor,
        	fontColor = that.options.css.fontColor,
        	mouseOverFontColor = that.options.css.mouseOverFontColor,
        	fontSize = that.options.css.fontSize,
        	gapWidth = that.options.css.gapWidth;
    	var divNode = $("<div>");
    	divNode.css({
    		"display": "inline-block",
			"text-align": "center",
			"width":circleWidth + "px",
			"height":circleHeight + "px",
			"line-height": circleHeight + "px",
			"border-radius":radius + "px",
			"border":boder,
			"border-color": borderColor,
			"border-width": borderWidth + "px",
			"background-color": bgColor,
			"cursor":"pointer",
			"color":fontColor,
			"font-size":fontSize,
			"margin-left":gapWidth+"px"
    	});
    	
    	//鼠标移动到选项上
		divNode.mouseover(function(e){
			$(e.target).css({"background-color": mouseOverColor,
				"color":mouseOverFontColor,
				"border-color": mouseOverBoderColor
			});
		});
		
		divNode.mouseout(function(e){
			if($(e.target).text() != (that.options.CurrentPageNum+"")){
				$(e.target).css({"background-color":bgColor,
				"color":fontColor,
				"border-color": borderColor
			});
			}
		});
		
		divNode.click(function(e){
			var pageIndex = parseInt($(e.target).attr("pageIndex"));
			var maxPageNum = that.options.MaxPageNum;
			if(that.options.PageNum != 0){
				if(pageIndex==0){
					//点击的上一页操作
					if(that.options.CurrentPageNum>1){
						that.options.CurrentPageNum = that.options.CurrentPageNum-1;
						SetCurrentPageNum(that,that.options.CurrentPageNum);
						that.options.pageItemClick(that.options.CurrentPageNum)
					}else{
						that.options.pageItemClick(1)
					}
		    	}else if(pageIndex==-1){
		    		//点击的下一页操作
		    		if(that.options.CurrentPageNum < that.options.PageNum){
						that.options.CurrentPageNum = that.options.CurrentPageNum+1;
						SetCurrentPageNum(that,that.options.CurrentPageNum);
						that.options.pageItemClick(that.options.CurrentPageNum)
					}else{
						that.options.pageItemClick(that.options.CurrentPageNum)
					}
		    	}else{
		    		that.options.CurrentPageNum = pageIndex;
					SetCurrentPageNum(that,that.options.CurrentPageNum);
					that.options.pageItemClick(that.options.CurrentPageNum)
		    	}
			}else{
				//0  表示上一页   -1 表示下一页
				that.options.pageItemClick(pageIndex);
			}
			
		});
    	var textstr = textContent || i;
    	if(i==0){
    		divNode.attr("pageIndex",0);
    		divNode.text(textContent);
    		divNode.css({"margin-left":"0px"});
    	}else if(i==-1){
    		divNode.attr("pageIndex",-1);
    		divNode.text(textContent);
    	}else{
    		divNode.text(i);
    		divNode.attr("pageIndex",i);
    	}
    	return divNode;
    }
    
    function SetCurrentPageNum(that,currentIndex)
    {
    	var bgColor = that.options.css.backgroundColor,
         	borderColor = that.options.css.borderColor,
        	mouseOverColor = that.options.css.mouseOverColor,
        	fontColor = that.options.css.fontColor,
        	mouseOverFontColor = that.options.css.mouseOverFontColor,
    		mouseOverBoderColor = that.options.css.mouseOverBoderColor;
    		
    	for(var i = 0;i<circleArray.length;i++){
    		circleArray[i].css({
    		"border-color": borderColor,
			"background-color": bgColor,
			"color":fontColor
    		});
    	}
    	
  		console.log("当前的页数："+currentIndex);
    	circleArray[currentIndex-1].css({
			"background-color": bgColor,
			"color":mouseOverFontColor,
			"border-color": mouseOverBoderColor
    	});
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
