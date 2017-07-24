(function($,doucument){
	
	var NAME = "Message",
	DEFAULTS = {
    	css:{
    		height:30,
    		fontSize:16,
    		boder:1,
    		fontColor:"#ffffff",
    		bgColor:"rgba(3,254,239,1)",
    		contentColor:"rgba(3,254,239,0.8)",
    		btnWidth:30,
    		iconWidth:30,
    		radius:20,
    		imgWidth:20,
    		imgHeight:20
    	},
    	MessageType:"important",			//common 普通消息, important 重要提示消息
  	    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
    	content:"这里是默认的提示！！",
    	btnImg:"../img/add.png",
    	clickClose:function(){
    		console.log("点击关闭了提示");
    	},
    };
	
	var idIncrementer = 0;
	var divLength;
	var messageDiv;
	var isshow = false;
	var Message = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	Message.DEFAULTS = DEFAULTS;
    Message.NAME     = NAME;
    
    //初始化
    Message.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
        
        if(that.options.MessageType == "common"){
        	that.options.css.bgColor ="rgba(0,0,0,1)";
        	that.options.css.contentColor = "rgba(0,0,0,0.5)";
        }
        console.log(that);
        //创建出来    
        messageDiv = CreatDiv(that);
        $.HideNode(messageDiv);
        messageDiv.appendTo("body");
	}
    
    
    Message.prototype.show = function(){
    	console.log(that);
    }
    
    function CreatDiv(that){
    	var contentDiv = CreateMessageDiv(that);
    	var btnDiv = CreateMessageBtn(that);
    	var iconDiv = CreationIcon(that);
    	var img = CreateImg(that);
    	img.appendTo(btnDiv);
    	btnDiv.appendTo(contentDiv);
    	iconDiv.appendTo(contentDiv);
    	
    	return contentDiv;
    }
    
    function CreateMessageDiv(that){
    	var height = that.options.css.height,
    		fontSize = that.options.css.fontSize,
    		border = that.options.css.boder,
    		fontColor = that.options.css.fontColor,
    		contentColor = that.options.css.contentColor;
    	
    	var left = "45%";
    	var top;
    	if(that.options.position == "top"){
    		top = "25%";
    	}else if(that.options.position == "center"){
    		top = "65%";
    	}else{
    		top = "110%";
    	}
    	var div = $("<div>");
    	div.css({
    		"position":"absolute",
    		"left":left,
    		"top":top,
    		"line-height":height+"px",
    		"border":"1"+"px",
    		"height":height+"px",
    		"display":"inline-block",
    		"*display":"inline",
    		"*zoom":"1",
    		"background-color":contentColor,
    		"color":fontColor,
    		"font-weight":"bold",
    		"font-size":fontSize+"px"
    	});
    	var word = that.options.content;
    	div.text(word);
    	divLength = word.length*16;
    	return div;
    }
    
    function CreateMessageBtn(that){
    	var div = $("<div>");
    	var width = that.options.css.btnWidth,
    		height = that.options.css.height,
    		border = that.options.css.radius,
    		bgColor = that.options.css.bgColor;
    	var left = divLength;

		div.css({
    		"position":"absolute",
    		"display":"inline",
    		"left":left+ "px",
    		"top": "0" + "px",
    		"width":width + "px",
    		"height": height + "px",
    		"border-bottom-right-radius": border + "px",
    		"border-top-right-radius": border + "px",
    		"background-color": bgColor,
    	});
    	return div;
    }
    
    function CreationIcon(that){
    	var div = $("<div>");
    	var left = that.options.css.iconWidth,
    		width = that.options.css.iconWidth,
    		height = that.options.css.height,
    		border = that.options.css.radius,
    		contentColor = that.options.css.contentColor;
    	div.css({
    		"position":"absolute",
    		"display":"inline",
    		"left":-left+ "px",
    		"top": 0 + "px",
    		"width":width + "px",
    		"height": height + "px",
    		"border-bottom-left-radius": border + "px",
    		"border-top-left-radius": border + "px",
    		"background-color": contentColor
    	});
    	return div;
    }
    
    function CreateImg(that){
    	var img = $("<img>").attr("src",that.options.btnImg);
    	var width = that.options.css.imgWidth,
    		height = that.options.css.imgHeight,
    		bgColor = that.options.css.bgColor,
    		contentColor = that.options.css.contentColor;
    	var left =  that.options.css.btnWidth/2 - width/2;
    	var top = that.options.css.height/2	- height/2;
    	console.log(left+"————"+ top);
    	img.css({
    		"position":"absolute",
    		"left":left+ "px",
    		"top": top + "px",
    		"width":width + "px",
    		"height": height + "px",
    		"background-color": "transparent"
    	});
    	
    	//按钮事件
    	img.mouseover(function(e){
			$(e.target).css({"background-color": contentColor,
			});
			$(e.target).parent("div").css({"background-color": contentColor,
			});
		});
		
		img.mouseout(function(e){
			$(e.target).css({"background-color":bgColor
			});
			$(e.target).parent("div").css({"background-color":bgColor
			});
    	});
    	
    	img.click(function(e){	
    		HideAndReset();
    	    that.options.clickClose();
    	});
    	return img;
    }
    
    function HideAndReset(){
    	$.HideNode(messageDiv);
    	messageDiv.animate({top:'+=20%'},100);
    }
   
  	$.fn.show = function(configs){
  		if(!isshow){
  			$.ShowNode(messageDiv);
			messageDiv.animate({top:'-=20%',speed:"slow"});
			isshow = true;
			setTimeout(function()	 {
				HideAndReset();
				isshow = false;
			}, 3000);
			console.log("id___"+idIncrementer);
  		}	
  		return this;
  	}
  	
    //入口方法
     $.fn.message = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.Message')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.Message', (data = new Message(this, options)))
        })
    }
    
    //构造
    $.fn.message.Constructor = Message;
}(jQuery, document))
