//index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordernum:121,
    commentList:[
      {
        cmpimg: 'https://www.fuxingfuli.com/images/giftstore/busineslogo.png',
        cmpname:'中信国安农业有限公司',
      },
      {
        cmpimg: 'https://www.fuxingfuli.com/images/giftstore/busineslogo.png',
        cmpname: '中信国安农业有限公司',
      }
    ],
    welnameList: [
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypceimg.png',
        welfare_name: '九十九蒸芝麻糕九十九蒸芝麻糕',
        welnum:'20',
        welprice: '69.9',
        welbuy: 1234,
      },
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcimg.png',
        welfare_name: 'GUM儿童米菲兔牙膏套装GUM儿童米菲兔牙膏套装',
        welnum: '20',
        welprice: '69.9',
        welbuy: 1234,
      },
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcre.png',
        welfare_name: 'GUM儿童米菲兔牙膏套装GUM儿童米菲兔牙膏套装',
        welnum: '20',
        welprice: '69.9',
        welbuy: 1234,
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    if (that.data.ordernum >100){
      that.setData({
        ordernum:'99+'
      })
    }
    // wx.getUserInfo({
    //   success: function (res) {

    //     console.log(res.userInfo);
    //     that.setData({
    //       userInfo: res.userInfo,
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 打客服电话
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },
  cmpdetail: function (e) {
    var companyId = e.currentTarget.dataset.id;
    console.log(companyId)
    if (companyId ==0){
      wx.navigateTo({
        url: '/pages/Companypage/Company/Companypage?id=' + companyId,
      })
    }else{

    wx.navigateTo({
      url: '/pages/Companypage/Spcompanypage/Spcompanypage?id=' + companyId,
    })
    }

  },
  toliushui: function() {
    wx.navigateTo({
      url: '/pages/Mycenter/Luckymoneypage/Luckymoneypage',
    })
  },
  // 去我的订单
  toorderpage:function(){
      wx.switchTab({
        url: '/pages/Myorder/Myorder',
      })
  },
  tofulidetail: function () {
    var that = this;
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
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
