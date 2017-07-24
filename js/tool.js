/*工具类  扩展方法*/

  jQuery.extend({
              // 设置 apDiv
            HideNode:function (div) {
            	
            	div.css({
            		"display":"none"
            	});
            },
            ShowNode:function(div){
            	div.css({
            		"display":""
            	});
            }
            
      });  
