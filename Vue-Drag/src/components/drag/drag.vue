<template>
    <div class="contain" ref="contain">
        <div class="content-box" ref="contentBox">

        </div>
        <div class="drag-box" @mousedown="dragMove()" ref="dargBox" :style="moveStyle" onselectstart="return false" onselect="document.selection.empty()">
            签名
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                moveStyle: {},
                isMove: false,//移动到目标区域标识
                moveEnd: false, //目标区域移动标识
            }
        },
        methods: {
            dragMove(event) {
                //获取并兼容事件对象e
                event = event || window.event;
                let clientX = event.clientX || scroll().left + event.clientX;  
                let pageY = event.pageY || scroll().top + event.clientY; 
                //获取外层容器contain
                let containElement = this.$refs.contain;
                //获取拖动容器dargBox
                let dargBoxElement = this.$refs.dargBox;
                //获取签名内容contentBox;
                let contentBoxElement = this.$refs.contentBox;
                //鼠标点击位置距离当前盒子的左边距离
                let mouseMoveX = event.clientX - dargBoxElement.getBoundingClientRect().left; 
                //鼠标点击位置距离当前盒子的顶部距离
                let mouseMoveY = event.pageY - dargBoxElement.getBoundingClientRect().top; 
                //鼠标拖动事件
                document.onmousemove = (event) => {
                    //x轴拖动
                    this.moveX = event.clientX - containElement.offsetLeft - mouseMoveX;
                    //y轴拖动
                    this.moveY = event.pageY - mouseMoveY;
                    //拖拽盒子移动赋值
                    this.moveStyle = {
                        "top": this.moveY + "px",
                        "left": this.moveX + "px",
                    }
                    //拖拽盒子在目标区域移动的位置
                    if(this.isMove == true) {
                        //拖拽盒子是否在目标区域被再次移动
                        this.moveEnd = true;
                        //判断水平移动的最小距离
                        if(this.moveX < contentBoxElement.offsetLeft) {
                            this.moveX = contentBoxElement.offsetLeft;
                        }
                        //判断水平移动的最大距离 
                        console.log(contentBoxElement.offsetWidth - dargBoxElement.offsetWidth)
                        if(this.moveX > contentBoxElement.offsetLeft + contentBoxElement.offsetWidth - dargBoxElement.offsetWidth) {
                            this.moveX = contentBoxElement.offsetLeft + contentBoxElement.offsetWidth - dargBoxElement.offsetWidth;
                        }
                        //判断垂直移动的最小距离
                        if(this.moveY < 0) {
                            this.moveY = 0;
                        }
                        //判断垂直移动的最大距离
                        if(this.moveY > contentBoxElement.offsetHeight - dargBoxElement.offsetHeight) {
                            this.moveY = contentBoxElement.offsetHeight - dargBoxElement.offsetHeight
                        }
                        //拖拽盒子移动
                        this.moveStyle = {
                            "top": this.moveY + "px",
                            "left": this.moveX + "px",
                        }
                    }
                }
                //鼠标松开事件
                document.onmouseup = (event) => {
                    //可拖动的X方向最小边界为：
                    let mainX = containElement.offsetLeft + contentBoxElement.offsetLeft;
                    //可拖动的Y方向最小边界为：
                    let mainY = contentBoxElement.offsetTop;
                    //可拖动的X方向最大边界为：
                    let maxX = containElement.offsetLeft + contentBoxElement.offsetLeft + contentBoxElement.offsetWidth - dargBoxElement.offsetWidth;
                    //可拖动的Y方向最大边界为：
                    let maxY = contentBoxElement.offsetTop + contentBoxElement.offsetHeight - dargBoxElement.offsetHeight;
                    //获取拖动元素停止时的坐标信息
                    let endX = dargBoxElement.getBoundingClientRect().left;
                    let endY = dargBoxElement.getBoundingClientRect().top;
                    //取消鼠标移动事件绑定
                    document.onmousemove = null;  
                    //拖拽盒子在目标区域里再次被拖拽判断
                    if(this.moveEnd) {
                        return;
                    }
                    //拖拽盒子是否被拖到了目标区域
                    if(endX > mainX && endX < maxX && endY > mainY && endY < maxY) {
                        //已经移动到了目标区域
                        this.isMove = true;
                    } else {
                        //未被拖到目标区域则回到起点
                        this.isMove = false;
                        this.moveStyle = {
                            "top": 0 + "px",
                            "left": 920 + "px",
                        }
                    }
                    
                }
            }
        }
    }
</script>
<style lang="">
    body{
        -moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
        -khtml-user-select:none;/*早期浏览器*/
        user-select:none;
    }
    .contain {
        width: 1200px;
        height: 800px;
        border: 1px solid sandybrown;
        margin: 0 auto;
        position: relative;
    }
    .content-box {
        width: 600px;
        height: 800px;
        margin: 0 auto;
        border: 1px solid #ff6100;
    }
    .drag-box {
        height: 80px;
        width: 80px;
        border: 1px solid royalblue;
        line-height: 80px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 920px;
        cursor: pointer;
    }
</style>
