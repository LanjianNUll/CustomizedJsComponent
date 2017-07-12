$(document).ready(function(){
	var options = {
	   AutoSwitch:true,
       Input:null,
       Propertychange: function(){
       		console.log("自定义输入改变函数Propertychange");
       },
       MaxLine:15,
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
  //  $("#hh").pageComponent(options);
   
    
});