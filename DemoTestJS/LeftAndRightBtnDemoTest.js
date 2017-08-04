$(document).ready(function(){
	/**
	 * 左右按钮组件：
	 * 1，配置点击 事件  ：leftBtnClick:function(parm){}    左键点击事件
	 * 					rightBtnClick:function(parm){}    右键点击事件
	 * 
	 * 2，css配置（见名知义）：
	 * 		width: 120,
			height:40,
			radius:5,
			backgroundColor:"rgba(3,254,239,1)",
			boder:"solid",
			borderColor:"rgba(3,254,239,0.8)",
			borderWidth:0,
			mouseOverColor:"rgba(0,0,0,0.8)",
			clickColor:"#000000"		
	 * 
	 * 3，其他配置：
	 * 	ImageWidth:20,									图片的大小
		leftImagePath:"../img/trian_left.png",			图片的路径
		rightImagePath:"../img/trian_right.png",
		purePicBtn:false,								是否是纯图片按钮
		imgGapWidth:120,								纯图片按钮是的间距 （可能这里效果要多调）
	 * 
	 * */
	
	 $("#dd").leftAndRightBtn();
	 
	 var pageOptions22= {
	 	leftBtnClick:function(parm){
			console.log("leftBtn click");
				},
		rightBtnClick:function(parm){
			console.log("rightBtn click");
		},
		leftImagePath:"../img/add.png",
		rightImagePath:"../img/down.png"
	};
	
	$("#ff").leftAndRightBtn(pageOptions22);
	 
	var pageOptions1= {
		purePicBtn:true,
		imageWidth:40,
		leftImagePath:"../img/up.png",
		rightImagePath:"../img/down.png"
	};
	$("#hh").leftAndRightBtn(pageOptions1); 
	 
	var pageOpti= {
		purePicBtn:true,
		leftImagePath:"../img/right1.png",
		rightImagePath:"../img/left1.png"
	}; 
	$("#hg").leftAndRightBtn(pageOpti); 
	
	var pageO= {
		purePicBtn:true,
		leftImagePath:"../img/leftArrow.png",
		rightImagePath:"../img/rightArrow.png"
	}; 
	$("#hw").leftAndRightBtn(pageO); 

	var pa= {
		purePicBtn:true,
		leftImagePath:"../img/rightCircle.png",
		rightImagePath:"../img/leftCircle.png"
	}; 
	$("#ho").leftAndRightBtn(pa);
	
	var pqa= {
		imageWidth:30,
		purePicBtn:true,
		leftImagePath:"../img/addFrame.png",
		rightImagePath:"../img/subFrame.png",
		imgGapWidth:100,
	}; 
	$("#pp").leftAndRightBtn(pqa);
	
});