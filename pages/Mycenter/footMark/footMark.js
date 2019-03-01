
Page({

    /**
     * 页面的初始数据
     */
    data: {
      Nametype:[
        { name: '福利', active: true },
        { name: '店铺', active: false },
      ],
      type:'1',
      flType:'0',
      currentTab:0,
      flag:false,
      isGz:false,
      welnameList: [
        {
          welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypceimg.png',
          welfare_name: '九十九蒸芝麻糕九十九蒸芝麻糕',
          welnum: '20',
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
      shopList: [
        {
          shop_img: 'https://www.fuxingfuli.com/images/giftstore/ypceimg.png',
          shop_name: '九十九蒸芝麻糕九十九蒸芝麻糕',
          shop: '20',
          welprice: '69.9',
          isGz: false,
        },
        {
          welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcimg.png',
          welfare_name: 'GUM儿童米菲兔牙膏套装GUM儿童米菲兔牙膏套装',
          welnum: '20',
          welprice: '69.9',
          isGz: false,
        },
        {
          welfare_img: 'https://www.fuxingfuli.com/images/giftstore/ypcre.png',
          welfare_name: 'GUM儿童米菲兔牙膏套装GUM儿童米菲兔牙膏套装',
          welnum: '20',
          welprice: '69.9',
          isGz: false,
        },
      ],
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var  that =this;
        that.setData({
          flType: options.currentTab,
        })
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
  
    },
  
  //顶部tab栏切换
  navTap: function (event) {
    var that = this;
    var currentTab = event.currentTarget.dataset.currenttab;
    that.setData({
      flType: currentTab,
    });
  },
  // 去店铺首页
  tocmppage: function (e) {
    var companyId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/Companypage/Company/Companypage?id=' + companyId,
    })
    // wx.navigateTo({
    //   url: '/pages/Companypage/Spcompanypage/Spcompanypage?id=' + companyId,
    // })
  },
  // 打电话
  phone: function (e) {
    // var tel = e.currentTarget.dataset.tel
    // console.log(tel)

    wx.makePhoneCall({
      phoneNumber: '12345'
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
  
    },
    getItem: function (e) {
      var index = e.currentTarget.dataset.act;
      var list = this.data.Nametype.map(item => {
        item.active = false;
        this.data.Nametype[index].active = true;
        return item
      })
      this.setData({
        Nametype: list,
        flType:index
      })
    },
    getType:function(e){
      this.setData({
        type: e.currentTarget.dataset.act
      })
    },
      getShow:function(e){
        this.setData({
          flag:!this.data.flag
        })
      },
      getGz:function(e){
        var index = e.currentTarget.dataset.act;
       
        var lists = this.data.shopList.map(item => {
          this.data.shopList[index].isGz = !this.data.shopList[index].isGz;
          return item
        })
       
        this.setData({
          shopList: lists,
          flag: !this.data.flag,
          isGz: index
        })
     
      }

  })