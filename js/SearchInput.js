(function($,doucument){
	
	var NAME = "SreachInput",
	DEFAULTS = {
		sreachBtnClick:function(str){
			console.log("点击了搜索按钮,搜索内容为"+str);
		},
		itemBtnClick:function(i,content){
			console.log("点击了"+i+content);
		},
		dataArray:[],
		inputTip:"输入您想要查找的应用",
		sreachbtnImg:"img/searchInput.png",
		css:{
			inputWidth:300,
			inputHeight:40,
			inputBorderRadius:5,
			inputPaddingLeft:20,
			inputPaddingRight:20,
			inputFontSize:20,
			inputFontColor:"#ffffff",
			InputBgColor:"rgba(0, 0, 0, 0.5)",
			imgDivWidth:null,							//这里这个默认设为input的bgColor,用户需要时自定义宽度
			imgWidth:20,
			imgDivBgColor:null,							//这里这个默认设为input的bgColor,用户需要时自定义按钮区域的bgColor
			groupWidth:null,						//和input一样的宽度
			groupHeight:300,
			groupTop:10,
			groupBgColor:null,						//这里这个默认设为null,用户需要时自定义按钮区域的bgColor
			itemWidth:145,
			itemHeight:40,
			itemBgColor:"#026C7A",
			itemMarginTop: 20,						//和上一行的间隔
			itemMarginLeft:20,
			itemFontSize: 15,
			itemBoderRadius:5,
			itemFontColor:"#ffffff",
			itemBgColor: "#03feef",
			opacity: 0.5
		},
    };
	
	var idIncrementer = 0;
	var that ;
	var SreachInput = function(element,options){
		that     = this;
        that.$       = $(element);
        var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        that.init();
	}
	
	SreachInput.DEFAULTS = DEFAULTS;
    SreachInput.NAME     = NAME;
   
    //初始化
    SreachInput.prototype.init = function(){
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
		var css = that.options.css;
		//根据内容改变group的大小
		var dataArray = that.options.dataArray;
       	var lineNum = (dataArray.length%2 == 0) ? dataArray.length/2 : (dataArray.length+1)/2;
        var groupHeight = (css.itemMarginTop+css.groupTop+css.itemHeight)*lineNum;
        if(dataArray.length == 0){
        	css.groupHeight = 0;
        }
    	else{
    		 css.groupHeight = groupHeight;
    	}
        var inputFrame = CreatInputFrame();
        var imgBtn = CreatImgBtn();
        inputFrame.appendTo(that.$);
        imgBtn.appendTo(that.$);
        var itemGroup = CreatItemGroup();
        
       	itemGroup.appendTo(that.$);
       	inputFrame.on("input", OnInput);
       	
       	for(var i = 0; i < dataArray.length; i++){
       		var item = CreatItem(i,dataArray[i]);
       		item.appendTo(itemGroup);
       	}
   		that.itemGroup = itemGroup;
       	//输入框变化
	    function OnInput(e){
	     	that.options.inputChange($(e.target).val());
	    }
	}
    
    //刷新
    SreachInput.prototype.refrshInputComplete = function(arry){
    	var item;
    	var itemGroup = that.itemGroup.empty();
       	for(var i = 0; i < arry.length; i++){
       		item = CreatItem(i,arry[i]);
       		item.appendTo(itemGroup);
       	}
       	//根据内容改变group的大小
       	css = that.options.css;
		var dataArray = arry;
       	var lineNum = (dataArray.length%2 == 0) ? dataArray.length/2 : (dataArray.length+1)/2;
        var groupHeight = (css.itemMarginTop+css.groupTop+css.itemHeight)*lineNum;
       	css.groupHeight = groupHeight;
       	itemGroup.css({
			"height":groupHeight + "px",
    	});
    }
    
    function CreatInputFrame()
    {
    	var width = that.options.css.inputWidth,
    		height = that.options.css.inputHeight,
    		boderRadius = that.options.css.inputBorderRadius,
    		panddingLeft = that.options.css.inputPaddingLeft,
    		panddingRight = that.options.css.inputPaddingRight,
    		fontSize = that.options.css.inputFontSize,
    		fontColor = that.options.css.inputFontColor,
    		bgColor  = that.options.css.InputBgColor,
    		opacity = that.options.css.opacity;
    	var input = $("<input>").attr({"placeholder":that.options.inputTip});
    	input.css({
    		"width":width + "px",
			"height":height + "px",
			"border-radius":boderRadius + "px",
			"padding-left": panddingLeft + "px",
			"padding-right": panddingRight + "px",
			"font-size": fontSize + "px",
			"color": fontColor,
			"font-weight":"bold",
			"background-color": bgColor
    	});
    	return input;
    }
    
    function CreatImgBtn(){
    	var width = that.options.css.imgDivWidth || that.options.css.inputHeight,
    		height = that.options.css.inputHeight,
    		imgWidth = that.options.css.imgWidth,
    		bgColor = that.options.css.imgDivBgColor ||  that.options.css.InputBgColor;
    	var divLeft = that.options.css.inputWidth;
    	var midleLeft = width/2-imgWidth/2,
    		midleTop = height/2 - imgWidth/2,
    		opacity = that.options.css.opacity;
    	var imgDiv = $("<div>");
    		imgDiv.css({
    			"position": "absolute",
    			"display": "inline-block",
    			"left": divLeft +"px",
    			"top": 2 + "px",
    			"width": width + "px",
    			"height": height + "px",
    			"background-color": "",
    		});
    	var imgBtn = $("<img>").attr({"src":that.options.sreachbtnImg});
	    	imgBtn.css({
				"position": "absolute",
				"width":imgWidth + "px",
				"height":imgWidth + "px",
				"top": midleTop + "px",
				"left": midleLeft + "px",
				"cursor":"pointer",
	    	});
	    
    	imgBtn.click(function(e){
			that.options.sreachBtnClick(that.$.find("input").val());
	    });
	    	
    	imgBtn.appendTo(imgDiv);
    	return imgDiv;
    }
    
    function CreatItemGroup(){
    	var width = that.options.css.groupWidth || 
    				(that.options.css.inputWidth +that.options.css.inputPaddingLeft + that.options.css.inputPaddingRight),
    		height = that.options.css.groupHeight,
    		marginTop = that.options.css.groupTop,
    		bgColor = that.options.css.groupBgColor || that.options.css.InputBgColor,
    		boderRadius = that.options.css.inputBorderRadius,
    		opacity = that.options.css.opacity;
    	var itemGroup = $("<div>");
    	itemGroup.css({
			"width":width + "px",
			"height":height + "px",
			"border-radius":boderRadius + "px",
			"margin-top": marginTop+ "px",
			"background-color":bgColor
    	});
    	return itemGroup;
    }
    
    function CreatItem(index,content){
     	var groupWidth =  that.options.css.inputWidth +that.options.css.inputPaddingLeft+ that.options.css.inputPaddingRight;
    	var height = that.options.css.itemHeight,
    		bgColor = that.options.css.InputBgColor,
    		marginTop = that.options.css.itemMarginTop,
    		marginLeft = that.options.css.itemMarginLeft,
    		fontSize = that.options.css.itemFontSize,
    		fontColor = that.options.css.itemFontColor,
    		boderRadius = that.options.css.itemBoderRadius,
    		itemBgColor = that.options.css.itemBgColor;
    	var width = (groupWidth/2 - marginLeft *3/2);
    	var item = $("<div>").attr("index",index+1).text(content);
    	item.css({
			"position": "relative",
			"z-index":99,
			"font-weight":"bold",
			"display": "inline-block",
			"margin-top": marginTop+ "px",
			"margin-left":marginLeft + "px",
			"width":width+ "px",				//	340  / 2   170 -  marg
			"height":height + "px",
			"line-height": height + "px",
			"text-align": "center",
			"font-size": fontSize + "px",
			"color": fontColor,
			"cursor":"pointer",
			"border-radius":boderRadius + "px",
			"background-color":that.options.css.InputBgColor,
    	});
    	//按钮事件
    	item.mouseover(function(e){
			$(e.target).css({"background-color": itemBgColor,
			});
		});
		item.mouseout(function(e){
			$(e.target).css({"background-color":bgColor
			});
			
		});
    	item.click(function(e){
    		var flag = $(e.target).attr("index");
			that.options.itemBtnClick(flag,$(e.target).text());
			that.$.find("input").val($(e.target).text());
    	});
    	return item;
    }
    
    //入口方法
     $.fn.searchInput = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.SreachInput')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.SreachInput', (data = new SreachInput(this, options)))
        })
    }
     
    $.fn.refrshInputComplete = function(arr){
    	that.refrshInputComplete(arr);
    }
    //构造
    $.fn.searchInput.Constructor = SreachInput;
}(jQuery, document))
