// pages/myGift/Giftdetails/Giftdetails.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    noshowtext:true,
    isShowVideo: false,
    statetype: 1,
    isplay: false,
    isShowauido: false,
    giftsList:[
      {}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.giftsList) 
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

  //tab切换
  onMainTap: function (e) {
    var that = this;
    var currentTab = e.currentTarget.dataset.currenttab
    that.setData({
      currentTab: currentTab,
    })

  },
  clickmore: function (e) {
    var that = this;
    console.log(that.noshowtext)
    if (that.data.noshowtext == true){
      that.setData({
        noshowtext: false,
      })
    }else{
      that.setData({
        noshowtext: true,
      })
    }


  },
  tofulidetail:function(){
      wx.navigateTo({
        url: '/pages/fuliDetail/fuliDetail',
      })
  },
  togetset: function () {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset',
    })
  },
  sharegift: function () {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset',
    })
  },
  towarehouse: function () {
    wx.navigateTo({
      url: '/pages/myGift/receive-self/receive-self',
    })
  },
  givefriend: function () {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset',
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
  // 打开视频弹框
  lookauido: function () {
    this.setData({
      isShowauido: true
    })
  },
  // 关闭视频弹框
  closeVideo: function () {
    this.setData({
      isShowVideo: false,
      isShowauido: false,
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