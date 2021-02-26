/*
    obj: 要获取样式的元素
    name: 要获取的样式名
*/
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        //ie8
        return obj.currentStyle[name];
    }
}

//动画函数封装
/*
    obj:要执行动画的对象
    attr:要执行动画的样式，如left top width height
    target:执行动画的目标位置
    speed:移动速度(整数向右，负数向左)
    callback:回调函数，在动画执行完毕后执行
*/

function move(obj,attr,target,speed,callback){
    //关闭上一个定时器
    clearInterval(obj.timer);
    //获取元素的当前样式
    var current = parseInt(getStyle(obj,attr));

    //判断速度正负值
    if(current > target){
        speed = -speed;
    }
    //开启定时器，用来执行动画效果
    //向执行动画的对象中添加一个timer属性，保存自己的定时器标识，这样如果想暂停动画效果，再次触发move函数即可；
    obj.timer = setInterval(() => {
        var oldVal = parseInt(getStyle(obj,attr));
        var newVal = oldVal + speed;
        if(speed < 0 && newVal < target || speed>0 && newVal >target){
            newVal = target;
        }
        obj.style[attr] = newVal + 'px';
        //当元素移动到指定值后，停止动画，执行callback
        if(newVal == target){
            clearInterval(obj.timer);
            callback && callback()
        }
    }, 30);


}

//浏览器类型
function whichBro(){
     //捕获浏览器
     var  ua = navigator.userAgent;
     if(/firefox/i.test(ua)){
         alert('火狐');
     }else if(/chrome/i.test(ua)){
         alert('谷歌');
     }else if(/msie/i.test(ua)){
         alert('ie');
     }else if('ActiveXObject' in Window){
         alert('ie11')
     }
}

//添加类属性

function addClass(obj,cls){
    var reg = new RegExp('\\b'+ cls + '\\b');
    !reg.test(obj.className) && (obj.className += ` ${cls}`);
}
//删除属性
function removeClass(obj,cls){
    var reg = new RegExp('\\b' + cls + '\\b');
    obj.className = obj.className.replace(reg,'');
}
//切换属性
function toggleCls(obj,cls){
    if(hasCls(obj,cls)){
        removeClass(obj,cls);
    }else{
        addClass(obj,cls)
    }
}
function hasCls(obj,cls){
   var reg = new RegExp('\\b'+ cls + '\\b');
   return reg.test(obj.className);
}