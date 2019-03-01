// pages/Sendgift/Sendgift.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowVideo: false,
    statetype: 0,
    isplay: false
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

  openSetting: function () {
    console.log('1')
    wx.getSetting({
      success(res) {
        // 未授权
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success(res) {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              cosnole.log(res)
              wx.chooseAddress({
                success(res) {
                  console.log(res.userName)
                  console.log(res.postalCode)
                  console.log(res.provinceName)
                  console.log(res.cityName)
                  console.log(res.countyName)
                  console.log(res.detailInfo)
                  console.log(res.nationalCode)
                  console.log(res.telNumber)
                }
              })
            }
          })
        } else {
          // 授权
          wx.chooseAddress({
            success(res) {
              console.log(res.userName)
              console.log(res.postalCode)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
        }
      }
    })
  },



  // 语音播放暂停
  playvoice: function () {
    var that = this;
    if (that.data.isplay == false) {
      that.setData({
        isplay: true
      })
    } else {
      that.setData({
        isplay: false
      })
    }
  },
  // 打开视频弹框
  lookvideo: function () {
    this.setData({
      isShowVideo: true
    })
  },
  // 关闭视频弹框
  closeVideo: function () {
    this.setData({
      isShowVideo: false
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
  after(){
    wx.navigateTo({
      url: '/pages/storeHouse/storeHouse',
    })
  },
  confirmAddress(){
    wx.navigateTo({
      url: '/pages/receive/receive',
    })
  }
})