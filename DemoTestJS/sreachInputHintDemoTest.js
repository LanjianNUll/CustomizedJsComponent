$(document).ready(function(){
	/**
	 * 搜索提示组件：
	 * 1，配置点击 事件  ：sreachBtnClick:function(str){}    点击搜索按钮事件 str为 input的字符
	 * 					itemBtnClick:function(i,content){} 点击了提示的itme， i为 index   content item的value
	 * 					inputChange:refreshStr
	 * 					//输入框变化事件的回调函数  str  参数 为input的value
	 * 
	 * 2，css配置（见名知义）：
	 * 		inputWidth:300,
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
			
	 * 3，其他配置：
	 * //默认显示的，若无 则是一个空数组
					dataArray:["默认显示的","若无 则是一个","关键字个数8"],
	 * 
	 * */
	
	//搜索组件
	//涉及到内容要去服务器匹配
	 var options = {
		sreachBtnClick:function(str){
			console.log("点击了搜索按钮,搜索内容为"+str);
		},
		itemBtnClick:function(i,content){
			console.log("点击了"+i+content);
		},
		inputChange:refreshStr,
		//默认显示的，若无 则是一个空数组
		dataArray:["默认显示的","若无 则是一个","关键字个数8"],
    };

	//用户定义  参数返回的是输入框的value
	//test
	var arr = [];
	function refreshStr(str){
	//用户自己定义  获取数据的方式
	//		....
	//		....
	//		...
		if(str != "")
			arr.push(str);
		$("#rr").refrshInputComplete(arr);
	}
	$("#rr").searchInput(options);
	
});