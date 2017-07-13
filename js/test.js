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
					console.log("自定义函数操作（参数为当前的页数）： "+pageNum);
				},
		css:{
			
			width: 600,
			height:60,
			circleWidth:60,
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
		CurrentPageNum:1
    };
    
    $("#hh").pageComponent(pageOptions);
   
    
});