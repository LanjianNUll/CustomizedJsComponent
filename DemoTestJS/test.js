$(document).ready(function(){
	
	//账号保存本地  提示组件
	var options = {
      	css:{
    		width:null,								//
    		height:null,							//线框的宽度  0 则表示没有
    		borderTopW:1,
    		borderBottomW:0,
    		borderRightW:0,
    		borderColor:"#ffffff",
    		bgColor:"#EEE5DE",
    		mouseOverColor:"#EEB887",				//鼠标进入的颜色
    	}
   };
    $("#inputTest").autoInput(options);
    
    //分页组件 形式一
    var pageOptions= {
	    pageItemClick:function(pageNum){
					console.log("自定义函数操作（参数为当前的页数，另：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			circleWidth:60,
			circleHeight:60
		},
		PageNum:5,
		CurrentPageNum:1,
		PrePageContent:"<<",
		LastPageContent:">>"
    };
    
    $("#hh").pageComponent(pageOptions);
   
   //分页组件 形式二
    var pageOptions1= {
	    pageItemClick:function(pageNum){
					console.log("自定义函数操作（参数为当前的页数，另：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			circleWidth:120,
			circleHeight:60,
			radius:30,
		},
		PrePageContent:"上一页",
		LastPageContent:"下一页"
    };
   
    $("#ss").pageComponent(pageOptions1);
    
    //左右按钮
    var pageOptions22= {
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
			boder:"solid",
			borderWidth:0,
		},
		leftImagePath:"img/trian_left.png",
		rightImagePath:"img/trian_right.png"
	};
	
    $("#dd").leftAndRightBtn(pageOptions22);
	$("#ff").leftAndRightBtn(pageOptions22);
	
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