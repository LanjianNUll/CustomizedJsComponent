(function($,doucument){
	
	var NAME = "Navigation",
	DEFAULTS = {
		
		css:{
			navWidth:180,
			navHeight:120,
			bgColor:"rgba(0,0,0,0.8)",
			mouseOverColor:"rgba(3,254,239,1)",
			padingTop:15,							//图片距离上面的距离
			subNavWidht:300,
			subNavHeight:300,
			subNavLeft:200,
			subNavTop:-120,
			fontColor:"#ffffff",
		},
    	data:[
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题",subdata:{}},
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题",subdata:{}},
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题",subdata:{}}
    	],
    };
	
	var idIncrementer = 0;
	var bgColor,mouseOverColor;
	var Navigation = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        that.init();
	}
	
	Navigation.DEFAULTS = DEFAULTS;
    Navigation.NAME     = NAME;
    
    
    Navigation.prototype.Subdiv = [];
    Navigation.prototype.ItemGroup = [];
    //初始化
    Navigation.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;

		bgColor = that.options.css.bgColor;
		mouseOverColor = that.options.css.mouseOverColor;
		var navigationDiv = this.AssembleDiv(that);
		
		navigationDiv.appendTo($root);
	}
    
    //组装
    Navigation.prototype.AssembleDiv = function(that){

		var nav = this.CreateNavigationDiv(that);
		var data = that.options.data;
		console.log(data.length);
		var item;
		for(var i = 0 ; i < 3; i++){
			item = this.CreateItem(that,i);
	    	var img = this.CreateImg(that,i);				
	    	img.attr("src",data[i].imgSrc);					//设置图片
	    	var p = this.CreateP(that,i);
	    	p.text(data[i].title);							//设置标题
	    	var subDiv = this.CreateSubDiv(that);
	    	img.appendTo(item);
	    	p.appendTo(item);
			subDiv.appendTo(item)
			item.appendTo(nav);
			this.Subdiv.push(subDiv);
			this.ItemGroup.push(item);
		}
    	return nav;
    }
    
    
   	Navigation.prototype.CreateNavigationDiv = function (that){
		var div = $("<div>");
		div.css({
			"cursor":"pointer",
			"position":"absolute"
		});
		return div;
	}
    
    Navigation.prototype.CreateItem = function(that,index){
    	var div = $("<div>").attr("index",index);
    	var paddingTop = that.options.css.padingTop,
    		width = that.options.css.navWidth,
    		height = that.options.css.navHeight,
    		bgColor = that.options.css.bgColor;
    	//添加一个标识  判断是否 只触摸此div才触发事件
    	div.attr("name","canTouch");
    	div.css({
    		"cursor":"pointer",
    		"text-align":"center",
    		"padding-top": paddingTop + "px",
    		"width":width+"px",
    		"height":height+"px",
    		"background-color":bgColor
    	});
    	var arr = this.Subdiv;
    	var itemArr = this.ItemGroup;
    	
		div.mouseover(function(e){
			if($(e.target).attr("name")){
				highlightBgColor($(e.target));
				highlightBgColor($(e.target).find("p"));
				highlightBgColor($(e.target).find("img"));
	    		var index = parseInt($(e.target).attr("index"));
    			//将div恢复正常
				ResetNomal(itemArr,index);
				if(!isNaN(index)){
    			arr[index].css({"display":"block"});
    			}
    		}
    	});
    	div.click(function(e){
    		
    	});
    	return div;
    }
    
	Navigation.prototype.CreateImg = function(that,index){
		var img = $("<img>").attr("src","../img/矢量智能对象.png").attr("index",index);
		img.css({
			"cursor":"pointer",
		});
		var arr = this.Subdiv;
		var itemArr = this.ItemGroup;
		img.mouseover(function(e){
			highlightBgColor($(e.target));
  			highlightBgColor($(e.target).parent("div"));
  			highlightBgColor($(e.target).next());
    		var index = parseInt($(e.target).attr("index"));
    		//将div恢复正常
			ResetNomal(itemArr,index);
    		if(!isNaN(index)){
    			arr[index].css({"display":"block"});
    		}
    	});
		return img;
	}
	
	Navigation.prototype.CreateP = function(that,index){
		var p = $("<p>").attr("index",index);
		var  fontColor = that.options.css.fontColor;
		p.css({
			"color":fontColor,
			"cursor":"pointer",
		});
		p.text("这里是标题 ");
		
		var arr = this.Subdiv;
		var itemArr = this.ItemGroup;
		p.mouseover(function(e){
			highlightBgColor($(e.target));
  			highlightBgColor($(e.target).parent("div"));
  			highlightBgColor($(e.target).prev());
    		var index = parseInt($(e.target).attr("index"));
    		//将div恢复正常
			ResetNomal(itemArr,index);
    		if(!isNaN(index)){
    			arr[index].css({"display":"block"});
    		}
    	});
		return p;
	}
	
	Navigation.prototype.CreateSubDiv = function(that){
		//给子元素添加是否显示的标识
		var div = $("<div>").attr("hasShow",false);
		var left = that.options.css.subNavLeft,
			top = that.options.css.subNavTop,
			width = that.options.css.subNavWidht,
			height = that.options.css.subNavHeight,
			bgColor = that.options.css.bgColor;
		div.addClass("ITEM");
		div.css({
			"display":"none",
			"position":"relative",
			"left":left+"px",
			"top":top+"px",
			"width":width+"px",
			"height":height+"px",
			"background-color":bgColor
		});
		
		
		return div;
	}
	
	function ResetNomal(itemArr,index){
		for(var i = 0 ; i<itemArr.length; i++){
			if(index != i){
				normalBgColor(itemArr[i]);
				normalBgColor(itemArr[i].find("img"));
				normalBgColor(itemArr[i].find("p"));
				itemArr[i].children("div.ITEM").css({"display":"none"});
			}
		}
	}
	
	//高亮背景
	function highlightBgColor(div){
		div.css({"background-color":mouseOverColor});
	}
	
	//正常背景
	function normalBgColor(div){
		div.css({"background-color":bgColor});
	}
	
    //入口方法
     $.fn.navigation = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.Navigation')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.Navigation', (data = new Navigation(this, options)))
        })
    }
    
    //构造
    $.fn.navigation.Constructor = Navigation;
}(jQuery, document))
