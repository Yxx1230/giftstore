// pages/Mycenter/Luckymoneypage/Luckymoneypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishowgz:false,
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
  // 福钻商城
  onStoreTap: function () {
    wx.navigateTo({
      url: '/pages/Diamond/Diamond',
    })
  },
  toshowgz:function() {
    this.setData({
      ishowgz:true,
    })
  },
  closegz: function () {
    this.setData({
      ishowgz: false,
    })
  },
  torecharge:function(){
    wx.navigateTo({
      url: "/pages/Capitaled/Recharge/Recharge",
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

  }
})