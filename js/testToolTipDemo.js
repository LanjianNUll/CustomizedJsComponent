$(document).ready(function(){
	
	var options1 = {
		showDirection:"top",
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
	};
	
	var options2 = {
		showDirection:"bottom",
		title:"这里是标题",
		content:"这里是是内容",
		
	};
	
	var options3= {
		showDirection:"left",
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
	};
	
	var options4 = {
		showDirection:"right",
		title:"这里是标题",
		content:"这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容",
		
	};
	
	$("#e1").toolTip(options1);
	$("#e2").toolTip(options2);
	$("#e3").toolTip(options3);
	$("#e4").toolTip(options4);
});