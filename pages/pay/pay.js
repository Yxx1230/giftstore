// pages/pay/pay.js
var ctx = getApp().globalData.ctx;
var payUrl = getApp().globalData.payUrl;
var adminId = getApp().globalData.adminId;
var netRequest = getApp().netRequest;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    status:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 'pintuan');
    var status = options.status
    this.setData({
      // orderName: options.product_name,
      // orderNumber: options.orderNumber,
      // totalPrice: options.endMoney,
      // phpid: options.activity_id,
      // kingId: options.king_id,
      orderName: '用户充值',
      orderNumber: 'uc1550562310',
      totalPrice: '0.01',
      status: status,
    });
    // wx.setStorageSync('payId', options.activity_id)
    // wx.setStorageSync('kingId', options.king_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    
  },

  onPayTap: function () {
    var that = this;
    var openid = wx.getStorageSync('openid');
    var activity_id = that.data.phpid;
    var king_id = that.data.kingId;
    var orderNumber = that.data.orderNumber;
    var str = orderNumber.charAt(2);
    var adminId = getApp().globalData.adminId;
    var totalPrice = that.data.totalPrice;
    console.log(str, 'str')
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { 

        wx.navigateTo({
          url: '/pages/Capitaled/Rechargesuc/Rechargesuc?state= 1' + '&conis=' + '0.01',
        })
      },
      fail(res) {
        if (that.data.status == 0){
          wx.navigateTo({
            url: '/pages/myGift/Givegiftset/Givegiftset',
          })
        } else if (that.data.status == 1){
          wx.navigateTo({
            url: '/pages/mysucpay/mysucpay',
          })
        }   
       }
    })

        
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})