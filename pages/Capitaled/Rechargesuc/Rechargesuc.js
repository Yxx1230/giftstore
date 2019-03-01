// pages/Capitaled/Rechargesuc/Rechargesuc.js
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
    var that = this;
    // var rechargeState = options.state;
    console.log(options.state)
    that.setData({
      conis: options.conis,
      rechargeState: options.state,
    });
  },

  mycoins: function () {
    wx.navigateTo({
      url: '/pages/Mycenter/Luckymoneypage/Luckymoneypage',
    })
  },
})