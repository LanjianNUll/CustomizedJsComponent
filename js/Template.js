(function($,doucument){
	
	var NAME = "ComponetName",
	DEFAULTS = {
    	
    };
	
	var idIncrementer = 0;
	
	var ComponetName = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	ComponetName.DEFAULTS = DEFAULTS;
    ComponetName.NAME     = NAME;
    
    //初始化
    ComponetName.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id;
	}
    
    //入口方法
     $.fn.componetName = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.ComponetName')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.ComponetName', (data = new ComponetName(this, options)))
        })
    }
    
    //构造
    $.fn.componetName.Constructor = ComponetName;
}(jQuery, document))
