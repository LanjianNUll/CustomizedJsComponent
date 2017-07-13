$(document).ready(function(){
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
    $("#inputTest1").autoInput(options);
    
    var pageOptions= {
	    pageItemClick:function(pageNum){
					console.log("自定义函数操作（参数为当前的页数，另：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			width: 600,
			height:60,
			circleWidth:60,
			circleHeight:60,
			radius:30,
			backgroundColor:"#FEEFFF",
			boder:"solid",
			borderColor:"#000000",
			borderWidth:1,
			mouseOverColor:"#4876FF",
			mouseOverFontColor:"#ffffff",
			fontColor:"#123456",
			fontSize: 20,
			gapWidth:20
		},
		PageNum:5,
		MaxPageNum:5,
		CurrentPageNum:1,
		PrePageContent:"<<",
		LastPageContent:">>"
		
    };
    
    $("#hh").pageComponent(pageOptions);
   
    var pageOptions1= {
	    pageItemClick:function(pageNum){
					console.log("自定义函数操作（参数为当前的页数，另：0  表示上一页   -1 表示下一页）： "+pageNum);
				},
		css:{
			width: 600,
			height:60,
			circleWidth:120,
			circleHeight:60,
			radius:30,
			backgroundColor:"#FEEFFF",
			boder:"solid",
			borderColor:"#000000",
			borderWidth:1,
			mouseOverColor:"#4876FF",
			mouseOverFontColor:"#ffffff",
			fontColor:"#123456",
			fontSize: 20,
			gapWidth:20
		},
		PrePageContent:"上一页",
		LastPageContent:"下一页"
    };
   
    $("#ss").pageComponent(pageOptions1);
    
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
			backgroundColor:"#48D1CC",
			boder:"solid",
			borderColor:"#48D1CC",
			borderWidth:0,
			mouseOverColor:"#000000"
		},
		leftImagePath:"img/add.png",
		rightImagePath:"img/trian_left.png"
	};
	
    $("#dd").leftAndRightBtn(pageOptions22);
});