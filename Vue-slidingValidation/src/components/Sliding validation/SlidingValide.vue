<template>
    <div class="box" ref="slidRight">
        <div class="sliding" >
            <div class="mobile common">
                <input type="text">
            </div>
            <div ref="input" class="password common" @mouseover="showImg(true) && success" @mouseleave="showImg(false) && success">
                <div v-show="isShow" class="password-slid-ing">
                    <span class="slid-start" :style="vilidateSatrt" @click="slidmove()"></span>
                    <span class="slid-end" :style="vilidateEnd"></span>
                    <img class="slid-img" src="../../assets/22.png" alt="" ref="slid-img">
                    <span class="toggle" @click="changePosition">切換</span>
                </div>
                <div>
                    <input class="slid-input" type="text" >
                    <span class="slid-bgc" ref="slidbgc" :style="slidbgc"></span>
                    <span class="slid-right" @mousedown="slidmove()" :style="arrowDis"> >> </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShow: true,
                vilidateSatrt: {},
                vilidateEnd: {},
                slidbgc: {},
                arrowDis: {}
            }
        },
        created() {
            this.posiY = -(Math.random() * 141 + 50); //(-50 -191)
            this.posiX = (Math.random() * 100 + 160); //(100 260)
            this.vilidateSatrt = {
                "top" : this.posiY+"px",
                "left" : 0,
            }
            this.vilidateEnd = {
                "top" : this.posiY + "px",
                "left" : this.posiX + "px",
            }
        },
        methods: {
            showImg(params) {   
                this.isShow = params;
                this.success = true;
            },
            
            changePosition() {
                this.posiY = -(Math.random() * 141 + 50); //(-50 -191)
                this.posiX = (Math.random() * 100 + 160); //(100 260)
                this.vilidateSatrt = {
                    "top" : this.posiY+"px",
                    "left" : 0,
                }
                this.vilidateEnd = {
                    "top" : this.posiY + "px",
                    "left" : this.posiX + "px",
                }
            },
            slidmove() {
                let _this = this;
                let that = _this;
                this.slidRight = this.$refs.slidRight;
                this.$refs.slidRight.onmousemove = function (e) {
                    _this.success = false;
                    _this.isShow = true;
                    let mousemoveX = e.clientX;
                    let distanceX = _this.$refs.input.offsetLeft;
                    let moveEndX = (mousemoveX - distanceX); 
                    // console.log(moveEndX);
                    // console.log(moveX);
                    if(moveEndX > 260 || moveEndX <= 0) {
                        _this.slidbgc = {
                            "width": moveEndX + "px",
                            "backgroundColor": "#ff6100",
                        }
                        if(moveEndX > 260) {
                            _this.slidbgc = {
                                "width": 300 + "px",
                                "backgroundColor": "#ff6100",
                            }
                        }
                        setTimeout(function() {
                            that.slidRight.onmousemove = null;
                            that.arrowDis = {
                                "left": 0,
                            };
                            that.slidbgc = {
                                "width": 0,
                                "background": "red",
                            }
                            that.vilidateSatrt = {
                                "top" : this.posiY+"px",
                                "left" : 0,
                            }
                        }, 600)
                        return false;
                    }
                    _this.slidbgc = {
                        "width": moveEndX + "px",
                        "background": "blue",
                    }
                    _this.vilidateSatrt = {
                        "left": moveEndX + "px",
                        "top" : this.posiY+"px",
                    }
                    _this.arrowDis = {
                        "left": moveEndX + "px",
                    }
                }
                this.$refs.slidRight.onmouseup = function (e) {
                    _this.success = false;
                    _this.isShow = false;
                    _this.slidRight.onmousemove = null;
                    let that = _this
                    let mousemoveX = e.clientX;
                    let distanceX = that.$refs.input.offsetLeft;
                    let moveEndX = (mousemoveX - distanceX); 
                    setTimeout(function () {
                            that.arrowDis = {
                            "left": 0,
                        };
                        that.slidbgc = {
                            "width": 0,
                            "backgroundColor": "red",
                        }
                        that.vilidateSatrt = {
                            "top" : this.posiY+"px",
                            "left" : 0,
                        }
                    }, 200);
                    if(Math.abs(parseInt(that.vilidateSatrt.left) - parseInt(that.posiX)) < 5) {
                        that.slidbgc = {
                            "width": moveEndX + "px",
                            "backgroundColor": "pink",
                        }
                        setTimeout(function () {
                                that.arrowDis = {
                                "left": 0,
                            };
                            that.slidbgc = {
                                "width": 0,
                                "backgroundColor": "pink",
                            }
                            that.vilidateSatrt = {
                                "top" : this.posiY+"px",
                                "left" : 0,
                            }
                        }, 800)
                    }
                }
            }
        }
    }
</script>
<style lang="">
    .box {
        height: 800px;
        width: 1400px;
        background-color: #1e0ace;
    }
    .sliding {
        width: 400px;
        height: 550px;
        background-color: rgb(0, 255, 157);
        margin: 80px auto;
        border-radius: 50px;
        padding: 80px 20px;
    }
    .common {
        width: 300px;
        margin: 20px auto;
    }
    .common input{
        width: 100%;
        height: 40px;
        border: none;
    }
    .password {
        position: relative;
    }
    .common .slid-input {
        height: 40px;
    }
    .password .password-slid-ing{
        position: absolute;
        width: 300px;
        height: 40px;
        top: 0;
        left: 0;
    }
    .slid-right {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(8, 105, 24);
        width: 40px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
    }
    .slid-img {
        width: 300px;
        position: absolute;
        bottom: 50px;
        left: 0;
    }
    .slid-start { 
        width: 40px;
        height: 40px;
        position: absolute;
        background-color: rgb(9, 245, 135);
        top: -50px;
        left: 0;
        z-index: 100;
        opacity: 0.3;
    }
    .slid-end {
        width: 40px;
        height: 40px;
        position: absolute;
        background-color: #fff;
        top: -50px;
        left: 200px;
        z-index: 100;
        opacity: 0.3;
    }
    .toggle {
        position: absolute;
        top: -180.34px;
        right: 10px;
        cursor: pointer;
        z-index: 1000px;
    }
    .slid-bgc {
        background-color: red;
        position: absolute;
        top: 0;
        left: 0;
        height: 42px;
        display: inline-block;
        width: 300px;
    }
</style>