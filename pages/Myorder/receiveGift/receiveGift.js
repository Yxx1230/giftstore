
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowVideo: false,
    statetype: 0,
    isplay: false,
    btn_state:1
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
  toFulidetail:function(){
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })
  },
})