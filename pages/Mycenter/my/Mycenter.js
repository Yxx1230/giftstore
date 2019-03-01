// pages/Mycenter/Mycenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    showclick: false,//未收藏小程序提醒弹框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var that = this;
    //   wx.getUserInfo({
    //   success: function(res) {

    //     console.log(res.userInfo);
    //     that.setData({
    //       userInfo: res.userInfo,
    //     })
    //   }
    // })
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

  onErcodeTap:function(){
    var that =this;
    that.setData({
      showclick: true,
    })
    setTimeout(function () {
      that.setData({
        showclick: false,
      })
    }, 2000);
  },
  // 关注
  tolikeshop: function () {
    wx.navigateTo({
      url: '/pages/Mycenter/footMark/footMark?currentTab=1',
    })
  },
  // 卡券
  ecardList: function () {
    wx.showToast({
      title: '暂未开通，敬请期待',
      icon: 'none'
    })
  },
  myfubi: function() {
    wx.navigateTo({
      url: '/pages/Mycenter/Luckymoneypage/Luckymoneypage',
    })
  },
  // 足迹
  footmark: function () {
    wx.navigateTo({
      url: '/pages/Mycenter/footMark/footMark',
    })
  },
  // 我的分享
  onMyShareTap: function () {
    wx.navigateTo({
      url: '/pages/Mycenter/myshare/myshare',
    })
  },
  // 福钻商城
  onStoreTap: function () {
    wx.navigateTo({
      url: '/pages/Diamond/Diamond',
    })
  },
  //我的消息
  onMsgTap: function () {
    wx.navigateTo({
      url: '/pages/Mycenter/mynews/mynews?newstype=1',
    })
  },
  //意见反馈
  onAdviceTap: function () {
    wx.showToast({
      title: '暂未开通，敬请期待',
      icon: 'none'
    })
  },
  //帮助中心
  onHelpTap: function () {
    // wx.showToast({
    //   title: '暂未开通，敬请期待',
    //   icon: 'none'
    // })
    wx.navigateTo({
      url: '/pages/Sendgift/Sendgift?state=1',
    })
  },
  //设置
  setUp:function(){
    wx.navigateTo({
      url: '/pages/Mycenter/setting/setting',
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