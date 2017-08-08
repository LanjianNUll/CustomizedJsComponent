/**
	 * 悬浮提示组件：
	 * 1，配置点击 事件  ：clickClose:function(){}   点击关闭按钮
	 * 
	 * 2，css配置（见名知义）：
	 * 		height:30,
    		fontSize:16,
    		boder:1,
    		fontColor:"#ffffff",
    		bgColor:"rgba(3,254,239,1)",
    		contentColor:"rgba(3,254,239,0.8)",
    		btnWidth:30,
    		iconWidth:30,
    		radius:20,
    		imgWidth:10,
    		imgHeight:10		
	 * 
	 * 3，其他配置：
	 * 	MessageType:"important",			//common 普通消息, important 重要提示消息
  	    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
    	content:"这里是默认的提示！！",
    	btnImg:"../img/close.png",							
	 * */

var options0 = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是重要配置的提示零！！",
}

var options1 = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"center",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示一略s略略！！",
}

var options2 = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"bottom",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示二！！",
}

var options3 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示三！！",
	
}

var options4 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"center",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示四！！",
}

var options5 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"bottom",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示五！！",
	
}

var objArr = [
	$("#yy").message(options0),
	$("#yy").message(options1),
	$("#yy").message(options2),
	$("#yy").message(options3),
	$("#yy").message(options4),
	$("#yy").message(options5)
];

function show(index){
	if(index == 1)
		$("#yy").message(options0).show();
	if(index == 2)
		$("#yy").message(options1).show();
	if(index == 3)
		$("#yy").message(options2).show();
	if(index == 4)
		$("#yy").message(options3).show();
	if(index == 5)
		$("#yy").message(options4).show();
	if(index == 6)
		$("#yy").message(options5).show();
}

