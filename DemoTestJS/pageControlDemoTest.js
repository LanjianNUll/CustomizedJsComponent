$(document).ready(function(){
	/**
	 * 分页组件：
	 * 1，配置点击 事件  ：pageItemClick:function(pageNum){}   
	 * 		pageNum为当前页index 若无 则0  表示上一页   -1 表示下一页
	 * 2，css配置（见名知义）：	circleWidth:60,		页码的宽度
					circleHeight:60,	页码的高度
					radius:30,			
					backgroundColor:"rgba(0,0,0,0)",		背景色
					boder:"solid",
					borderColor:"#000000",
					borderWidth:1,
					mouseOverColor:"rgba(0,0,0,0)",
					mouseOverBoderColor:"#03feef",
					mouseOverFontColor:"#03feef",
					fontColor:"#FFFACD",
					fontSize: 20,
					gapWidth:20
	 * 3，其他配置：
	 * 	PageNum:0,					页总数
		MaxPageNum:99,				最大页数
		PrePageContent:"<<",		上一页的表现
		LastPageContent:">>",		下一页的表现
		CurrentPageNum:1,			当前页数
	 * 
	 * */
	
	//无任何配置 （简单的上下页）
	$("#wq").pageComponent();
	
	 //分页组件 有页码的
    var pageOptions= {
    	//点击按钮的回调事件
	    pageItemClick:function(pageNum){
	    			$("#tt").text("当前页为："+pageNum);
					console.log("自定义函数操作（参数为当前的页数，注：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		PageNum:8,
    };
    
    $("#hh").pageComponent(pageOptions);
    
    var pageOptions1= {
    	//点击按钮的回调事件
	    pageItemClick:function(pageNum){
	    			var str = ["上一页","下一页"]
	    			$("#yy").text("当前页为："+ str[pageNum == 0 ? 0:1]);
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
	
    var pageOptions= {
    	//点击按钮的回调事件
	    pageItemClick:function(pageNum){
	    			$("#tt").text("当前页为："+pageNum);
					console.log("自定义函数操作（参数为当前的页数，注：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			backgroundColor:"rgba(3,254,239,0.8)",
		},
		PageNum:5,
    };
    
   	$("#qq").pageComponent(pageOptions);
   	
   	var pageOptions= {
   		//点击按钮的回调事件
	    pageItemClick:function(pageNum){
	    			var str = ["上一页","下一页"]
	    			$("#yy").text("当前页为："+ str[pageNum == 0 ? 0:1]);
					console.log("自定义函数操作（参数为当前的页数，注：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			backgroundColor:"rgba(3,254,239,0.8)",
		},
		PageNum:0,
    };
    
  	$("#ll").pageComponent(pageOptions);
  	
});