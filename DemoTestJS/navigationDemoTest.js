$(document).ready(function(){
	
	
	console.log("navigationDemoTest start");
	
	var options = {
		//data是 json对象 
		//data是一个数组 是最外的导航栏
		//data.subdata  是次级菜单数组
		//data.subdata.subdata   是 次次级菜单数组
		data:[
    		{icon:"../img/教务-事务跟进拷贝.png",title:"这默认标题1",
    				subdata:[
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题11",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    					]
    				},
    				{
    					icon:"../img/教务-事务跟进拷贝.png.png",content:"子标题12",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题13",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子标题");}},
    					]
    				}
    				]
    		},
    		
    		{icon:"../img/矢量智能对象.png",title:"这默认标题2",
    				subdata:[
    				{
    					icon:"../img/行政执法拷贝.png",content:"子标题111",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题2222",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子子标题");}},
    					]
    				},
    				]
    		},
    		
    		{icon:"../img/矢量智能对象.png",title:"这默认标题3",
    				subdata:[
    				{
    					icon:"../img/行政执法拷贝.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				},
    				{
    					icon:"../img/矢量智能对象.png",content:"子标题",click:function(){console.log("你点击了次级标题");},
    					subdata:[
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    						{icon:"",content:"子子标题",click:function(){console.log("你点击了子吱吱标题");}},
    					]
    				}
    				]
    		}
    		
    	],
	}
	
	$("#ff").navigation(options);
	
});