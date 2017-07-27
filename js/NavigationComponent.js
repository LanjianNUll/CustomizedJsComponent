(function($,doucument){
	'use strict';
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
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题1",
    				subdata:[
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题11",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题12",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题13",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    					]
    				}
    				]
    		},
    		
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题2",
    				subdata:[
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题111",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题2222",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				]
    		},
    		
    		{imgSrc:"../img/矢量智能对象.png",title:"这默认标题3",
    				subdata:[
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				}
    				]
    		}
    		
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
    Navigation.prototype.SSubdiv = []; 
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
		
		console.log(this.SSubdiv);
		
	}
    
    //组装
    Navigation.prototype.AssembleDiv = function(that){

		var nav = this.CreateNavigationDiv(that);
		var data = that.options.data;
		var item;
		for(var i = 0 ; i < data.length; i++){
			item = this.CreateItem(that,i);
	    	var img = this.CreateImg(that,i);				
	    	img.attr("src",data[i].imgSrc);					//设置图片
	    	var p = this.CreateP(that,i);
	    	p.text(data[i].title);							//设置标题
	    	var subDiv = this.CreateSubDiv(that,i);
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
	
	Navigation.prototype.CreateSubDiv = function(that,index){
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
			"height":"auto",
			"background-color":bgColor
		});
		
		var arr = that.options.data[index];
		var x = arr.subdata.length
		for(var i = 0;i < x;i++){
			var subDiv = this.CreateSubChildDiv(that,index,i,-1);			//root为一个标识  root为二级菜单的
			subDiv.children("p").text(arr.subdata[i].content);
			subDiv.children("img").attr("src",arr.subdata[i].imgSrc);
			var obj = this;
			subDiv.click(function(e){
				var flagIndex = parseInt($(e.target).attr("index"));
				var subIndex = flagIndex;    					//用一个变量来保存次级菜单的第几个
				//计算
				var itemIndex =  parseInt($(e.target).attr("itemIndex"));
				if(itemIndex!=0){
					//上一个分类菜单的个数
					var arrrr ;
					var last = 0;
					//记录前面多少个收缩的菜单项
					for(var yy = 0;yy < itemIndex;yy++){
						arrrr = that.options.data[yy];
						last  = last + arrrr.subdata.length;
					}
					flagIndex = last + flagIndex;
				}
				for(var y = 0 ; y < obj.SSubdiv[flagIndex].length; y++){
					//收起
					$(obj.SSubdiv[flagIndex][y]).toggle('slow');
				}
				//触发函数
				arr.subdata[subIndex].click();
			});
			subDiv.appendTo(div);
			var arra = arr.subdata[i].subdata || [];
			var ssDivArray = [];
			for(var j = 0;j<arra.length;j++){
				var ssDiv = this.CreateSubChildDiv(that,index,i,0);			//标识为最低的菜单
				ssDivArray.push(ssDiv);
				ssDiv.toggle(false);	//默认收起的
				//填充内容
				ssDiv.children("p").text(arra[j].content);
				ssDiv.children("img").attr("src",arra[j].imgSrc);
				ssDiv.click(function(e){
					var lowIndex = parseInt($(e.target).attr("lowIndex"));
					//触发函数
					arra[lowIndex].click();
				});
				ssDiv.appendTo(div);
			}
			this.SSubdiv.push(ssDivArray);
		}
		return div;
	}
	/// itemIndex  导航栏root（最顶部）   index  中间的index
	Navigation.prototype.CreateSubChildDiv = function(that,itemIndex,index,flag){
		//添加一个标识
		var div = $("<div>").attr("subchild",true);
		if(flag == -1){
			div.attr("index",index);
			div.attr("itemIndex",itemIndex);
		}else{
			div.attr("lowIndex",index);
		}
		var  fontColor = that.options.css.fontColor;
		div.css({
			"margin-top":5 + "px",
			"width": 300 + "px",
			"height":60 + "px",
			"background-color":"rgba(0,0,0,0.8)",
			"color":fontColor,
		});
		
		div.mouseover(function(e){
			highlightBgColor($(e.target));
		});
		
		div.mouseout(function(e){
			normalBgColor($(e.target));
		});
		
		//图标和标题
		var img = $("<img>").attr("src","../img/矢量智能对象.png").attr("index",index);
		img.css({
			"positon":"absolute",
			"display":"inline",
			"cursor":"pointer",
			"top":30+"px",
			"left":35+"px",
			"width":30+"px",
			"height":30+"px"
		});
		
		var p = $("<p>").attr("index",index);
		var  fontColor = that.options.css.fontColor;
		p.css({
			"positon":"absolute",
			"display":"inline-block",
			"top":45+"px",
			"left":5+"px",
			"color":fontColor,
			"cursor":"pointer",
		});
		
		p.text("这里是标题 ");
		
		img.appendTo(div);
		p.appendTo(div);
		
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
