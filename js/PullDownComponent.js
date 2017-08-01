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
			selectDivHeight:300,
			selectBgColor:'rgba(0,0,0,0.2)',
		},
		title:"地址",
		pullDownIcon:"../img/up.png" ,
		titleContent:["省份","城市","区/县"],
		data:[
			{ name:"省份0",city:[{
								name:"城市0",
								area:["10","20","30"],
								},
								{
								name:"城市1",
								area:["10","20","30"],
								},
								{
								name:"城市2",
								area:["10","20","30"],
								}
							]
			},
			{ name:"省份1",city:[{
								name:"城市11",
								area:["11","21","31"],
								},
								{
								name:"城市1111",
								area:["10","20","30"],
								}
							]
			},
			{ name:"省份2",city:[{
								name:"城市0",
								area:["12","22","32"],
								}
							]
			},
			{ name:"省份3",city:[{
								name:"城市0",
								area:["13","23","33"],
								}
							]
			},
			{ name:"省份4",city:[{
								name:"城市0",
								area:["14","24","34"],
								}
							]
			},
			{ name:"省份5",city:[{
								name:"城市0",
								area:["15","25","35"],
								}
							]
			},
			{ name:"省份6",city:[{
								name:"城市0",
								area:["16","26","36"],
								}
							]
			}
		],
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
    //定义了一些数组
    PullDown.prototype.selectGroup = [];
    //记录当前选择的是第几个
    PullDown.prototype.currentFirst = 0;
    PullDown.prototype.currentSecond = 0;
    PullDown.prototype.currentThrid = 0;
    //初始化
    PullDown.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
        var titleSpan = this.CreateTitleSpan(that);
         titleSpan.appendTo($root);
        //根据data生成
        var dataArray = that.options.titleContent;
        var left = 0,
        	width = that.options.css.titleWidth,
        	selectWidth = that.options.css.selectWidth;
       	//地址默认是有三个框选 0  省份  1 城市  2 区域(下面的i  是代表在json对象的深度)
        for(var i = 0 ; i< dataArray.length;i++){
        	var contentSpan = this.CreateContentSpan(that,i);
        	contentSpan.appendTo($root);
        	left = width+ i*selectWidth
    		contentSpan.css({"left":left+"px"});
        }
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
			'background-color': "transparent",
    	});
    	//保存下来显示
    	PullDown.prototype.selectGroup.push(divParent);
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
    			//触发改变的时间
    			obj.RefreshPullDown(depthIndex,index);
	    	});
    		div.text(str);
    		return div;
     }
     
     PullDown.prototype.RefreshPullDown = function(depthIndex,index){
     	var length = this.options.titleContent.length;
     	if(length <=depthIndex + 1)
     	 	return;
     	console.log(this.selectGroup[depthIndex  + 1][0]);
     	 //先清空 depthIndex  + 1
     	this.selectGroup[depthIndex  + 1] = this.selectGroup[depthIndex  + 1].empty();

		
		console.log(this.selectGroup[depthIndex  + 1][0]);
     	var childCount = 0 ;
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
    		childCount = data[index].city.length
    	}
    	if(depthIndex == 1){
    		for(var i = 0; i< data[this.currentFirst].city[index].area.length;i++){
	    		var div = this.CreatePullDwonChildDiv(this,data[this.currentFirst].city[index].area[i],depthIndex+1,i);
	    		div.appendTo(this.selectGroup[depthIndex  + 1]);
    		}
    		//记录当前的index
    		this.currentSecond = index;
    		childCount = data[this.currentFirst].city[index].area.length;
    	}
		console.log(childCount);
     	 
     	 //调节divparent的高度和滑动条的隐藏
     	var height = this.options.css.selectDivHeight,
     		top  = this.options.css.itemHeight;
    	if(height>childCount*(top)){
    		this.selectGroup[depthIndex  + 1].css({
    			'height': "auto",
				'overflow-y': 'hidden',
				'overflow-x': 'hidden',
    		});
    	}
     	 
     }
     
    //入口方法
 	$.fn.pullDown = function(option) {
        return new PullDown(this, option);
    }
    
    //构造
    $.fn.pullDown().Constructor = PullDown;
}(jQuery, document))
