//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    productList: [
      {
        id: 1,
        name: '产品一',
        code: 100001,
        amount: 1
      },
      {
        id: 2,
        name: '产品二',
        code: 100002,
        amount: 5
      },
      {
        id: 3,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 4,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 5,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 6,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 7,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 8,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 9,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 10,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 11,
        name: '产品三',
        code: 300001,
        amount: 10
      },
      {
        id: 12,
        name: '产品三',
        code: 300001,
        amount: 10
      }
    ],
  },

  onLoad: function () {

  },

  /**
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -130)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    // console.log(productIndex)
    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let productList = this.data.productList
    productList[productIndex].xmove = xmove
    this.setData({
      productList: productList
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    // console.log(e)
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    let productList = this.data.productList;
    productList.some((item) => { // item为数组中的元素，index为下标，arr为目标数组
      item.xmove = 0;  
    }),
    this.startX = e.touches[0].pageX
    this.startY = e.touches[0].pageY
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    // console.log(e)
    let Y = Math.abs(e.changedTouches[0].pageY - this.startY);
    let X = Math.abs(e.changedTouches[0].pageX - this.startX);
    // if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX && Y == 0) {
    //   console.log(111)
    // }
    if (e.changedTouches[0].pageX < this.startX && X > Y) {
      // console.log("show")
      this.showDeleteButton(e)
    } else  {
      this.hideDeleteButton(e)
    }
  },
  //编辑产品
  handleEditProduct() {
    
  },
  /**
   * 删除产品
   */
  //{ currentTarget: { dataset: { id } } }
  handleDeleteProduct: function (e) {
    let productList = this.data.productList
    // let productIndex = productList.findIndex(item => item.id = e.currentTarget.dataset.id)
    function checkAdult(item) {
      console.log(item.id, e.currentTarget.dataset.id )
      return item.id == e.currentTarget.dataset.id;
    }
    let productIndex = productList.findIndex(checkAdult);
    
    productList.splice(productIndex, 1)
    console.log(productList)
    this.setData({
      productList
    })
    if (productList[productIndex]) {
      this.setXmove(productIndex, 0)
    }
  },

})
