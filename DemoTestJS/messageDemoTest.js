$(document).ready(function(){
	
	console.log("Message component Test");
	
});

var options = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
}

var options1 = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"center",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
}

var options2 = {
	MessageType:"important",			//common 普通消息, important 重要提示消息
    position:"bottom",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
}

var options3 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
	
}

var options4 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"center",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
}

var options5 = {
	MessageType:"common",			//common 普通消息, important 重要提示消息
    position:"top",						///消息提示框的位置， 上 top   中center   下bottom
	content:"这是是配置的提示！！",
	
}


function show(index){
	switch (index){
		case 1: $("#yy").message(options).show();
			break;
		case 2: $("#yy").message(options1).show();
			break;
		case 3: $("#yy").message(options2).show();
			break;
		case 4: $("#yy").message(options3).show();
			break;
		case 5: $("#yy").message(options4).show();
			break;
		case 6: $("#yy").message(options5).show();
			break;
		default:
			break;
	}
	console.log(index);
}
