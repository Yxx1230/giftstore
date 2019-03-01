// pages/Mycenter/mynews/mynews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:'',
    returnList:[
      {
        billingName:'您分享的福利已成功引来购买订单',
        num:'6.0',
        totalNumNow:'59.5',
        time:'2019-09-18 12:52:51'
      },
      {
        billingName: '您分享的福利已成功引来点击',
        num: '6.0',
        totalNumNow: '59.5',
        time: '2019-09-18 12:52:51'
      },
    ],
    welfareList:[
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypceimg.png',
        welfare_name: '新东方儿童英语试听新东方儿童英语试听',
        createtime: '2019-02-14',
      },
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcimg.png',
        welfare_name: '新东方儿童英语试听新东方儿童英语试听',
        createtime: '2019-02-14',
      },
      {
        welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcre.png',
        welfare_name: '新东方儿童英语试听新东方儿童英语试听',
        createtime: '2019-02-14',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    that.setData({
      currentTab: options.newstype,
    })
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

  navTap: function (event) {
    var that = this;
    var currentTab = event.currentTarget.dataset.current;
    that.setData({
      currentTab: event.currentTarget.dataset.current,

    });


  },
  fulidetail: function () {
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