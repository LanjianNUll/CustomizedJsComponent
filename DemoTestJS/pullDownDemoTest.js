$(document).ready(function(){
	console.log("pullDownDemo test");
	///说明：  titlcontent和data的对应得  格式如下
	var adress = provice_city_area;
	var options = {
		titleContent:["省份","城市","区/县"],
		data:adress,
	}
	var options1 = {
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
});


var x1,x2,x3;
function getValue(){
		var str1 = 	x1.GetCurrentValue(),
			str2 =  x2.GetCurrentValue(),
			str3 =  x3.GetCurrentValue();
		console.log(str1+str2+str3);
		$("#value1").text("三联级菜单的值："+str1);
		$("#value2").text("二联级菜单的值："+str2);
		$("#value3").text("单个下拉框的值："+str3);
	}
