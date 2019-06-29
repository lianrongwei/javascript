/*Gonefour_boke*/

//自调用函数 小蛇
(function () {
    var elements = [];
    var score = 0;
    var num = 0;


    //小蛇
    function Snake(width, height, direction) {

        //宽高
        this.width = width || 20;
        this.height = height || 20;

        //小蛇身体
        this.body = [
            {x: 3, y: 2, color: "red"},//头
            {x: 2, y: 2, color: "yellow"},//身体
            {x: 1, y: 2, color: "yellow"}//身体
        ];
        //方向
        this.direction = direction || "right";
    }


    //初始化
    Snake.prototype.init = function (map) {
        remove();
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement("div");
            map.appendChild(div);
            //设置样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            div.style.backgroundColor = obj.color;


            elements.push(div);
        }
    };


    //移动
    Snake.prototype.move = function (food, map) {
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //判断方向
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }

        //判断要有没有吃到食物
        //小蛇的头的坐标和食物的坐标一致
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //食物的横纵坐标
        // var foodX = food.x;
        // var foodY = food.y;

        //50 0 0
        //50 0
        //100 1 2
        //200 2 4
        //500 3 10
        //900 4 18
        //1400 5 28
        //2000 6 40
        //2700 7 54
        //3500 8
        //4400 9
        //5400 10
        if (headX == food.x && headY == food.y) {

            //获取小蛇的最后的尾巴
            var last = this.body[this.body.length - 1];
            //复制到小蛇身体最后
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            num++;
            setInnerText(id$("zs"), num);
            setInnerText(id$("span"), score += 50);
            // score = 250;
            var lv = 0;
            var n = score / 100;
            var i = 0;
            while (n >= i - 1) {
                lv = lv + 1;
                i = i + lv;
            }
            lv = lv - 1;
            // setInnerText(id$("lv"), lv);
            if (lv == 1) {
                if (score == 100) {
                    setInnerText(id$("lv"), lv);
                }
            } else {
                setInnerText(id$("lv"), lv);

            }
            //把食物删除，重新初始化食物
            food.init(map);
        }
    };


    //删除
    function remove() {
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
}());