//app.js
App({
  onLaunch: function (options) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function (options){
    //在小程序的onLaunch和onShow方法参数中可获取场景值
    var that =this;
    var senenId = options.scene;
    that.globalData.senenId = senenId;
    console.log("[onShow] 本次场景值:", options.scene)
    
  },
  globalData: {
    userInfo: null,
    adminId: 1,
    // //测试
    // shanghuUrl: '',
    // url:'',
    // commonUrl:'',
    // payUrl: "",
    //正式
    // shanghuUrl: '',
    // url: '',
    // commonUrl: '',
    // payUrl: "",
  }
})