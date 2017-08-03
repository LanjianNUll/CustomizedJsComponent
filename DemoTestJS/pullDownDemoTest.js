$(document).ready(function(){
	/**
	 * 下拉菜单组件：
	 * 1，配置点击 事件  ：
	 * 
	 * 2，css配置（见名知义）：
	 * 		itemHeight:45,												//一致的高度
			boderRadius:5,
			fontColor:"#ffffff",
			titleWidth:100,
			titleBgColor:"rgba(3,254,239,0.8)",
			mouseOverColor:"rgba(0,0,0,0.5)",
			selectWidth:200,
			iconWidth:20,
			selectDivHeight:200,
			selectBgColor:'rgba(0,0,0,0.2)',		
	 * 
	 * 3，其他配置：
	 * 	title:"地址",						这个是头部的题标  如果不设置就没有头部
		pullDownIcon:"../img/up.png",		
		titleContent:[],					数组是控制多少个下拉菜单  数组值是默认的下拉菜单显示值
		data:[],							data是一个json对象数组  格式如下（或者参照 data文件下的provice_city_area.js）
	 * 
	 * */
	
	console.log("pullDownDemo test");
	///说明：  titlcontent和data的对应得  格式如下
	var adress = provice_city_area;
	var options = {
		title:"地址",
		titleContent:["省份","城市","区/县"],
		data:adress,
	}
	var options1 = {
		title:"地址",
		titleContent:["参数1","参数2"],
		data:[
			{ name:"省份0",city:[{name:"城市00"},{name:"城市01"},{name:"城市02"},{name:"城市023"}]
			},
			{ name:"省份1",city:[{name:"城市011"},{name:"城市0112"},{name:"城市0113"},{name:"城市114"}]
			},
			{ name:"省份2",city:[{name:"城市221"},{name:"城市2222"},{name:"城市2223"},{name:"城市2224"}]
			},
			{ name:"省份3",city:[{name:"城市331"},{name:"城市0"},{name:"城市0"},{name:"城市0"}]
			},
			{ name:"省份4",city:[{name:"城市331"},{name:"城市0"},{name:"城市0"},{name:"城市0"}]
			},
			{ name:"省份5",city:[{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"}]
			},
			{ name:"省份6",city:[{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"},{name:"城市0"}]
			},
		],
	}
	
	var options2 = {
		title:"地址",
		titleContent:["单个菜单"],
		data:[
			{ name:"省份0"
			},
			{ name:"省份1"
			},
			{ name:"省份2"
			},
			{ name:"省份3"
			},
			{ name:"省份4"
			},
			{ name:"省份5"
			},
			{ name:"省份6"
			},
		],
	}
	
	var options3 = {
		titleContent:["单个菜单"],
		data:[
			{ name:"省份0"
			},
			{ name:"省份1"
			},
			{ name:"省份2"
			},
			{ name:"省份3"
			},
			{ name:"省份4"
			},
			{ name:"省份5"
			},
			{ name:"省份6"
			},
		],
	}
	
	//三联级菜单
	x1 = $("#ff").pullDown(options);
	//二联级菜单
	x2 = $("#ff1").pullDown(options1);
	//单个下拉框
	x3 = $("#ff2").pullDown(options2);
	//无标题的
	//单个下拉框
	x4 = $("#ff3").pullDown(options3);
});


var x1,x2,x3,x4;
function getValue(){
		var str1 = 	x1.GetCurrentValue(),
			str2 =  x2.GetCurrentValue(),
			str3 =  x3.GetCurrentValue(),
			str4 =  x4.GetCurrentValue();
		console.log(str1+str2+str3);
		$("#value1").text("三联级菜单的值："+str1);
		$("#value2").text("二联级菜单的值："+str2);
		$("#value3").text("单个下拉框的值："+str3);
		$("#value4").text("无标题单个下拉框的值："+str4);
	}
