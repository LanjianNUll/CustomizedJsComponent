(function($,doucument){
	
	var NAME = "PullDown",
	DEFAULTS = {
		css:{
			itemHeight:45,												//一致的高度
			boderRadius:5,
			fontColor:"#ffffff",
			titleWidth:100,
			titleBgColor:"rgba(3,254,239,0.8)",
			mouseOverColor:"rgba(0,0,0,0.5)",
			selectWidth:200,
			iconWidth:20,
			selectDivHeight:200,
			selectBgColor:'rgba(0,0,0,0.2)',
		},
		title:null,
		pullDownIcon:"../img/up.png",
		titleContent:[],
		data:[],
    };
	
	var idIncrementer = 0;
	var PullDown = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
       	var oldOptions = options;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        if(oldOptions != undefined && oldOptions.css!= undefined){
        	that.options.css =  $.extend({}, DEFAULTS.css, oldOptions.css);
        }
        that.init();
	}
	
	PullDown.DEFAULTS = DEFAULTS;
    PullDown.NAME     = NAME;
//  //定义了一些数组
//  PullDown.prototype.selectGroup = [];
//  //记录当前选择的是第几个
//  PullDown.prototype.currentFirst = 0;
//  PullDown.prototype.currentSecond = 0;
//  PullDown.prototype.currentThrid = 0;
//  //定义当前的输入字符（主要提供给外面访问）
//  PullDown.prototype.strArray = [];

	PullDown.prototype.jQObject = [];
    //初始化
    PullDown.prototype.init = function(){
    	console.log("init");
    	this.jQObject.push(this);
    	this.selectGroup = [];
    	this.currentFirst = 0;
    	this.currentSecond = 0;
    	this.strArray = [];
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
        $root.attr("idIncrementer",idIncrementer);
        
        if(that.options.title != null){
        	var titleSpan = this.CreateTitleSpan(that);
         	titleSpan.appendTo($root);
        }
        //根据data生成
        var dataArray = that.options.titleContent;
        var left = 0,
        	width = that.options.css.titleWidth,
        	selectWidth = that.options.css.selectWidth;
       	//地址默认是有三个框选 0  省份  1 城市  2 区域(下面的i  是代表在json对象的深度)
       	
       	//默认是三个  自定义的话 可以是 两个 三个 或者一个
        for(var i = 0 ; i< dataArray.length;i++){
        	var contentSpan = this.CreateContentSpan(that,i);
        	contentSpan.appendTo($root);
        	left = width+ i*selectWidth
    		contentSpan.css({"left":left+"px"});
    		//初始化值
    		this.strArray.push(dataArray[i]);
        }
        //set
        this.SetCurrentValue(this.strArray);
	}
    
    PullDown.prototype.CreateTitleSpan = function(that){
    	var span = $("<span>");
    	var title = that.options.title,
    		fontColor = that.options.css.fontColor,
    		titleBgColor = that.options.css.titleBgColor,
    		boderRidus = that.options.css.boderRadius,
    		titleWidth = that.options.css.titleWidth,
    		height = that.options.css.itemHeight;
    	span.css({
    		"position":"absolute",
    		"text-align":"center",
    		"width": titleWidth+"px",
    		"height": height+"px",
    		"line-height": height+"px",
    		"border-bottom-left-radius": boderRidus +"px",
    		"border-top-left-radius": boderRidus +"px",
    		"color":fontColor,
    		"background-color":titleBgColor,
    	});
    	span.text(title);
    	return span;
    }
    
     PullDown.prototype.CreateContentSpan = function(that,depthIndex){
     	var span = $("<span>").attr("depthIndex",depthIndex);
     	var width = that.options.css.selectWidth,
     		height = that.options.css.itemHeight-2,
     		left = that.options.css.titleWidth,
     		boderRadiu = that.options.css.boderRadius,
     		fontColor = that.options.css.fontColor,
     		boderColor = that.options.css.titleBgColor;
    	span.css({
    		"position":"absolute",
    		"left":left+"px",
    		"width": width+"px",
    		"height": height+"px",
    		"line-height": height+"px",
    		"border-bottom-right-radius": boderRadiu +"px",
    		"border-top-right-radius": boderRadiu +"px",
    		"border":"1px solid " + boderColor,
    		"color":fontColor,
    		"background-color":"transparent",
    	});
    	
    	var select = $("<span>");
    	select.css({
    		"position": "absolute",
			"left": "0px",
			"top": "0px",
			"width": width + "px",
			"height": height+ "px",
			"line-height": height+"px",
			"text-align": "center",
    	});
    	select.text("省份");
    	select.appendTo(span);
    	
    	var imgSrc = that.options.pullDownIcon;
    	var img = $("<img>").attr("src",imgSrc);
    	var iconWidth = that.options.css.iconWidth,
    		left = width - iconWidth,
    		top = height/2 - iconWidth/2;
    	img.css({
    		'position': 'absolute',
			"width": iconWidth+"px",
			"height": iconWidth +"px",
			"left": left+"px",
			"top": top+"px",
    	});
    	img.appendTo(span);
    	var obj = this;
    	
    	var divParent = this.CreateSelectParent(that,depthIndex);
    	img.click(function(e){
    		//隐藏其他的div
    		for(var i = 0;i<obj.selectGroup.length;i++){
    			obj.selectGroup[i].toggle(false);
    		}
    		divParent.toggle(true);
    	});

		divParent.appendTo(span);
    	return span;
    }
     
     PullDown.prototype.CreateSelectParent = function(that,depthIndex){
     	var divParent = $("<div>").attr("divparent",true);
     	var width = that.options.css.selectWidth,
     		top = that.options.css.itemHeight + 2,
     		boderRadiu = that.options.css.boderRadius,
     		fontColor = that.options.css.fontColor,
     		boderColor = that.options.css.titleBgColor,
     		height = that.options.css.selectDivHeight,
     		selectBgColor = that.options.css.selectBgColor,
     		mouseOverBgColor = that.options.css.titleBgColor;
     		
     	//控制自适应高度 ，以及达到一定高度出现滑动条
    	divParent.css({
    		'position': 'absolute',
			'left': '0px',
			'top': top +'px',
			'width': width+'px',
			'height': height+'px',
			'overflow-y': 'scroll',
			'overflow-x': 'hidden',
			'z-index': 99,
			'background-color': "transparent",
    	});
    	//保存下来显示
    	this.selectGroup.push(divParent);
    	//鼠标移开消失
//  	divParent.mouseout(function(e){
//  		//不影响子元素
//  		if($(e.target).attr("divparent")){
//  			$(e.target).toggle(false);
//  		}
//  	});
    	//先隐藏起来
    	divParent.toggle(false);
    	var data = that.options.data;
    	var childCount = 0;
    	//初始化创建(开始创建的状态)
    	if(depthIndex == 0){
    		for(var i = 0; i< data.length;i++){
	    		var div = this.CreatePullDwonChildDiv(that,data[i].name,depthIndex,i);
	    		div.appendTo(divParent);
    		}
    		childCount = data.length;
    	}
    	if(depthIndex == 1){
    		for(var i = 0; i< data[0].city.length;i++){
	    		var div = this.CreatePullDwonChildDiv(that,data[0].city[i].name,depthIndex,i);
	    		div.appendTo(divParent);
    		}
    		childCount = data[0].city.length;
    	}
    	if(depthIndex == 2){
    		for(var i = 0; i< data[0].city[0].area.length;i++){
	    		var div = this.CreatePullDwonChildDiv(that,data[0].city[0].area[i],depthIndex,i);
	    		div.appendTo(divParent);
    		}
    		childCount = data[0].city[0].area.length;
    	}
    	
    	//调节divparent的高度和滑动条的隐藏
    	if(height>childCount*(top-2)){
    		divParent.css({
    			'height': "auto",
				'overflow-y': 'hidden',
				'overflow-x': 'hidden',
    		});
    	}
     	return divParent;
     }
     
     //设置当前的值
     PullDown.prototype.SetCurrentValue = function(strArr){
     	strArr = strArr.deepCopy();
     	//清空旧的值数组
     	this.strArray.clear();
     	for(var i = 0;i<this.selectGroup.length;i++){
			this.selectGroup[i].parent("span").children("span").text(strArr[i]);
     		this.strArray.push(strArr[i]);
     	}
     }
     
     //获取当前的值
     PullDown.prototype.GetCurrentValue = function(){
     	return this.strArray;
     }
     
     ////  depthIndex  json对象中的深度    index是 当前数组中的位置
     PullDown.prototype.CreatePullDwonChildDiv = function(that,str,depthIndex,index){
     	var width = that.options.css.selectWidth,
     		top = that.options.css.itemHeight + 2,
     		boderRadiu = that.options.css.boderRadius,
     		fontColor = that.options.css.fontColor,
     		boderColor = that.options.css.titleBgColor,
     		height = that.options.css.selectDivHeight,
     		selectBgColor = that.options.css.selectBgColor,
     		mouseOverBgColor = that.options.css.titleBgColor;
     	var div = $("<div>").attr("depthIndex",depthIndex).attr("index",index);
    		div.css({
    			'position': 'relative',
				'text-align': 'center',
				'width': width +'px',
				'height': top-4 +'px',
				'background-color': selectBgColor,
    		});
    		obj = this;
    		//按钮事件
	    	div.mouseover(function(e){
	    		$(e.target).css({'background-color': mouseOverBgColor});
			});
			
			div.mouseout(function(e){
				$(e.target).css({'background-color': selectBgColor});
	    	});
	    	div.click(function(e){	
	    		var clickStr = $(e.target).text();
	    		$(e.target).parent("div").parent("span").children("span").text(clickStr);
    			$(e.target).parent("div").toggle(false);
    			//获取触发的深度
    			var dIndex = parseInt($(e.tratget).attr("depthIndex"));
    			//获取数组中的位置
    			var iIndex = parseInt($(e.tratget).attr("index"));
    			//触发改变的事件（这里要分 一个下拉   两个下拉  三个 下拉）
    			var idInc = $(e.target).parent("div").parent("span").parent("div").attr("idIncrementer");
    			var obj1 = obj.jQObject[parseInt(idInc)-1];
    			if(obj1.strArray.length == 3){
    				obj1.RefreshPullDownThree(depthIndex,index);
    			}else if(obj1.strArray.length == 2){
    				obj1.RefreshPullDownTwo(depthIndex,index);
    			}else{
    				obj1.RefreshPullDownOne(depthIndex,index);
    			}
	    	});
    		div.text(str);
    		return div;
     }
     
      PullDown.prototype.RefreshPullDownOne = function(depthIndex,index){
      	//保存值
      	var data = this.options.data;
      	var strArr = [];
    		strArr.push(data[index].name);
    		this.SetCurrentValue(strArr);
	  }
     
     //两个的联级下拉
     PullDown.prototype.RefreshPullDownTwo = function(depthIndex,index){
     	var length = this.options.titleContent.length;
     	//判断点击的是否最后一项
     	if(depthIndex  + 1 < length) 
     	{
	     	 //先清空 depthIndex  + 1
	     	this.selectGroup[depthIndex  + 1].empty();
     	}
     	var childCount = 0;
     	var height = this.options.css.selectDivHeight,
	     		top  = this.options.css.itemHeight;
		var data = this.options.data;
 		if(depthIndex == 0){
			for(var i = 0; i< data[index].city.length;i++){
	    		var div = this.CreatePullDwonChildDiv(this,data[index].city[i].name,depthIndex+1,i);
	    		div.appendTo(this.selectGroup[depthIndex  + 1]);
			}
			//记录当前的index
			this.currentFirst = index;
			childCount = data[index].city.length;
			if(height>childCount*(top)){
    		this.selectGroup[depthIndex  + 1].css({
    			'height': "auto",
				'overflow-y': 'hidden',
				'overflow-x': 'hidden',
    		});
	    	}else{
    			this.selectGroup[depthIndex  + 1].css({
	    			'height': height +"px",
					'overflow-y': 'scroll',
					'overflow-x': 'hidden',
	    		});
	    	}
			//将改变的值加入数组传入
    		var strArr = [];
    		strArr.push(data[index].name,data[index].city[0].name);
    		this.SetCurrentValue(strArr);
		}
 		if(depthIndex == 1){
    		//记录当前的index
    		this.currentSecond = index;
    		//将改变的值加入数组传入
    		var strArr = [];
    		strArr.push(data[this.currentFirst].name,data[this.currentFirst].city[index].name);
    		this.SetCurrentValue(strArr);
    	}
     }
     
     //改变联动菜单的函数  写的有点恶心了 
     PullDown.prototype.RefreshPullDownThree = function(depthIndex,index){
     	var length = this.options.titleContent.length;
     	//判断点击的是否最后一项
     	if(depthIndex  + 1< length) 
     	{
	     	 //先清空 depthIndex  + 1
	     	this.selectGroup[depthIndex  + 1].empty();
     	}
     	var childCount = 0;
     	var childCount1 = 0;
     	var height = this.options.css.selectDivHeight,
	     		top  = this.options.css.itemHeight;
     	 //再根据变化生成子span
     	var data = this.options.data;
     	//更新 depthIndex  + 1 的数据
     	if(depthIndex == 0){
    		for(var i = 0; i< data[index].city.length;i++){
	    		var div = this.CreatePullDwonChildDiv(this,data[index].city[i].name,depthIndex+1,i);
	    		div.appendTo(this.selectGroup[depthIndex  + 1]);
    		}
    		//记录当前的index
    		this.currentFirst = index;
    		childCount = data[index].city.length;
    		
    		if(depthIndex  + 2 < length){
	    		//先清空 depthIndex  + 2
	     		this.selectGroup[depthIndex  + 2].empty();
	    		for(var i = 0; i< data[this.currentFirst].city[0].area.length;i++){
		    		var div = this.CreatePullDwonChildDiv(this,data[this.currentFirst].city[0].area[i],depthIndex+1,i);
		    		div.appendTo(this.selectGroup[depthIndex  + 2]);
	    		}
	    		//记录当前的index
	    		this.currentSecond = index;
	    		childCount1 = data[this.currentFirst].city[0].area.length;
	    		//调节divparent的高度和滑动条的隐藏
	    		if(height>childCount1*(top)){
		    		this.selectGroup[depthIndex  + 2].css({
		    			'height': "auto",
						'overflow-y': 'hidden',
						'overflow-x': 'hidden',
		    		});
	    		}else{
	    			this.selectGroup[depthIndex  + 2].css({
		    			'height': height+"px",
						'overflow-y': 'scroll',
						'overflow-x': 'hidden',
		    		});
	    		}
	    		//将改变的值加入数组传入
	    		var strArr = [];
	    		strArr.push(data[index].name,data[index].city[0].name,data[index].city[0].area[0]);
	    		this.SetCurrentValue(strArr);
    		}
    	}
    	if(depthIndex == 1){
    		for(var i = 0; i< data[this.currentFirst].city[index].area.length;i++){
	    		var div = this.CreatePullDwonChildDiv(this,data[this.currentFirst].city[index].area[i],depthIndex+1,i);
	    		div.appendTo(this.selectGroup[depthIndex  + 1]);
    		}
    		//记录当前的index
    		this.currentSecond = index;
    		childCount = data[this.currentFirst].city[index].area.length;
    		
    		//将改变的值加入数组传入
    		var strArr = [];
    		strArr.push(data[this.currentFirst].name,data[this.currentFirst].city[index].name,data[this.currentFirst].city[index].area[0]);
    		this.SetCurrentValue(strArr);
    	}
    	if(depthIndex == 2){
    		//将改变的值加入数组传入
    		var strArr = [];
    		strArr.push(data[this.currentFirst].name,data[this.currentFirst].city[this.currentSecond].name,data[this.currentFirst].city[this.currentSecond].area[index]);
    		this.SetCurrentValue(strArr);
    	}
     	//判断点击的是否最后一项	
     	if(depthIndex  + 1 < length)
     	{
     		if(height>childCount*(top)){
    		this.selectGroup[depthIndex  + 1].css({
    			'height': "auto",
				'overflow-y': 'hidden',
				'overflow-x': 'hidden',
    		});
	    	}else{
    			this.selectGroup[depthIndex  + 1].css({
	    			'height': height +"px",
					'overflow-y': 'scroll',
					'overflow-x': 'hidden',
	    		});
	    	}
     	}
     }
    
    //入口方法
 	$.fn.pullDown = function(option) {
        return new PullDown(this, option);
    }
 	
    //构造
	$.fn.pullDown.Constructor = PullDown;
}(jQuery, document))
