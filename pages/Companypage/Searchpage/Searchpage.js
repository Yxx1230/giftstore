// pages/Companypage/Searchpage/Searchpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchcontent: true,
    searchitemList: [
      { searchname: '草莓' },
      { searchname: '小礼盒' },
      { searchname: '生日礼物' },
      { searchname: '生日礼盒' },
      { searchname: '养生品' },
      { searchname: '新年礼包' },
      { searchname: '节日快乐' },
    ],
    welfareList: [
      {
        welfare_img: 'https://www.fuxingfuli.com/files/data/1/image/750/1548310342494.jpg',
        distance: '0.1km',
        regionBak: '全国',
        region: '北京市',
        welfare_virtual_num: 100,
        receive_num: 3,
        view_count: 45,
        start_time_bak: '2019-01-12',
        end_time_bak: '2019-12-30',
        welfare_name: '奥地利安抚，安富利奥奥地利安抚，安富利地利安抚，安富利',
        address: '北京市北京市',
        welfare_reward_coin: 10,
        card_coins: 2,
        paymoney: 299.9
      },
      {
        welfare_img: 'https://www.fuxingfuli.com/files/data/1/image/750/1548310342494.jpg',
        distance: '0.1km',
        regionBak: '全国',
        region: '北京市',
        welfare_virtual_num: 100,
        receive_num: 3,
        view_count: 45,
        start_time_bak: '2019-01-12',
        end_time_bak: '2019-12-30',
        welfare_name: '奥地利安抚，安富利奥奥地利安抚，安富利地利安抚，安富利',
        address: '北京市北京市',
        welfare_reward_coin: 10,
        card_coins: 2,
        paymoney: 299.9
      },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var searchtype = options.searchcontent;
    if (searchtype == 0){
      this.setData({
        searchcontent:false,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onSwiperTap: function () {
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })

  },
  //  搜索事件
  searchBtn: function (e) {
    var that = this;
    // console.log(e)
    that.setData({
      searchcontent: false,
    })
  },
  Blurtab: function (e) {
    // console.log
  },
  isdelitem: function () {

    this.setData({
      searchitemList: '',
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