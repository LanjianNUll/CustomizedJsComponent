(function($,doucument){
	
	var NAME = "DialogBox",
	DEFAULTS = {
		buttonData:[
			{text:"关闭",click:function(){console.log("点击关闭按钮");}},
			{text:"取消",click:function(){console.log("点击取消按钮");}},
			{text:"保存",click:function(){console.log("点击保存按钮");}}
		],
		title:"标题",
		content:"内容内容。。。。。",
		css:{
			left:0,
			top:0,
			width:0,
			height:0,
			bgColor:"rgba(0,0,0,0.5)",
			boderColor:"rgba(3,254,239,1)",
			boderRidius:5,
			fontColor:"#ffffff",
		},
    };
    
	var idIncrementer = 0;
	
	var DialogBox = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	DialogBox.DEFAULTS = DEFAULTS;
    DialogBox.NAME     = NAME;
    
    //初始化
    DialogBox.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
            //计算好数值
            CalculateValue(that);
            //组装dialogbox
            this.box = this.AccembleDialogBox(that);
            this.mask = this.CreateMask(that);
            this.mask.appendTo("body");
            this.box.appendTo("body");
            //默认隐藏  提供show供调用
           	$.HideNode(this.mask);
           	$.HideNode(this.box);
	}
    
    function CalculateValue(that){
    	 //计算浏览器大小和窗口的大小
            //1298x683
            //500*200
            var wRadio =500 /1298;
            var hRadio =200 /683;
            var currentBodyWidth = $(document).width();
            var currentBodyheight = $(document).height();
            var realWidth = currentBodyWidth*wRadio;
            var realheigt = currentBodyheight*hRadio;
            
            var left = currentBodyWidth/2 - realWidth/2;
            var top = currentBodyheight/2 - realheigt/2;
            
            that.options.css.left = left;
            that.options.css.top = top;
            that.options.css.width = realWidth;
    }
    
    DialogBox.prototype.CreateMask = function(that){
    	var div = $("<div>");
   		div.css({
   			'position': 'fixed',
   			'z-index': 90,
			'width':'100%',
			'height':'100%',
			'left':0,
			'top':0,
			'background':'rgba(0,0,0,0.5)',
			'display': 'none',
   		});
   		return div;
    }
    
    DialogBox.prototype.AccembleDialogBox = function(that){
    	
    	var box = this.CreateBoxDiv(that);
    	var title = this.CreateTitle(that);
    	var content = this.CreateContent(that);
    	var bottom = this.CreateBottom(that);
    	var arr = that.options.buttonData;
    	for (var i = 0; i < arr.length; i++) {
    		var button = this.CreateButton(that,i+1);
    		button.appendTo(bottom);
    	}
    	title.appendTo(box);
    	content.appendTo(box);
    	bottom.appendTo(box);
    	
    	return box;
    }
    
   	DialogBox.prototype.CreateBoxDiv = function(that){
   		var left = that.options.css.left,
   		 	top = that.options.css.top;
   		 	width = that.options.css.width;
   		var div = $("<div>");
   		div.css({
   			'position': 'fixed',
   			'z-index': 99,
			'width':width + 'px',
			'height':'auto',
			'left':left+'px',
			'top':top + 'px',
   		});
   		return div;
   	}
   	
   	DialogBox.prototype.CreateTitle = function(that){
   		var width = that.options.css.width,
   			boderRidius = that.options.css.boderRidius,
   			fontColor = that.options.css.fontColor,
   			bgColor = that.options.css.bgColor,
   			boderColor = that.options.css.boderColor;
   		var div = $("<div>");
   		div.css({
   			'position':'absolute',
			'width': width + 'px',
			'height': 40 + 'px',
			'line-height': 40 + 'px',
			'left': 0 + 'px',
			'top': 0 + 'px',
			'background':bgColor,
			'border-bottom': 'solid 1px ' + boderColor,
			'color': fontColor,
			"border-top-left-radius": boderRidius + 'px',
			'border-top-right-radius': boderRidius + 'px',
   		});
   		div.html("&nbsp"+that.options.title);
   		return div;
   	}
   	
	DialogBox.prototype.CreateContent = function(that){
		var width = that.options.css.width,
			fontColor = that.options.css.fontColor,
   			bgColor = that.options.css.bgColor,
   			boderColor = that.options.css.boderColor;
		var div = $("<div>");
		div.css({
			'position':'absolute',
			'left': 0 + 'px',
			'top':40 + 'px',
			"width": width + 'px',
			'height': 120 + 'px',
			'background':bgColor,
			'border-bottom': "solid 1px "+boderColor,
			'color': fontColor,
		});
		div.html("</br>&nbsp"+that.options.content);
		return div;
   	}
   	
   	DialogBox.prototype.CreateBottom = function(that){
   		var width = that.options.css.width,
   			boderRidius = that.options.css.boderRidius,
   			fontColor = that.options.css.fontColor,
   			bgColor = that.options.css.bgColor,
   			boderColor = that.options.css.boderColor;
   		var div = $("<div>");
		div.css({
			'position':'absolute',
			'left': 0 + 'px',
			'top':160 + 'px',
			'width': width + 'px',
			'height': 40 + 'px',
			'line-height': 40 + 'px',
			'background':bgColor,
			'color': fontColor,
			"border-bottom-left-radius": boderRidius + 'px',
			'border-bottom-right-radius': boderRidius + 'px',
		});
		return div;
   	}
   	
   	DialogBox.prototype.CreateButton = function(that,index){
   		var right = 80* index;
   		var btn = $("<button>");
		btn.css({
			'position': 'absolute',
			'width': '50px',
			'height': 20 + 'px',
			'top': 10 + 'px',
			'right': right + 'px',
			'border-radius': 5 + 'px',
			'background-color':'rgba(3,254,239,0.8)',
			'color': '#FFFFFF',
			'border': 'none',
		});
		var arr = that.options.buttonData;
		var text = arr[index-1].text;
		var clickFun = arr[index-1].click;
		btn.text(text);
		var obj = this;
		btn.click(function(e){
			//触发点击事件
			clickFun();
			//关闭整个对话(动画这里实现)
		 	$.HideNode(obj.mask);
		  	$.HideNode(obj.box);
		});
		return btn;
   	}
    
    DialogBox.prototype.showDialog = function(options){
    	$.ShowNode(this.mask);
       	$.ShowNode(this.box);
       	return this;
    }
    
    //入口方法
     $.fn.dialogBox = function(option) {
        return new DialogBox(this, option);
    }
    
    //构造
    $.fn.dialogBox.Constructor = DialogBox;
}(jQuery, document))
