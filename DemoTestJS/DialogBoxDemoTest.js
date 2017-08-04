/**
	 * 对话框组件：
	 * 1，配置点击 事件  ：
	 * 
	 * 2，css配置（见名知义）：
	 * 		left:0,
			top:0,
			width:0,
			height:0,
			bgColor:"rgba(0,0,0,0.5)",
			boderColor:"rgba(3,254,239,1)",
			boderRidius:5,
			fontColor:"#ffffff",	
	 * 
	 * 3，其他配置：
	 * //按钮配置 用个json数组配置显示文字和点击回调函数
	 * 		buttonData:[
			{text:"关闭",click:function(){console.log("点击关闭按钮");}},
			{text:"取消",click:function(){console.log("点击取消按钮");}},
			{text:"保存",click:function(){console.log("点击保存按钮");}}
			],
			title:"标题",
			content:"内容内容。。。。。",				
	 * */
var options = {
    buttonData:[
		{text:"取消",click:function(){console.log("点击关闭按钮");}},
		{text:"关闭",click:function(){console.log("点击关闭按钮");}}
	],
	title:"配置两个按钮",
	content:"配置两个按钮。。。。。",
   };
   
var options1 = {
    buttonData:[
		{text:"关闭",click:function(){console.log("点击关闭按钮");}},
	],
	title:"配置一个按钮",
	content:"配置一个按钮配置一个按钮配置一个按钮配置一个按钮。。。。。",
   };
var ff = $('#bb').dialogBox();
var dd = $('#bb').dialogBox(options);
var sx = $('#bb').dialogBox(options1);
function clickBtn(i){
	switch (i){
		case 1:ff.showDialog();
			break;
		case 2:dd.showDialog();
			break;
		case 3:sx.showDialog();
			break;
		default:
			break;
	}
}
