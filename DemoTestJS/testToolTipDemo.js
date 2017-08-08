$(document).ready(function(){
	/**
	 * 提示组件：
	 * 1，配置点击 事件  
	 * 
	 * 2，css配置（见名知义）：
	 * 		contentWidth:200,
			contentHeight:100,
			titleWidth: 200,
			titleHeight: 40,
			arrowWidth:30,
			titleBgColor:"rgba(0,0,0,0.8)",
			titleFontColor:"rgba(256,256,256,1)",
			contentFontColor:"rgba(256,256,256,1)",
			contentBgColor:"rgba(0,0,0,0.5)",
			arrowBgColor:"rgba(0,0,0,0.8)",
			boderRadius:5,		
	 * 
	 * 3，其他配置：
	 * 	showDirection:"right",					显示方向
		showTitle:false,						是否显示标题
		title:"这里是默认标题",
		content:"这里是默认内容这里是默认内容这里是默认内容这里是默认内容这里是内容这里是内容",				
	 * */
	
	var options1 = {
		showDirection:"top",
		showTitle:true,
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
	};
	var options2 = {
		showDirection:"bottom",
		showTitle:true,
		title:"这里是标题",
		content:"这里是是内容",
	};
	
	var options3= {
		showDirection:"left",
		showTitle:true,
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
	};
	var options4 = {
		showDirection:"right",
		showTitle:true,
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
	};
	
	var options5 = {
		showDirection:"top",
	};
	
	var options6 = {
		showDirection:"bottom",
	};
	
	var options7 = {
		showDirection:"left",
	};
	
	var options8 = {
		showDirection:"right",
	};
	
	$("#e1").toolTip(options1);
	$("#e2").toolTip(options2);
	$("#e3").toolTip(options3);
	$("#e4").toolTip(options4);
	$("#e5").toolTip(options5);
	$("#e6").toolTip(options6);
	$("#e7").toolTip(options7);
	$("#e8").toolTip(options8);
});