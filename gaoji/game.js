/*Gonefour_boke*/
//自调用函数 游戏对象
(function () {
    var that = null;

    //游戏的构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {
        //初始化
        this.food.init(this.map);
        this.snake.init(this.map);
        //调用自动移动的小蛇的方法
        this.runSanke(this.food, that.map);
        //按键的调用方法
        this.bindKey();
    };

    //跑
    Game.prototype.runSanke = function (food, map) {

        //自动移动
        var timeId = setInterval(function () {
            //此时的this是window
            //移动小蛇
            this.snake.move(food, map);
            //初始化小蛇
            this.snake.init(map);

            //横坐标的最大值
            var maxX = map.offsetWidth / this.snake.width
            //纵坐标的最大值
            var maxY = map.offsetHeight / this.snake.height;
            //小蛇的头的坐标
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            //横坐标
            if (headX < 0 || headX >= maxX) {
                clearInterval(timeId);
                alert("游戏结束！");
                window.location.reload();
            }
            //纵坐标
            if (headY < 0 || headY >= maxY) {
                clearInterval(timeId);
                alert("游戏结束！");
                window.location.reload();
            }
        }.bind(that), 150);
    };
    Game.prototype.bindKey = function () {
        //获取用户的按钮，改变方向
        addEventListener$(document, "keydown", function (e) {
            //获取按键的值
            switch (evt.getEvent(e).which) {
                case  37:
                    this.snake.direction = "left";
                    break;
                case  38:
                    this.snake.direction = "top";
                    break;
                case  39:
                    this.snake.direction = "right";
                    break;
                case  40:
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that));

    }
    window.Game = Game;
}());

var gm = new Game(id$("map"));
gm.init();
