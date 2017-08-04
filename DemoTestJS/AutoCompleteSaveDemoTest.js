$(document).ready(function(){
	
	 console.log("自动保存输入组件测试");
	/**
	 * 自动保存输入的组件：
	 * 1，配置点击 事件  ：
	 * 
	 * 2，css配置（见名知义）：
	 * 		width:null,								//
    		height:null,							//线框的宽度  0 则表示没有
    		borderTopW:1,
    		borderBottomW:0,
    		borderRightW:0,
    		borderColor:"#ffffff",
    		bgColor:"rgba(256,256,256,0.8)",
    		mouseOverColor:"#EEB422",				//鼠标进入的颜色
    		mouseOutColor:"#EEE5DE"		
	 * 
	 * 3，其他配置：
	 * 	AutoSwitch:true,							//开关
    	Input: null,								//自定义输入变化函数
    	Propertychange:null,						//自定义输入变化函数
    	Change:null,								//自定义输入变化函数
    	MaxLine:5,									//内容提示最大数目
	 * */
	//账号保存本地  提示组件
	var options = {
      	css:{
//  		width:null,								//
//  		height:60,							//线框的宽度  0 则表示没有
    		borderTopW:1,
    		borderBottomW:0,
    		borderRightW:0,
    		borderColor:"#ffffff",
    		bgColor:"#EEE5DE",
    		mouseOverColor:"#EEB887",				//鼠标进入的颜色
    	}
   };
    $("#inputTest").autoInput(options);
   
});