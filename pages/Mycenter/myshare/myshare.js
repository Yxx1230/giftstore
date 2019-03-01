// pages/Mycenter/myshare/myshare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { shareImg:'https://www.fuxingfuli.com/files/data/1/image/750/1548310342494.jpg',
        welfareName:'新东方儿童英语试听新东方儿童英语试听',
        createTime:'2019-01-12',
        shareCount:'123',
        coinsTotal:'245',
        viewCount:'2200',
        countForm:'10',
        num:'10',
      },
      {
        shareImg: 'https://www.fuxingfuli.com/files/data/1/image/750/1548310342494.jpg',
        welfareName: '新东方儿童英语试听新东方儿童英语试听',
        createTime: '2019-01-12',
        shareCount: '123',
        coinsTotal: '245',
        viewCount: '2200',
        countForm: '10',
        num: '10',
        isshowtype:'1'
      },
      {
        shareImg: 'https://www.fuxingfuli.com/images/giftstore/ypcre.png',
        welfareName: '新东方儿童英语试听新东方儿童英语试听',
        createTime: '2019-01-12',
        shareCount: '123',
        coinsTotal: '245',
        viewCount: '2200',
        countForm: '10',
        num: '10',
      },
    ]
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

  onDetailTap: function () {
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