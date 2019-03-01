// pages/Sendgift/Sendgift.js
const innerAudioContext = wx.createInnerAudioContext();

var animation = wx.createAnimation({})
var i = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowVideo: false,
    isShowEcode:false,
    statetype: 2,
    isplay: false,
    btn_state:2,
    emptygoods: true,
    stategift: 1,//无礼物
    isopenpage: 1,//开屏动画
    playllp: true,//自动播放音乐
    idopen: false,//拆红包
    appendData: [],
    setTimer:1,
    showtimer:'',
    donghua: true,
    List:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;

  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {

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
  // 查看收礼详情
  torecgift: function () {
   wx.navigateTo({
     url: '/pages/Myorder/orderForm/orderForm',

    })
  },
  tohomepage: function () {
    wx.switchTab({
      url: '/pages/index/index',

    })
  },
  togivegift: function () {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset',

    })
  },
  tomygift: function () {
    wx.navigateTo({
      url: '/pages/myGift/receive-self/receive-self',

    })
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

  },
  closeVideo() {
    this.setData({
      isShowVideo: false,
      isShowEcode: false
    })
  },
  ShowEcode(){
    this.setData({
      isShowEcode: true
    })
  }
})