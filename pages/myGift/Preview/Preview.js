// pages/myGift/Preview/Preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  // 关闭预览
  tocloseshow: function() {
    wx.navigateBack({
      
      url: '/pages/myGift/Givegiftset/Givegiftset',
    })
  },
    // 预览领取效果
  toseeshow: function() {
    wx.navigateTo({
      url: '/pages/Sendgift/Sendgift?state=0',
    })
    wx.setNavigationBarTitle({
      title: '关闭预览'
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