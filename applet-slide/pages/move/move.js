// pages/Travel/FillOrder/fillOrder.js

Page({
  data: {
    items: [],
    startX: 0,
    startY: 0,
    mengbanBol: true
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "填写订单"
    })
    var that = this;
    for (var i = 0; i < 10; i++) {
      this.data.items.push({
        name: "李俊涛",
        userType: "儿童",
        userCord: "3111 2589 8512 365 222",
        phone: "180 0011 1166",
        aditIcon: '../../image/aditIcon.png',
        isTouchMove: false //默认隐藏删除
      })
    }
    this.setData({
      items: this.data.items
    });
  },
  changMbbOL(e) {
    this.setData({
      mengbanBol: false
    });
  },
  calselMbbOL() {
    this.setData({
      mengbanBol: true
    });
  },
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {

      if (v.isTouchMove)//只操作为true的

        v.isTouchMove = false;

    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items

    })
  },
  touchmove: function (e) {

    var that = this,

      index = e.currentTarget.dataset.index,//当前索引

      startX = that.data.startX,//开始X坐标

      startY = that.data.startY,//开始Y坐标

      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标

      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标

      //获取滑动角度

      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    that.data.items.forEach(function (v, i) {

      v.isTouchMove = false

      //滑动超过30度角 return

      if (Math.abs(angle) > 30) return;

      if (i == index) {

        if (touchMoveX > startX) //右滑

          v.isTouchMove = false

        else //左滑

          v.isTouchMove = true

      }

    })
    //更新数据

    that.setData({

      items: that.data.items

    })

  },
  /**

* 计算滑动角度

* @param {Object} start 起点坐标

* @param {Object} end 终点坐标

*/

  angle: function (start, end) {

    var _X = end.X - start.X,

      _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);

  },
  //删除事件

  del: function (e) {

    this.data.items.splice(e.currentTarget.dataset.index, 1)

    this.setData({

      items: this.data.items

    })

  }

})