$(document).ready(function(){
	
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