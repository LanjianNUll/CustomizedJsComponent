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
     
		css:{
			width: 400,
			height:60,
			circleWidth:60,
			radius:30,
			backgroundColor:null,
			boder:"solid",
			borderColor:"#000000",
			borderWidth:1,
			mouseOverColor:"#148586",
			mouseOverFontColor:"#ffffff",
			fontColor:"#148586",
			fontSize: 40
		},
    };
    
    
    $("#hh").pageComponent(pageOptions);
   
    
});