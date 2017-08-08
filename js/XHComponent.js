//星火组件库
(function($, window, undefined) {
    'use strict';
	console.log("xhComponent");
    /* Check jquery */
    if(typeof($) === 'undefined') throw new Error('XHUI requires jQuery');

    // XHUI shared object
    if(!$.xhui) $.xhui = function(obj) {
        if($.isPlainObject(obj)) {
            $.extend($.xhui, obj);
        }
    };
});