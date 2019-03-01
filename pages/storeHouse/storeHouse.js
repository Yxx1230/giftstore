// pages/storeHouse/storeHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curHdIndex: 0,
    // curBdIndex: 2,
    checkLogisticsTap: 1,
    orderName: '神通快递',
    courierNumber: '121314',
    status: '0',
    backMSG: [{
      time: '2019-02-20',
      context: '神通快递神通快递神通快递神通快递神通快递神通快递',
    }, {
        time: '2019-02-20',
        context: '神通快递神通快递神通快递神通快递神通快递神通快递',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 查看详情
  togiftdetail: function() {
    wx.navigateTo({
      url: '/pages/myGift/Giftdetails/Giftdetails',

    })
  },
  // 自己领取
  mygive: function() {
    wx.navigateTo({
      url: '/pages/myGift/receive-self/receive-self'
    })
  },
  // 送给好友
  sendfriend: function() {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset',

    })
  },
  // 联系客服
  callphone: function() {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },
  // 查看物流
  logistics: function() {
    var that = this;
    that.setData({
      checkLogisticsTap: 0
    })
  },
  // 我要送礼
  togivegift: function() {
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',

    })
  },
  //收礼详情
  toOrderForm: function (e) {
    console.log(e)
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/Myorder/orderForm/orderForm?type=' + type,
    })
  },
  //关闭物流弹框
  closeTap: function () {
    var that = this;
    that.setData({
      checkLogisticsTap: 1
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  changeClass(e) {
    this.setData({
      curHdIndex: e.currentTarget.dataset.id,
      curBdIndex: e.currentTarget.dataset.id
    })
  }
})