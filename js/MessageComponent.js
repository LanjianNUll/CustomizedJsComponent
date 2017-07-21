(function($,doucument){
	
	var NAME = "Message",
	DEFAULTS = {
    	
    };
	
	var idIncrementer = 0;
	
	var Message = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	Message.DEFAULTS = DEFAULTS;
    Message.NAME     = NAME;
    
    //初始化
    Message.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id
        var messageDiv = CreateMessageDiv(that);
        messageDiv.appendTo("body");
            
	}
    
    function CreateMessageDiv(that){
    	var div = $("<div>");
    	div.css({
    		"position":"absolute",
    		"left":"50%",
    		"top":"50%",
    		"line-height":"30"+"px",
    		"border":"1"+"px",
    		"height":"30"+"px",
    		"display":"inline-block",
    		"*display":"inline",
    		"*zoom":"1",
    		"background-color":"rgba(3,254,239,0.8)",
    		"color":"#FFFFFF",
    		"font-weight":"bold"
    	});
    	div.text("这里是内容");
    	
    	console.log("自适应的宽度是："+div);
		console.log(div[0]);
    	return div;
    }
    
    //入口方法
     $.fn.message = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.Message')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.Message', (data = new Message(this, options)))
        })
    }
    
    //构造
    $.fn.message.Constructor = Message;
}(jQuery, document))
