(function($,doucument){
	//使用严格模式（主要是为了规范语法）
	'use strict';
	//该组件的名称
	var NAME = "LeftRightBtn",
	//这里的配置信息  见名知义
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
		imageWidth:20,
		leftImagePath:"../img/trian_left.png",
		rightImagePath:"../img/trian_right.png",
		purePicBtn:false,
		imgGapWidth:120,
		
    };
    //组件的id  相当于计数 这类组件的全局变量
	var idIncrementer = 0;
	//左右按钮组件类
	var LeftRightBtn = function(element,options){
		var that     = this;
        that.$       = $(element);
       	var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        if(oldOptions != undefined && oldOptions.css!= undefined){
        	that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        }
        that.init();
	}
	
	LeftRightBtn.DEFAULTS = DEFAULTS;
    LeftRightBtn.NAME     = NAME;
    
    //初始化
    LeftRightBtn.prototype.init = function(){
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id; 
            
     	//区分是纯图片按钮
        if(that.options.purePicBtn){
        	that.options.css.backgroundColor = "transparent";
        	that.options.css.mouseOverColor = "transparent";
        	that.options.css.clickColor = "transparent";
      		that.options.css.width = that.options.imgGapWidth;
        }
        //创建左右组件及其图标
      	var leftBtn = CreateBtnNode(0,that);
        var rightBtn  = CreateBtnNode(1,that);
        var leftImg = CreateImgeNode(that.options.leftImagePath,that);
        var rightImg =  CreateImgeNode(that.options.rightImagePath,that);
        //组装各个组件
        leftImg.appendTo(leftBtn);
        rightImg.appendTo(rightBtn);
        leftBtn.appendTo(that.$);
        rightBtn.appendTo(that.$);
	}
    
    //创建按钮节点btnFlag 左右按钮的标识  that 配置信息（通过传参的形式，避免出错）
    function CreateBtnNode(btnFlag,that){
    	//获取配置信息的值
    	var btnWidth = that.options.css.width,
    	 	btnHeight = that.options.css.height,
         	radius = that.options.css.radius,
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
    	//设置节点的样式
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
    	//鼠标移动到按钮触发事件
    	btn.mouseover(function(e){
			$(e.target).css({"background-color": mouseOverColor,
			});
			$(e.target).find("img").css({"background-color": mouseOverColor,
			});
		});
		//鼠标离开按钮触发事件
		btn.mouseout(function(e){
			$(e.target).css({"background-color":bgColor
			});
			$(e.target).find("img").css({"background-color": bgColor,
			});
		});
		//鼠标鼠标点击事件
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
    
    //创建图片节点
    function CreateImgeNode(path,that){
    	var ImgWidth = that.options.imageWidth;
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
    	return img;
    }
    
    //入口方法  这里是入口方法  其实也可以直接返回 new LeftRightBtn(this, option)
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
