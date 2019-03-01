// pages/Myorder/Myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkLogisticsTap:false,
    fuzanHas:true,
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
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //礼物详情
  togiftset: function () {

    wx.navigateTo({
      url: '/pages/myGift/Giftdetails/Giftdetails',
    })
  },
  //礼物仓库
  tostoreHouse: function () {

    wx.navigateTo({
      url: '/pages/storeHouse/storeHouse',
    })
  },
  //公司简介
  tocompany: function () {

    wx.navigateTo({
      url: '/pages/Companypage/Spcompanypage/Spcompanypage',
    })
  },
  //代发货
  shoulipage: function () {

    wx.navigateTo({
      url: '/pages/Myorder/orderForm/orderForm',
    })
  },
  //全部订单
  getAllorder:function(){
    wx.navigateTo({
      url: '/pages/Myorder/Allorder/Allorder?type=0',
    })
  },
  //待付款
  toPay:function(){
    wx.navigateTo({
      url: '/pages/Myorder/orderDetail/orderDetail',
    })
  },
  //待领取
  getdrawOrder: function () {
    wx.navigateTo({
      url: '/pages/Myorder/drawOrder/drawOrder',
    })
  },
  getFuzuan:function(){

  },
  // 联系商家
  tocall:function () {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },
  //去支付
  Topay: function () {
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },
  //福钻商城兑礼订单
  TocashOrder:function(){
    wx.navigateTo({
      url: '/pages/Myorder/cashOrder/cashOrder',
    })
  },
  //我要送礼
  TogiveGift: function () {
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })
  },
  //查看物流
  getcheckLogisticsTap:function(e){
    this.setData({
      checkLogisticsTap:!this.data.checkLogisticsTap
    })
  },
  //关闭物流弹框
  ClosecheckLogisticsTap:function(e){
    this.setData({
      checkLogisticsTap:!this.data.checkLogisticsTap
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})