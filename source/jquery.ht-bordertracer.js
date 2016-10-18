/*jshint -W004*/
(function($) {
    "use strict";
    $.fn.extend({
        'addBordertracer': function(json) {
            // 根据参数初始化变量
            var argu = {
                color: 'rgb(194, 233, 144)',
                length: 80,
                borderWidth: 5,
                pace: 15,
                lineCap: 'round'
            };
            for(var x in json){
                argu[x] = json[x];
            }
            argu.halfBorderWidth = argu.borderWidth / 2;
            // 声明定时器
            var timerTop;
            var timerRight;
            var timerBottom;
            var timerLeft;
            // 鼠标移入
            $(this).on('mouseenter', function(ev) {
                // 初始化变量
                var width = $(this).outerWidth();
                var height = $(this).outerHeight();
                var iTop = -argu.length;
                var iRight = -argu.length;
                var iBottom = width + argu.length;
                var iLeft = height + argu.length;
                // 为元素增加canvas子元素
                var tmpString = '<canvas id="tracer" width="' + width + '" height="' + height + '" style="position:absolute">';
                $(this).append(tmpString);
                // 声明运动函数
                var iAddTop = function(pace){
                    iTop += pace;
                    return iTop - pace;
                };
                var iAddRight = function(pace){
                    iRight += pace;
                    return iRight - pace;
                };
                var iAddBottom = function(pace){
                    iBottom -= pace;
                    return iBottom + pace;
                };
                var iAddLeft = function(pace){
                    iLeft -= pace;
                    return iLeft + pace;
                };
                // 声明上下左右运动
                var startTop = function(){
                    var flag = false;
                    timerTop = setInterval(function(){
                        var canvas = $('#tracer')[0];
                        if(!canvas) return false;
                        var ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, width, argu.borderWidth);
                        ctx.beginPath();
                        ctx.lineCap = 'round';
                        ctx.moveTo(iTop, argu.halfBorderWidth);
                        ctx.lineTo(argu.halfBorderWidth + argu.length + iAddTop(argu.pace), argu.halfBorderWidth);
                        ctx.lineWidth = argu.borderWidth;
                        ctx.strokeStyle = argu.color;
                        ctx.stroke();
                        ctx.closePath();
                        if((iTop + argu.length) > width){
                            if(!flag){
                                startRight();
                                flag = !flag;
                            }
                        }
                        if(iTop > width){
                            ctx.clearRect(0, 0, width, argu.borderWidth);
                            clearInterval(timerTop);
                        }
                    }, 16);
                };
                var startRight = function(){
                    var flag = false;
                    timerRight = setInterval(function(){
                        var canvas = $('#tracer')[0];
                        if(!canvas) return false;
                        var ctx = canvas.getContext('2d');
                        ctx.clearRect(width - argu.borderWidth, 0, argu.borderWidth, height);
                        ctx.beginPath();
                        ctx.lineCap = 'round';
                        ctx.moveTo(width - argu.halfBorderWidth, iRight);
                        ctx.lineTo(width - argu.halfBorderWidth, argu.halfBorderWidth + iAddRight(argu.pace) + argu.length);
                        ctx.lineWidth = argu.borderWidth;
                        ctx.strokeStyle = argu.color;
                        ctx.stroke();
                        ctx.closePath();
                        if((iRight + argu.length) > height){
                            if(!flag){
                                startBottom();
                                flag = !flag;
                            }
                        }
                        if(iRight > height){
                            ctx.clearRect(width - argu.borderWidth, 0, argu.borderWidth, height);
                            clearInterval(timerRight);
                        }
                    }, 16);
                };
                var startBottom = function(){
                    var flag = false;
                    timerBottom = setInterval(function(){
                        var canvas = $('#tracer')[0];
                        if(!canvas) return false;
                        var ctx = canvas.getContext('2d');
                        ctx.clearRect(0, height - argu.borderWidth, width, height);
                        ctx.beginPath();
                        ctx.lineCap = 'round';
                        ctx.moveTo(iBottom, height - argu.halfBorderWidth);
                        ctx.lineTo(argu.halfBorderWidth - argu.length + iAddBottom(argu.pace), height - argu.halfBorderWidth);
                        ctx.lineWidth = argu.borderWidth;
                        ctx.strokeStyle = argu.color;
                        ctx.stroke();
                        ctx.closePath();
                        if(iBottom < argu.length){
                            if(!flag){
                                startLeft();
                                flag = !flag;
                            }
                        }
                        if(iBottom < 0){
                            ctx.clearRect(0, height - argu.borderWidth, width, height);
                            clearInterval(timerBottom);
                        }
                    }, 16);
                };
                var startLeft = function(){
                    var flag = false;
                    timerLeft = setInterval(function(){
                        var canvas = $('#tracer')[0];
                        if(!canvas) return false;
                        var ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, argu.borderWidth, height);
                        ctx.beginPath();
                        ctx.lineCap = 'round';
                        ctx.moveTo(argu.halfBorderWidth, iLeft);
                        ctx.lineTo(argu.halfBorderWidth, argu.halfBorderWidth + iAddLeft(argu.pace) - argu.length);
                        ctx.lineWidth = argu.borderWidth;
                        ctx.strokeStyle = argu.color;
                        ctx.stroke();
                        ctx.closePath();
                        if(iLeft < argu.length){
                            if(!flag){
                                iTop = -argu.length;
                                iRight = -argu.length;
                                iBottom = width + argu.length;
                                startTop();
                                flag = !flag;
                            }
                        }
                        if(iLeft < 0){
                            ctx.clearRect(0, 0, argu.borderWidth, height);
                            clearInterval(timerLeft);
                            iLeft = height + argu.length;
                        }
                    }, 16);
                };
                startTop();
            });
            $(this).on('mouseleave', function() {
                clearInterval(timerTop);
                clearInterval(timerRight);
                clearInterval(timerBottom);
                clearInterval(timerLeft);
                $(this).children(':last').remove();
            });
            return $(this);
        }
    });
})(jQuery);
