/*Gonefour_boke*/
//自调用函数 食物
(function () {
    var elements = [];//用来保存每个小方块食物的
    //食物就是一个对象，有宽，有高，有颜色，有横纵坐标，先定义构造函数，然后创建对象
    function Food(x, y, width, height, color) {
        //横纵坐标
        this.x = x || 0;
        this.y = y || 0;
        //宽高颜色
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "#fff";
    };

    //为原型添加初始化的方法（作用在地图上显示食物，参数map是地图）
    Food.prototype.init = function (map) {
        //先删除食物
        remove();

        //创建食物，div
        var div = document.createElement("div");
        //食物加入地图中
        map.appendChild(div);
        //食物设置属性
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        div.style.borderRadius = "50%";
        //横纵坐标随机产生
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        //把食物div加入到数组elements中
        elements.push(div);
    };

    //私有的函数，删除食物
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个元素的父级元素，然后删掉这个元素
            ele.parentNode.removeChild(ele);
            //再次把elements中的这个子元素删除
            elements.splice(i, 1);
        }
    }

    //把Food暴露给window对象
    window.Food = Food;
}());