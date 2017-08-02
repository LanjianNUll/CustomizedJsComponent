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
            },
      });  
     
     
(function() {
    'use strict';
		//扩展数组的一些方法
    var STR_FUNCTION = 'function';

		/**
		 * 清空数组
 		*/
		if(!Array.prototype.clear){
			Array.prototype.clear = function(){
				if(!$.isArray(this))
          throw new TypeError("not a Array");
				var newArray = this.splice(0,this.length);
				return newArray;
			}
		}
		
		/**
		 * 深度copy数组
		 * */
		if(!Array.prototype.deepCopy){
			Array.prototype.deepCopy = function(){
				if(!$.isArray(this))
          throw new TypeError("not a Array");
				var newArray = [];
				this.forEach(function(val){
					newArray.push(val);
				});
				return newArray;
			}
		}

    /**
     *  Calls a function for each element in the array.
     */
    if(!Array.prototype.forEach) {
        Array.prototype.forEach = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this) {
                    fun.call(thisp, this[i], i, this);
                }
            }
        };
    }
    
     /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     */
    if(!Array.prototype.map) {
        Array.prototype.map = function(fun /*, thisp*/ ) {
            var len = this.length;
            if(typeof fun != STR_FUNCTION)
                throw new TypeError();

            var res = new Array(len);
            var thisp = arguments[1];
            for(var i = 0; i < len; i++) {
                if(i in this)
                    res[i] = fun.call(thisp, this[i], i, this);
            }

            return res;
        };
    }
     /**
     * Returns true if at least one element in this array satisfies the provided testing conditions.
     * @param  {function or plain object}  conditions
     * @return {Boolean}
     */
    if(!Array.prototype.has) {
        Array.prototype.has = function(conditions) {
            var result = false,
                cdt, ok, objVal;
            this.forEach(function(val) {
                ok = true;
                for(var key in conditions) {
                    cdt = conditions[key];
                    if(typeof cdt === STR_FUNCTION) {
                        ok = cdt(val);
                    } else {
                        objVal = val[key];
                        ok = (objVal && objVal === cdt);
                    }
                    if(!ok) break;
                }
                if(ok) {
                    result = true;
                    return false;
                }
            });

            return result;
        };
    }
    
    
    
}());      
