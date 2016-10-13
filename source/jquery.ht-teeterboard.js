(function($){
    "use strict";
    $.fn.extend({
        'addTeeterboard': function(deg, persp){
            var moveDegree = deg || 3;
            var perspective = persp || 800;
            $(this).on('mouseover mousemove', function(ev){
                var event = ev || window.event;
                var diffX = ev.pageX - $(this).offset().left - $(this).outerWidth() / 2;
                var diffY = ev.pageY - $(this).offset().top - $(this).outerHeight() / 2;
                var tempX = - diffX / ($(this).outerWidth() / 2);
                var tempY = - diffY / ($(this).outerHeight() / 2);
                if(diffX < 0 && diffY < 0){
                    $(this).css({
                        'transform': 'perspective(' + perspective + 'px) rotateY(' + - moveDegree * ( - Math.pow(tempX, 2) + 2 * tempX) + 'deg) rotateX(' + moveDegree * ( - Math.pow(tempY, 2) + 2 * tempY) + 'deg)'
                    });
                }else if(diffX > 0 && diffY < 0){
                    tempX = - tempX;
                    $(this).css({
                        'transform': 'perspective(' + perspective + 'px) rotateY(' + moveDegree * ( - Math.pow(tempX, 2) + 2 * tempX) + 'deg)rotateX(' + moveDegree * ( - Math.pow(tempY, 2) + 2 * tempY) + 'deg)'
                    });
                }else if(diffX < 0 && diffY > 0){
                    tempY = - tempY;
                    $(this).css({
                        'transform': 'perspective(' + perspective + 'px) rotateY(' + - moveDegree * ( - Math.pow(tempX, 2) + 2 * tempX) + 'deg) rotateX(' +  - moveDegree * ( - Math.pow(tempY, 2) + 2 * tempY) + 'deg)'
                    });
                }else if(diffX > 0 && diffY > 0){
                    tempX = - tempX;
                    tempY = - tempY;
                    $(this).css({
                        'transform': 'perspective(' + perspective + 'px) rotateY(' + moveDegree * ( - Math.pow(tempX, 2) + 2 * tempX) + 'deg)rotateX(' +  - moveDegree * ( - Math.pow(tempY, 2) + 2 * tempY) + 'deg)'
                    });
                }
            });
            $(this).on('mouseout', function(){
                $(this).css({
                    'transform': 'translateX(0)'
                });
            });
            return $(this);
        }
    });
})(jQuery);
