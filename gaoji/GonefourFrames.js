/*Gonefour_boke*/

/**
 * 获取随机产生的十六进制颜色值
 * @returns {string|string} 返回字符串类型
 */
function getRandomColor() {
    var color = "#";
    //十六进制值的数组
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    for (var i = 0; i < 6; i++) {
        var index = parseInt(Math.random() * arr.length);
        color += arr[index];
    }
    return color;
}

/**
 *获取指定格式化的日期（如:xxxx年xx月xx日 xx时xx分xx秒）
 * @param date 日期对象
 * @returns {string} 返回字符串类型
 */
function getDate(date) {
    //获取年
    var year = date.getFullYear();
    //获取月
    var month = date.getMonth() + 1;
    //获取日
    var day = date.getDate();
    //获取时
    var hour = date.getHours();
    //获取分
    var minute = date.getMinutes();
    //获取秒
    var second = date.getSeconds();

    //月日时分秒如果小于10，前面加个0;
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second;
}


/**
 *id选择器
 * @param id id属性的值，string类型
 * @returns {HTMLElement}元素对象
 */
function id$(id) {
    return document.getElementById(id);
}

/**
 * 类选择器
 * @param cls class选择器，string类型
 * @returns {HTMLCollectionOf<Element>}数组元素对象
 */
function class$(cls) {
    return document.getElementsByClassName(cls);
}

/**
 * name选择器
 * @param name name选择器，string类型
 * @returns {NodeListOf<HTMLElement>} 数组元素对象
 */
function name$(name) {
    return document.getElementsByName(name);
}

/**
 * 标签选择器
 * @param name 标签属性的值,string类型
 * @returns {HTMLCollectionOf<HTMLElementTagNameMap[*]>}数组元素对象
 */
function tagName$(name) {
    return document.getElementsByTagName(name);
}

/**
 * id选择器下的标签选择器
 * @param id id属性的值，string类型
 * @param name 标签属性的值,string类型
 * @returns {HTMLCollectionOf<HTMLElementTagNameMap[*]>}数组元素对象
 */
function idTagName$(id, name) {
    return id$(id).getElementsByTagName(name);
}

// /**
//  * 创建标签元素
//  * @param element 标签
//  * @returns {any}   string元素
//  */
function createElement$(element) {
    return document.createElement(element);
}


/**
 *设置任意的标签中间的任意文本内容
 * @param elemnt 各种选择器
 * @param text  输入内容，string类型
 */
function setInnerText(elemnt, text) {
    if (typeof elemnt.textContent == "undefined") {
        elemnt.innerText = text; //IE低版本兼容
    } else {
        elemnt.textContent = text;//火狐低版本兼容
    }
}

/**
 * 获取任意的标签中间的任意文本内容
 * @param element 各种选择器
 * @returns {*|string|*|string|string|HTMLElement.value} string类型
 */
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;//IE低版本兼容
    } else {
        return element.textContent;//火狐低版本兼容
    }
}


/**
 * 获取任意一个父级元素的第一个子级元素
 * @param element 各种选择器
 * @returns {Element|(() => (Node | null)) | Node | ActiveX.IXMLDOMNode | ChildNode} 元素
 */
function getFirstElementChildByParentElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild; //支持
    } else {
        var node = element.firstChild; //IE8以下支持
        while (node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取任意一个父级元素的最后一个子级元素
 * @param element 各种选择器
 * @returns {ActiveX.IXMLDOMNode | Node | ChildNode | (() => (Node | null))|Element} 元素
 */
function getLastElementChildByParentElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild; //支持
    } else {
        var node = element.lastChild; //IE8以下支持
        while (node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取任意一个父级元素的上一个元素
 * @param element 各种选择器
 * @returns {Node | (() => (Node | null)) | ActiveX.IXMLDOMNode|Element} 元素
 */
function getPreviousElementChildByParentElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling; //支持
    } else {
        var node = element.previousSibling; //IE8以下支持
        while (node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取任意一个父级元素的下一个元素
 * @param element 各种选择器
 * @returns {Node | (() => (Node | null)) | ActiveX.IXMLDOMNode|Element} 元素
 */
function getNextElementChildByParentElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling; //支持
    } else {
        var node = element.nextSibling; //IE8以下支持
        while (node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 为任意元素绑定任意的事件，任意的元素，事件的类型，事件处理函数
 * @param element 各种选择器，string类型
 * @param type  事件，string类型
 * @param fun   函数
 */
function addEventListener$(element, type, fun) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener) {
        element.addEventListener(type, fun, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fun); //IE8
    } else {
        element["on" + type] = fun;
    }
}


/**
 * 为任意元素移除任意的事件，任意的元素，事件的类型，事件处理函数
 * @param element 各种选择器，string类型
 * @param type 事件，string类型
 * @param fun 函数
 */
function removeEventListener$(element, type, fun) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fun, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fun);//IE8
    } else {
        element["on" + type] = null;
    }
}


//动画部分
/**
 * 设置任意的一个元素，移动到指定的位置
 * @param element 选择器，元素
 * @param target  目标
 * @param step  移动距离 默认10px
 * @param delay 延迟时间 默认20毫秒
 */
function animateMoveX(element, target, step, delay) {
    //IE不支持函数参数带默认值
    //进来先清理定时器
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前位置，返回数字类型，没有px
        var current = element.offsetLeft;
        //元素每次移动的距离 正的往右走，负的往左走
        var walk = step;
        walk = current < target ? walk : -walk;
        //当前移动到的位置
        current += walk;
        //判断当前移动后的位置是否到达目标位置
        if (Math.abs(target - current) > Math.abs(walk)) {
            element.style.left = current + "px";
        } else {
            //到达清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, delay);
}


/**
 *  单个变速运动
 * @param element 选择器，元素
 * @param attr 任意属性的值， 字符串类型
 * @param target 目标
 */
function animate(element, attr, target) {
    //进来先清理定时器
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前位置，返回数字类型
        var current = parseInt(getStyle(element, attr));
        var step = (target - current) / 10;
        //正数向上取正，负数向下取
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //当前移动到的位置
        current += step;
        element.style[attr] = current + "px";
        //判断当前移动后的位置是否到达目标位置
        if (current == target) {
            clearInterval(element.timeId);
        }
    }, 20);
}


/**
 * 获取任意一个元素的任意一个或多个属性的当前值，
 * @param element 选择器，元素
 * @param json  对象
 * @param fun   回调函数
 */
function animates(element, json, fun) {
    clearInterval(element.timeId);//进来先清理定时器
    element.timeId = setInterval(function () {//定时器的id值存储到对象的一个属性中
        var flag = true;//默认，假设全部到达目标
        for (var attr in json) {
            if (attr == "opacity") { //判断这个属性attr中是不是opacit,注意IE8不支持
                var current = getStyle(element, attr) * 100; //获取元素当前透明度，放大100倍
                var target = json[attr] * 100;//目标的透明度，放大100倍
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//正数向上取正，负数向下取
                current += step;//当前的值
                element.style[attr] = current / 100; //最后缩小100倍，得到小数值
            } else if (attr == "zIndex") {//判断这个属性attr中是不是zIndex
                //层级改变就是直接改变这个属性的值
                element.style[attr] = json[attr];
            } else if (attr == "backgroundColor" || attr == "color") { //判断这个属性attr中是不是backgroundColor 或者 color
                element.style[attr] = json[attr];
            } else { //普通属性
                var current = parseInt(getStyle(element, attr));//获取元素的当前的属性
                var target = json[attr];//目标的属性的值
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//正数向上取正，负数向下取
                current += step;//当前移动到的位置
                element.style[attr] = current + "px";
            }
            if (current != target) {//判断当前移动后的位置是否到达目标位置
                flag = false;
            }
        }// end for
        if (flag) {
            clearInterval(element.timeId); //清理定时器
            if (fun) {//所有的属性到达目标的回调函数，传入函数调用
                fun();
            }//end if
        }//end if
    }, 20);
}


/**
 * 获取浏览器向上卷曲出去的距离的值，向左卷曲的距离
 * @returns {{top: number, left: number}} 数字类型
 */
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}


/**
 * 获取任意一个元素的任意一个样式属性的值
 * @param element 选择器，元素
 * @param attr  属性
 * @returns {string} string类型
 */
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}


/**
 * 事件函数， 把代码放在一个对象中
 * @type {{getEvent: (function(*): (Event | *)), getClientY: (function(*=): number), getPageY: (function(*=): number), getScrollTop: (function(): number), getPageX: (function(*=): number), getScrollLeft: (function(): number), getClientX: (function(*=): number)}}
 */
var evt = {
    //window.event和事件参数对象evt的兼容
    getEvent: function (evt) {
        return window.event || evt;
    },
    //可视区域的横坐标的兼容代码
    getClientX: function (evt) {
        return this.getEvent(evt).clientX;
    },
    //可视区域的纵坐标的兼容代码
    getClientY: function (evt) {
        return this.getEvent(evt).clientY;
    },
    // 获取浏览器向左卷曲出去的横坐标
    getScrollLeft: function () {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    },
    // 获取浏览器向上卷曲出去的横坐标
    getScrollTop: function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    },
    //相对于页面的横坐标（pageX或者是clientX+scrollLeft）
    getPageX: function (evt) {
        return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getClientX(evt) + this.getScrollLeft(evt);
    },
    //相对于页面的纵坐标（pageY或者是clientY+scrollTop）
    getPageY:function (evt) {
        return this.getEvent(evt).pageY ?this.getEvent(evt).pageY:this.getClientY(evt) + this.getScrollTop(evt);
    }
};


/**
 * 给系统Array加个函数
 * 排序，带属性
 * @param attr 属性
 * @returns {function(*, *): number}
 */
Array.prototype.getSortAttr = function (attr) {
    return (a, b) => {
        return a[attr] > b[attr] ? 1 : a[attr] == b[attr] ? 0 : -1;
    };
};

Array.prototype.getSort = function () {
    for (var i=0;i<this.length-1;i++){
        for (var j=0; j<this.length-1-i;j++){
            if (this[j] > this[j+1]){
                var temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
};



















