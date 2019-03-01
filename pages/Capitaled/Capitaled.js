// pages/Capitaled/Capitaled.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['全部', '有效报名', '有效点击', '有效浏览', '有效卡券', '有效购买', '有效票券', '核销微信卡券', '点击奖励', '领取一卡易卡券'],
    index: 0,
    page: 1,
    billingType: '',
    userName: '',
    welfareName: '',
    date: '',
    companyId: '',
    createTime: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var companyId = wx.getStorageSync('companyId');
    // this.setData({
    //   companyId: companyId,
    //   selectDate: util.selectTime(new Date())
    // });
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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