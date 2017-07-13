(function($,doucument){
	
	var NAME = "PAGECOMPONENT",
	DEFAULTS = {
		css:{
			width: 400,
			height:60,
			circleWidth:60,
			radius:30,
			backgroundColor:"#FEEFFF",
			boder:"solid",
			borderColor:"#000000",
			borderWidth:1,
			mouseOverColor:"#4876FF",
			mouseOverFontColor:"#ffffff",
			fontColor:"#123456",
			fontSize: 20
		},
		PageNum:5,
		CurrentPageNum:1,
		parentId:"pageContainer"
   	};
   
	var idIncrementer = 0;
	var circleArray = [];
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
            
        var cricleNum =  that.options.PageNum;
        var prePageItem = CreateCircle(that,0,"<<");
        var lastPageItem = CreateCircle(that,0,">>");
        
        prePageItem.appendTo(that.$);
        
        for(var i = 1; i < cricleNum+1; i++){
        	var pageItem = CreateCircle(that,i);
        	circleArray.push(pageItem);
        	pageItem.appendTo(that.$);
        }
        lastPageItem.appendTo(that.$);
	}
    
    function CreateCircle(that,i,textContent){
    	 var circleWidth = that.options.css.circleWidth,
         	radius = that.options.css.radius;
         	bgColor = that.options.css.backgroundColor,
         	boder = that.options.css.boder,
         	borderColor = that.options.css.borderColor,
        	borderWidth = that.options.css.borderWidth,
        	mouseOverColor = that.options.css.mouseOverColor,
        	fontColor = that.options.css.fontColor,
        	mouseOverFontColor = that.options.css.mouseOverFontColor,
        	fontSize = that.options.css.fontSize
    	var divNode = $("<div>");
    	divNode.css({
    		"display": "inline-block",
			"text-align": "center",
			"width":circleWidth + "px",
			"height":circleWidth + "px",
			"line-height": circleWidth + "px",
			"border-radius":radius + "px",
			"border":boder,
			"border-color": borderColor,
			"border-width": borderWidth + "px",
			"background-color": bgColor,
			"cursor":"pointer",
			"color":fontColor,
			"font-size":fontSize
    	});
    	
    	//鼠标移动到选项上
		divNode.mouseover(function(e){
			$(e.target).css({"background-color": mouseOverColor,
				"color":mouseOverFontColor
			});
		});
		divNode.mouseout(function(e){
			$(e.target).css({"background-color":"#ffffff00",
			"color":fontColor,
			"border-color": borderColor
			});
		});
    	
    	var textstr = textContent || i;
    	if(i==0){
    		divNode.text(textContent);
    	}else{
    		divNode.text(i);
    	}
    	return divNode;
    }
    
    function SetCurrentPageNum(currentIndex)
    {
    	for(var i = 0;i<circleArray.length;i++){
    		circleArray[i].css({
    			
    			
    			
    		});
    	}
    	
    	circleArray[currentIndex-1].css({
    		
    		
    		
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
