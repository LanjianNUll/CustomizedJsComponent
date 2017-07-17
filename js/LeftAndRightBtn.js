(function($,doucument){
	
	var NAME = "LeftRightBtn",
	DEFAULTS = {
		leftBtnClick:function(parm){
			console.log("leftBtn click");
				},
		rightBtnClick:function(parm){
			console.log("rightBtn click");
		},
		css:{
			width: 120,
			height:40,
			radius:5,
			backgroundColor:"rgba(3,254,239,1)",
			boder:"solid",
			borderColor:"rgba(3,254,239,0.8)",
			borderWidth:0,
			mouseOverColor:"rgba(0,0,0,0.8)",
			clickColor:"#000000"
		},
		ImageWidth:20,
		leftImagePath:"img/trian_left.png",
		rightImagePath:"img/trian_right.png"
		
    };
	var idIncrementer = 0;
	var LeftRightBtn = function(element,options){
		var that     = this;
        that.$       = $(element);
        var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        that.init();
	}
	
	LeftRightBtn.DEFAULTS = DEFAULTS;
    LeftRightBtn.NAME     = NAME;
    
    //初始化
    LeftRightBtn.prototype.init = function(){
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
            
          	var leftBtn = CreateBtnNode(0,that);
            var rightBtn  = CreateBtnNode(1,that);
            var leftImg = CreateImgeNode(that.options.leftImagePath,that);
            var rightImg =  CreateImgeNode(that.options.rightImagePath,that);
            
            leftImg.appendTo(leftBtn);
            rightImg.appendTo(rightBtn);
            leftBtn.appendTo(that.$);
            rightBtn.appendTo(that.$);
            
	}
    
    function CreateBtnNode(btnFlag,that){
    	var btnWidth = that.options.css.width,
    	 	btnHeight = that.options.css.height,
         	radius = that.options.css.radius;
         	bgColor = that.options.css.backgroundColor,
         	boder = that.options.css.boder,
         	borderColor = that.options.css.borderColor,
        	borderWidth = that.options.css.borderWidth,
        	mouseOverColor = that.options.css.mouseOverColor;
        	
    	var leftRadius,rightRadius;
    	if(btnFlag == 0){
    		leftRadius = radius;
    	}else{
    		rightRadius = radius;
    	}
    	var btn = $("<div>");
    	//添加左右键标识  0 ：左键， 1 ：右键
    	btn.attr("flag",btnFlag);
    	btn.css({
    		"display": "inline-block",
			"width":btnWidth + "px",
			"height":btnHeight + "px",
			"border":boder,
			"border-color": borderColor,
			"border-width": borderWidth + "px",
			"background-color": bgColor,
			"cursor":"pointer",
			"border-bottom-left-radius":leftRadius,
			"border-top-left-radius": leftRadius,
			"border-top-right-radius":rightRadius,
			"border-bottom-right-radius":rightRadius
    	});	
    	//按钮事件
    	btn.mouseover(function(e){
			$(e.target).css({"background-color": mouseOverColor,
			});
			$(e.target).find("img").css({"background-color": mouseOverColor,
			});
		});
		btn.mouseout(function(e){
			$(e.target).css({"background-color":bgColor
			});
			$(e.target).find("img").css({"background-color": bgColor,
			});
		});
    	btn.click(function(e){
    		var flag = $(e.target).attr("flag");
    		if(btnFlag == 0){
    			//触发左键
    			that.options.leftBtnClick(btnFlag);
	    	}else{
	    		//触发右键
	    		that.options.rightBtnClick(btnFlag);
	    	}
    	});
    	
    	return btn;
    }
    
    function CreateImgeNode(path,that){
    	var ImgWidth = that.options.ImageWidth;
    	var btnWidth = that.options.css.width,
    	 	btnheight = that.options.css.height,
    	 	bgColor = that.options.css.backgroundColor,
    	 	mouseOverColor = that.options.css.mouseOverColor;
    	var left = btnWidth/2 - ImgWidth/2,
    		top = btnheight/2 - ImgWidth/2;
    	
    	var img = $("<img>").attr("src",path);
    	img.css({
    		"position": "relative",
			"width":ImgWidth + "px",
			"height":ImgWidth + "px",
			"background-color": bgColor,
			"top":top,
			"left":left
    	});	
    	console.log(img)
    	
    	//按钮事件
    	img.mouseover(function(e){
			$(e.target).css({"background-color": mouseOverColor,
			});
			$(e.target).parent().css({"background-color": mouseOverColor,
			});
		});
		
		img.mouseout(function(e){
			$(e.target).css({"background-color":bgColor
			});
			$(e.target).parent().css({"background-color": bgColor,
			});
		});
    	console.log(bgColor);
    	return img;
    }
    
    //入口方法
     $.fn.leftAndRightBtn = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.LeftRightBtn')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.LeftRightBtn', (data = new LeftRightBtn(this, options)))
        })
    }
    
    //构造
    $.fn.leftAndRightBtn.Constructor = LeftRightBtn;
}(jQuery, document))
