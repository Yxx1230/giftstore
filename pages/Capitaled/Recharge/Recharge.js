// pages/Capitaled/Recharge/Recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    conis: '1000',
    totalprice: '10',
    custom: '',
    companyId: '',
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
  searchBtn: function (e) {
    var that = this;
    var totalprice = e.detail.value / 100;
    that.setData({
      custom: e.detail.value,
      conis: e.detail.value,
      totalprice: totalprice
    })
    // console.log(e.detail.value, 'type')

  },
  // 充值tab栏切换
  navTap: function (e) {
    var that = this;
    var current = e.currentTarget.dataset.currenttab;
    var conis = e.currentTarget.dataset.conis;
    var totalprice = e.currentTarget.dataset.totalprice
    // console.log(conis, totalprice)
    that.setData({
      current: current,
      conis: conis,
      totalprice: totalprice,
    });


  },
  //立即充值
  rechargeData: function () {
    var that = this;
    console.log(that.data.conis, that.data.totalprice);
    if (that.data.conis == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入充值福钻数',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {

            wx.navigateTo({
              url: '/pages/pay/pay?state= 1' + '&conis=' + that.data.conis,
            })
            that.setData({
              custom: '',
            })
        
        }

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