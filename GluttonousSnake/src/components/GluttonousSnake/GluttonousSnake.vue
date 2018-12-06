<template>
    <div class="snakeBox">
        <div class="title">
            贪吃小蛇
        </div>
        <div class="operation">
            <button @click="snakeStart()">开始</button>
            <button @click="snakePause()">暂停/运动</button>
            <button @click="snakeSpeedUp()">加速</button>
            <button @click="snakeSpeedCut()">减速</button>
            <button @click="snakeAgain()">重新开始</button>
        </div>
        <div class="snake-score">
            <span>分数：</span>
            <span class="score-content">{{score}}</span>
        </div>
        <div class="content snake-map" ref="snakeMap">

        </div>
    </div>
</template>
<script>
    export default {
        name: "GluttonousSnake",
        data() {
            return {
                rowNumber: 35, //行数
                columNumber: 35, //列数
                snakeMapDiv: [], //二维数组 记录地图 中所有的div
                x: 2, //蛇移动的横坐标
                y: 0, //蛇移动的纵坐标
                direction: 'right', //蛇移动的方向
                isMoveDirection: true, //是否可以改变方向
                snakeEggX: 0, //食物的横坐标
                snakeEggY: 0, //食物的纵坐标
                score: 0, //记录分数
                isStart: false, //是否开始运动
                isPause: false, //是否暂停,
                speed: 600, //蛇移动速度
                isEnd: false, //游戏是否结束
                isnewStart: false,
            }
        },
        methods: {
            openClick() {
                 this.$confirm(`您的分数为 ：`+this.score, "游戏结束", {
                    confirmButtonText: '确定',
                    type: 'warning',
                    center: true
                    })
                },
            //加速
            snakeSpeedUp() {
                if(this.isPause){
                    return;
                }
                this.speed -= 50; 
                clearInterval(this.repeatedlyTimer);
                this.repeatedlyTimer = setInterval(() => {
                    this.snakeMove()
                }, this.speed);
            },
            //减速
            snakeSpeedCut() {
                if(this.isPause){
                    return;
                }
                this.speed += 50; 
                clearInterval(this.repeatedlyTimer);
                 this.repeatedlyTimer = setInterval(() => {
                    this.snakeMove()
                }, this.speed)
            },
            //重新开始
            snakeAgain() {
                if(this.isEnd) {
                    window.location.reload();
                }
            },
            //暂停以及运动
            snakePause() {
                if(!this.isStart) {
                    return;
                }
                if(this.isPause) {
                    this.repeatedlyTimer = setInterval(() => {
                        this.snakeMove()
                    }, this.speed);
                    this.isPause = false;
                } else {
                    clearInterval(this.repeatedlyTimer);
                    this.isPause = true;
                }   
            },
            initializeSnake() {
                const mapWidth = this.rowNumber * 20 + "px";
                const mapHeight = this.columNumber * 20 + "px";
                const snakeMap = this.$refs.snakeMap;
                //蛇移动得范围
                snakeMap.style.width = mapWidth;
                snakeMap.style.height = mapHeight;
                snakeMap.style.border = "1px solid red";
                //生成蛇移动的路径
                for(var i = 0; i < this.rowNumber; i++) {
                    //生成行
                    let rowDiv = document.createElement('div');
                    rowDiv.className = 'row';
                    snakeMap.appendChild(rowDiv);
                    let rowArray = [];
                    //生成列
                    for(var j = 0; j < this.columNumber; j++) {
                        let columDiv = document.createElement("div");
                        columDiv.className = "colum";
                        rowArray.push(columDiv)
                        rowDiv.appendChild(columDiv);
                    }
                    this.snakeMapDiv.push(rowArray);    
                }
                //存储蛇身所占div
                this.snake = [];
                for(var i = 0; i < 3; i++) {
                    this.snakeMapDiv[0][i].className = 'colum activeSnake';
                    this.snake[i] = this.snakeMapDiv[0][i];
                }
                if(this.isnewStart) {
                    return;
                }
                this.snakeStart();
            },
            //开始游戏
            snakeStart() {
                this.isnewStart = true;
                if(this.isStart) {
                    return;
                }
                this.isStart = true;
                //按下方向键
                document.onkeydown = (event) => {
                    event = event || window.event;
                    //是否需要改变方向
                    if(!this.isMoveDirection) {
                        return;
                    };
                    //当蛇移动判断 按下上下左右键 是否需要改变方向
                    //当蛇向右移动时并且keycode是37时不需要改变
                    if(this.direction == "right" && event.keyCode == "37") {
                        return;
                    };
                    //当蛇向左移动时并且keycode是39时不需要改变
                    if(this.direction == "left" && event.keyCode == "39") {
                        return;
                    };
                    //当蛇向上移动时并且keycode是38时不需要改变
                    if(this.direction == "up" && event.keyCode == "40") {
                        return;
                    };
                    //当蛇向下移动时并且keycode是40时不需要改变
                    if(this.direction == "down" && event.keyCode == "38") {
                        return;
                    };
                    //判断蛇什么时候需要改变方向
                    switch(event.keyCode) {
                        case 37:
                            this.direction = "left";
                            break;
                        case 38: 
                            this.direction = "up";
                            break;
                        case 39:
                            this.direction = "right";
                            break;
                        case 40:
                            this.direction = "down";
                            break;
                    }
                    this.isMoveDirection = false;
                    this.delayTimer = setTimeout(() => {
                        this.isMoveDirection = true;
                    },this.speed);
                }
                this.repeatedlyTimer = setInterval(() => {
                    this.snakeMove()
                }, this.speed);
            },
            //蛇移动
            snakeMove() {
                switch(this.direction) {
                    case 'left':
                        this.x--;
                        break;
                    case 'right':
                        this.x++;
                        break;
                    case 'up':
                        this.y--;
                        break;
                    case 'down':
                        this.y++;
                        break;
                }
                //判断游戏什么时候结束
                //蛇移动位置x轴 大于等于this.columNumber，y轴 大于等于this.columNumber或者小于x轴小于0，y轴小于0；
                if(this.x < 0 || this.y < 0 || this.x >= this.columNumber || this.y >= this.rowNumber) {
                    //停止蛇运动定时器
                    clearInterval(this.repeatedlyTimer);
                    //游戏结束
                    this.isEnd = true;
                    //停止程序执行
                    this.openClick();
                    return;
                } ;
                //蛇吃到自己也要结束游戏
                for(var i = 0; i < this.snake.length; i++) {
                    if(this.snake[i] == this.snakeMapDiv[this.y][this.x]) {
                        clearInterval(this.repeatedlyTimer);
                        this.isEnd = true;
                        this.openClick();
                    }
                }
                //判断蛇是否吃到食物
                //蛇移动的坐标等于食物的坐标蛇吃到食物；
                if(this.snakeEggX == this.x && this.snakeEggY == this.y) {
                    //蛇吃到食物时食物的颜色改变；
                    this.snakeMapDiv[this.snakeEggY][this.snakeEggX].className = "colum activeSnake";
                    //将食物天添加到蛇身中
                    this.snake.push(this.snakeMapDiv[this.snakeEggY][this.snakeEggX]);
                    this.score++;
                    //重新再随机一个食物；
                    this.createEgg();
                } else {
                    //如果蛇没有吃到食物
                    //蛇继续移动
                    //蛇尾去掉自身颜色，变成格子的颜色
                    this.snake[0].className = "colum";
                    //将蛇尾从数组中删除
                    this.snake.shift();
                    //添加新的蛇头到数组
                    this.snakeMapDiv[this.y][this.x].className = 'colum activeSnake'; 
                    this.snake.push(this.snakeMapDiv[this.y][this.x]);
                };
                
                
            },
            createEgg() {
                //随机生成食物的范围
                this.snakeEggX = Math.floor(Math.random() * (this.rowNumber -1));
                this.snakeEggY = Math.floor(Math.random() * (this.columNumber -1));
                //改变食物的颜色
                this.snakeMapDiv[this.snakeEggY][this.snakeEggX].className = "colum egg"
            }   
        },
        mounted() {
            this.initializeSnake();
            this.createEgg();
        }
    }
</script>
<style lang="">
* {
    margin: 0;
    padding: 0;
}
.snakeBox {
    margin: 20px auto;
    width: 1200px;
    background-color: deepskyblue;
    padding: 20px;
}
.title {
    height: 100px;
    line-height: 100px;
    color: #ffffff;
    font-size: 30px;
    background-color: rgb(255, 0, 212);
}
.operation {
    display: flex;
    padding: 20px 200px;
}
.operation button {
    flex: 1;
    height: 40px;
    border: none;
    margin: 10px;
    background-color: #fff;
    font-size: 18px;
    color: blueviolet;
    border-radius: 5px;
    cursor: pointer;
}
.content {
    margin: 20px auto;
    padding: 40px;
}
.row {
    height: 20px;
}
/*列样式*/
.colum {
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    border: 1px solid lightgray;
    background: rgb(250, 250, 250);
    float: left;
}
.activeSnake {
    background: black;
}
.egg {
    background-color: blue;
}
.snake-score {
    font-weight: 700;
    font-size: 20px;
    color: #fff;
}
.score-content {
    color: red;
}
</style>
