
(function($, document){
	
	var NAME = "AUTOCOMPLETE",
	DEFAULTS = {
    	AutoSwitch:true,							//开关
    	Input: null,								//自定义输入变化函数
    	Propertychange:null,						//自定义输入变化函数
    	Change:null,								//自定义输入变化函数
    	MaxLine:5,	//内容提示最大数目
    	css:{
    		width:null,								//
    		height:null,							//线框的宽度  0 则表示没有
    		borderTopW:1,
    		borderBottomW:0,
    		borderRightW:0,
    		borderColor:"#ffffff",
    		bgColor:"#EEE5DE",
    		mouseOverColor:"#EEB422",				//鼠标进入的颜色
    		mouseOutColor:"#EEE5DE"
    	}
    };
   
	var idIncrementer = 0;
	var AutoComplete = function(element,options){
		var that     = this;
        that.$       = $(element);
        that.id      = idIncrementer++;
        that.options = $.extend({}, DEFAULTS, that.$.data(), options);
        that.init();
	}
	
	AutoComplete.DEFAULTS = DEFAULTS;
    AutoComplete.NAME     = NAME;
    
    //初始化
    AutoComplete.prototype.init = function(){
    	console.log("init");
    	var that       = this,
            $root      = that.$,
            eventSuffix    = '.' + NAME + '.' + that.id,
            InputEvent = "input"+eventSuffix
            PropertychangeEvent = "propertychange"+eventSuffix,
            ChangeEvent   = "change"+eventSuffix;
       if(that.options.AutoSwitch){
       		//开启提示账号
       }
    	//保存初始化
    	that.store	 = new Store();
    	//清理
        //that.store.pageClear();
    	//添加几个测试
        //that.store.pageSet(that.id,["a","abc","abcdd","adf"]);
    	//创建一个父节点来放置
    	var parent = $("<div>");
    	var left = that.$.offset().left
		var top = that.$.offset().top+that.$.outerHeight(true);
		var posi = that.$.css('position');
    	parent.css({"background-color":"#FFFFFF",
					"position":"absolute",
			  		"left": left+"px",
			  		"top" : top + "px",
			  		"width":that.$.outerWidth(true) + "px"
					});
		//创建一个div包裹input			
		var div = $("<div>");
		that.$.appendTo(div);
    	parent.appendTo(div);
    	div.appendTo("body");
    	
    	//定义item的宽高
		var itemH = that.options.css.width || that.$.outerHeight(true);
		var itemW = that.options.css.height || that.$.outerWidth(true);
    	var borderTopW = that.options.css.borderTopW || 0,
    		borderBottomW = that.options.css.borderBottomW || 0,
    		borderLeftW = that.options.css.borderLeftW || 0,
    		borderRightW = that.options.css.borderRightW || 0;
    	var borderColor = that.options.css.borderColor || "#ffffff";
    	var bgColor = that.options.css.bgColor || "#EEE5DE",
    		mouseOverColor = that.options.css.mouseOverColor || "#EEB422",
    		mouseOutColor = that.options.css.mouseOutColor || "#EEE5DE";
    	
    	var OnInput = function(event){
    		var dataary = [];
    		var getDisk = that.store.pageGet(that.id);
	    	if(getDisk){
	    		for (var i = 0; i < getDisk.length; i++) { 
				    dataary.push(getDisk[i]);
				  } 
	    	}
    		//把之前的销毁
    		parent.empty();
    		if(!that.options.Input){
	    		var str = that.$.val();
	    		var displayStrArr = [];
	    		for(var i = 0; i< dataary.length;i++){
	    			if(dataary[i].indexOf(str)!=-1){
	    				displayStrArr.push(dataary[i]);
	    			}
	    		}
	    		
	    		//创建div
	    		for(var i = 0; i< displayStrArr.length;i++){
	    			var newDivNode = $("<div>").attr({"id":i,"flag":"div"});
	    			newDivNode.addClass("newDiv");
	    			newDivNode.css("z-index",99);
	    			newDivNode.css({ "background-color":bgColor,
	    							 "postion":"absolute",
	    							 "border":"solid",
	    							 "border-left" : borderLeftW +"px solid",
	    							 "border-right" : borderRightW +"px solid",
	    							 "border-bottom" : borderBottomW +"px solid",
	    							 "border-top":   borderTopW + "px solid",
	    							 "bordercolor":borderColor,
	    							 "height":itemH + "px",
	    							 "width":itemW + "px",
	    							 "line-height": itemH +"px"    //居中
	    							});
	    			//鼠标移动到选项上
	    			newDivNode.mouseover(function(e){
	    				$(e.target).css({"background-color":mouseOverColor});
	    			});
	    			//鼠标离开
	    			newDivNode.mouseout(function(e){
	    				$(e.target).css({"background-color":mouseOutColor});
	    			});
	    			//p标签
	    			var newP = $("<p>").attr({"flag":"p"});
	    			newP.css({"display":"inline"});
	    			newP.css.Height = that.$.outerHeight(true) + 'px';
	    			newP.css.width = that.$.outerWidth(true) + 'px';//设置提示框与输入框宽度一致 
	    			newP.text(displayStrArr[i]);
	    			newP.appendTo(newDivNode);
	    			
	    			newDivNode.click(function(e) {
	    				if($(e.target).attr("flag") == "div")
	    				{
	    					that.$.val($(e.target).find("p").text());
                           	//把之前的销毁
    						parent.empty();
	    				}
                    });
	    			newDivNode.appendTo(parent);
	    			//添加右侧侧按钮
	    			var btn = $("<button>").attr({"id":i+"button","flag":"btn"});
	    			btn.appendTo(newDivNode);
	    			//clear清除浮动样式
	    			btn.css({"clear":"both","float":"right"});
	    			btn.text("X");
	    			
	    			btn.click(function(e) {
	    				if($(e.target).attr("flag") == "btn")
	    				{
	    					var deleteStr = $(e.target).prev("p").text();
	    					$(e.target).parent("div.newDiv").hide();
	    					//从本地资源删除
	    					var arrayNew = [];
	    					var fileData = that.store.pageGet(that.id);
	    					for(var i =0;i<displayStrArr.length;i++)
	    					{
	    						if(displayStrArr[i]!=deleteStr)
	    						{
	    							arrayNew.push(displayStrArr[i]);
	    						}
	    					}
	    					//保存到本地
	    					that.store.pageSet(that.id,arrayNew);
    					}
                    });
	    		}
	    	}else{
	    		that.options.Input();
	    	}
    	}
    	var OnPropertychange = function(event){
    		if(!that.options.Propertychange){
	    		console.log("onPropertychange"+that.id);
	    	}else{
	    		that.options.Propertychange();
	    	}
    	}
    	
    	var OnChange = function(event){
    		if(!that.options.Change){
	    		console.log("onchnge"+that.id);
	    	}else{
	    		that.options.Change();
	    	}
	    	//获取
	    	var arr = that.store.pageGet(that.id);
	    	if(!arr){
	    		arr = [];
	    	}
	    	var str = that.$.val();
	    	if(str){
	    		var isExist = false;
	    		//去除相同的
	    		for(var i = 0; i<arr.length; i++){
	    			if(str == arr[i]){
	    				isExist = true;
	    			}
	    		}
	    		if(!isExist){
	    			arr.push(str);
	    		}
	    	}
	    	//保存到本地
	    	that.store.pageSet(that.id,arr);
    	}
    	
    	$root.on(InputEvent, OnInput);
    	$root.on(PropertychangeEvent, OnPropertychange);
    	$root.on(ChangeEvent, OnChange);
    }
    
    //入口方法
    $.fn.autoInput = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('xh.autocomplete')
            var options = typeof option == 'object' && option
            if(!data) $this.data('xh.autocomplete', (data = new AutoComplete(this, options)))
        })
    }
    
    //构造
    $.fn.autoInput.Constructor = AutoComplete;
    
    
    //利用zui的store.js存储本地化
/* ========================================================================
 * ZUI: storeb.js
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014-2016 cnezsoft.com; Licensed MIT
 * ======================================================================== */
    var lsName = 'localStorage';
    var storage,
        dataset,
        pageName = 'page_' + window.location.pathname + window.location.search;

    /* The Store object */
    var Store = function() {
        this.slience = true;
        try {
            if((lsName in window) && window[lsName] && window[lsName].setItem) {
                this.enable = true;
                storage = window[lsName];
            }
        } catch(e){}
        if(!this.enable) {
            dataset = {};
            storage = {
                getLength: function() {
                    var length = 0;
                    $.each(dataset, function() {
                        length++;
                    });
                    return length;
                },
                key: function(index) {
                    var key, i = 0;
                    $.each(dataset, function(k) {
                        if(i === index) {
                            key = k;
                            return false;
                        }
                        i++;
                    });
                    return key;
                },
                removeItem: function(key) {
                    delete dataset[key];
                },
                getItem: function(key) {
                    return dataset[key];
                },
                setItem: function(key, val) {
                    dataset[key] = val;
                },
                clear: function() {
                    dataset = {};
                }
            };
        }
        this.storage = storage;
        this.page = this.get(pageName, {});
    };

    /* Save page data */
    Store.prototype.pageSave = function() {
        if($.isEmptyObject(this.page)) {
            this.remove(pageName);
        } else {
            var forDeletes = [],
                i;
            for(i in this.page) {
                var val = this.page[i];
                if(val === null)
                    forDeletes.push(i);
            }
            for(i = forDeletes.length - 1; i >= 0; i--) {
                delete this.page[forDeletes[i]];
            }
            this.set(pageName, this.page);
        }
    };

    /* Remove page data item */
    Store.prototype.pageRemove = function(key) {
        if(typeof this.page[key] != 'undefined') {
            this.page[key] = null;
            this.pageSave();
        }
    };

    /* Clear page data */
    Store.prototype.pageClear = function() {
        this.page = {};
        this.pageSave();
    };

    /* Get page data */
    Store.prototype.pageGet = function(key, defaultValue) {
        var val = this.page[key];
        return(defaultValue !== undefined && (val === null || val === undefined)) ? defaultValue : val;
    };

    /* Set page data */
    Store.prototype.pageSet = function(objOrKey, val) {
        if($.isPlainObject(objOrKey)) {
            $.extend(true, this.page, objOrKey);
        } else {
            this.page[this.serialize(objOrKey)] = val;
        }
        this.pageSave();
    };

    /* Check enable status */
    Store.prototype.check = function() {
        if(!this.enable) {
            if(!this.slience) throw new Error('Browser not support localStorage or enable status been set true.');
        }
        return this.enable;
    };

    /* Get length */
    Store.prototype.length = function() {
        if(this.check()) {
            return storage.getLength ? storage.getLength() : storage.length;
        }
        return 0;
    };

    /* Remove item with browser localstorage native method */
    Store.prototype.removeItem = function(key) {
        storage.removeItem(key);
        return this;
    };

    /* Remove item with browser localstorage native method, same as removeItem */
    Store.prototype.remove = function(key) {
        return this.removeItem(key);
    };

    /* Get item value with browser localstorage native method, and without deserialize */
    Store.prototype.getItem = function(key) {
        return storage.getItem(key);
    };

    /* Get item value and deserialize it, if value is null and defaultValue been given then return defaultValue */
    Store.prototype.get = function(key, defaultValue) {
        var val = this.deserialize(this.getItem(key));
        if(typeof val === 'undefined' || val === null) {
            if(typeof defaultValue !== 'undefined') {
                return defaultValue;
            }
        }
        return val;
    };

    /* Get item key by index and deserialize it */
    Store.prototype.key = function(index) {
        return storage.key(index);
    };

    /* Set item value with browser localstorage native method, and without serialize filter */
    Store.prototype.setItem = function(key, val) {
        storage.setItem(key, val);
        return this;
    };

    /* Set item value, serialize it if the given value is not an string */
    Store.prototype.set = function(key, val) {
        if(val === undefined) return this.remove(key);
        this.setItem(key, this.serialize(val));
        return this;
    };

    /* Clear all items with browser localstorage native method */
    Store.prototype.clear = function() {
        storage.clear();
        return this;
    };

    /* Iterate all items with callback */
    Store.prototype.forEach = function(callback) {
        var length = this.length();
        for(var i = length - 1; i >= 0; i--) {
            var key = storage.key(i);
            callback(key, this.get(key));
        }
        return this;
    };

    /* Get all items and set value in an object. */
    Store.prototype.getAll = function() {
        var all = {};
        this.forEach(function(key, val) {
            all[key] = val;
        });

        return all;
    };

    /* Serialize value with JSON.stringify */
    Store.prototype.serialize = function(value) {
        if(typeof value === 'string') return value;
        return JSON.stringify(value);
    };

    /* Deserialize value, with JSON.parse if the given value is not a string */
    Store.prototype.deserialize = function(value) {
        if(typeof value !== 'string') return undefined;
        try {
            return JSON.parse(value);
        } catch(e) {
            return value || undefined;
        }
    };
    
}(jQuery, document))


