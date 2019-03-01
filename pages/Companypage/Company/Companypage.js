// pages/Companypage/Companypage.js
var app = getApp();
var senenId = getApp().globalData.senenId; //场景值

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordernum: 121,
    arrowshow: false, //箭头方向
    isfollow: false, //是否关注
    isfixed: false, //是否固定
    showclick: false, //未收藏小程序提醒弹框
    isxcfollow: false, //是否收藏了小程序
    menuTop: '', //滑动的高度
    btntab: 0, //底部tab栏切换
    currentTab: 0, //tab栏切换
    len: 1, //全部商品
    isspecial: true, //是否为个性版本
    showclassifybox: false,
    classifyf: true, //分类页面箭头方向
    showsearchbo: false, //搜索页面
    searchcontent: true,
    companyinfo: {
      cmplogo: 'https://www.fuxingfuli.com/images/giftstore/guoancomplogo.png',
      cmpmarklogo: 'https://www.fuxingfuli.com/images/giftstore/guoanlogo.png',
      cmpname: '中信国安宜食',
      welnum: '3',
      viewlook: '5',
      address: '北京 海淀',
      cmpcontent: '国安宜食，健康您的生活，甄选好货，送礼送健康，水果生鲜，滋养保健品应有尽有，在春节来临之际特此推出国安宜食，健康您的生活，甄选好货，送礼送健康，水果生鲜，滋养保健品应有尽有，在春节来临之际特此推出。',
    },
    commentList: [{
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      nickName: '露露酱',
      text: '终于收到了我要的东西了，东西很好用，谢谢了！'
    }, {
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      nickName: 'Mistiy',
      text: '收到了，孩子非常的喜欢，不错不错！',
      commentImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg'
    }, {
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      nickName: '露露酱',
      text: '终于收到了我要的东西了，东西很好用，谢谢了！'
    }, {
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      nickName: 'Mistiy',
      text: '收到了，孩子非常的喜欢，不错不错！',
      commentImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg'
    }],
    welfareList: [{
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
    classifyitemList: [{
        classname: '礼品大礼包'
      },
      {
        classname: '办公零食'
      },
      {
        classname: '特产'
      },
      {
        classname: '点心'
      },
      {
        classname: '进口零食'
      },
      {
        classname: '肉制品'
      },
    ],
    searchitemList: [{
        searchname: '草莓'
      },
      {
        searchname: '小礼盒'
      },
      {
        searchname: '生日礼物'
      },
      {
        searchname: '生日礼盒'
      },
      {
        searchname: '养生品'
      },
      {
        searchname: '新年礼包'
      },
      {
        searchname: '节日快乐'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var companyId = options.id;
    var that = this;

    if (that.data.ordernum > 100) {
      that.setData({
        ordernum: '99+'
      })
    }
    console.log(senenId)
    // wx.getUserInfo({
    //   success: function(res) {

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
  onShow: function() {
    var that = this;
    var query = wx.createSelectorQuery() //创建节点查询器 query

    query.select('#searchfixed').boundingClientRect() //这段代码的意思是选择Id= the - id的节点，获取节点位置信息的查询请求
    query.exec(function(res) {
      // console.log(res[0].top); 
      that.setData({
        menuTop: res[0].top
      })
    });

  },

  // 打客服电话
  callphone: function() {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },
  toshowmore: function() {
    if (this.data.arrowshow == false) {
      this.setData({
        arrowshow: true
      })
    } else {
      this.setData({
        arrowshow: false
      })
    }
  },
  toliushui: function() {
    wx.navigateTo({
      url: '/pages/Mycenter/Luckymoneypage/Luckymoneypage',
    })
  },
  //tab切换
  onMainTap: function(e) {
    var that = this;
    var currentTab = e.currentTarget.dataset.currenttab
    that.setData({
      currentTab: currentTab,
    })
    if (currentTab == 0) {
      that.setData({
        btntab: 0,
      })
    } else if (currentTab == 1) {
      that.setData({
        btntab: 1,
      })
    }
    // else if (currentTab == 2) {
    //   that.setData({
    //     btntab: 2,
    //   })
    // }
  },
  onBtnTap: function(e) {
    console.log(e.currentTarget.dataset.btncurrenttab)
    var that = this;
    var btntab = e.currentTarget.dataset.btncurrenttab
    that.setData({
      btntab: btntab,
      // currentTab:0,
    })
    if (btntab == 0) {
      that.setData({
        currentTab: 0,
      })
    } else if (btntab == 1) {
      that.setData({
        currentTab: 1,
      })
    } else if (btntab == 2) {
      that.setData({
        showclassifybox: true,
      })
    }

  },
  tofollow: function(e) {
    console.log(e.currentTarget.dataset.state)
    var followstate = e.currentTarget.dataset.state;
    var that = this;
    if (followstate == 0) {
      that.setData({
        isfollow: true,
      })
      that.setData({
        showclick: true,
      })
      // if (that.data.isxcfollow == false) {
      //   setTimeout(function() {
      //     that.setData({
      //       showclick: false,
      //     })

      //   }, 2000);
      // }
      // wx.showToast({
      //   title: '关注店铺成功',
      //   icon: 'none'
      // })
    } else {
      that.setData({
        isfollow: false,

      })
      wx.showToast({
        title: '取消关注店铺成功',
        icon: 'none'
      })
    }


  },
  // 去我的订单
  toorderpage: function() {
    wx.switchTab({
      url: '/pages/Myorder/Myorder',
    })
  },
  returnpage: function() {
    this.setData({
      showclassifybox: false,

    })
  },
  isshowarrow: function() {
    if (this.data.classifyf == true) {
      this.setData({
        classifyf: false,

      })
    } else {
      this.setData({
        classifyf: true,

      })
    }

  },
  tosearch: function() {
    // this.setData({
    //   showsearchbo:true,
    // })
    wx.navigateTo({
      url: '/pages/Companypage/Searchpage/Searchpage',
    })
  },
  searchpage: function() {
    wx.navigateTo({
      url: '/pages/Companypage/Searchpage/Searchpage?searchcontent=0',
    })
  },
  isdelitem: function() {

    this.setData({
      searchitemList: '',
    })
  },

  // 2.监听页面滚动距离scrollTop

  onPageScroll: function(e) {
    var that = this;
    // 3.当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.scrollTop > (that.data.menuTop - 40)) {
      that.setData({
        isfixed: true
      })
    } else {
      that.setData({
        isfixed: false
      })
    }
  },
  //  搜索事件
  searchBtn: function(e) {
    var that = this;
    // console.log(e)
    that.setData({
      searchcontent: false,
    })
  },
  Blurtab: function(e) {
    // console.log
  },
  // 去首页
  tohomepage: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })

  },
  onSwiperTap: function() {
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })

  },
  tocomment: function() {
    wx.navigateTo({
      url: '/pages/fuliDetail/comment/comment',
    })
  },
  //关闭关注弹框
  remindClose: function () {
    this.setData({
      showclick: false
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})