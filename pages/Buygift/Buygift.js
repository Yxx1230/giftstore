
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eachnum:1,   
    num: 1,// input默认是1  
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

  tosubmit: function () {
    wx.navigateTo({
      url: '/pages/pay/pay?status=0',
    })
  },
  togetset: function () {
    wx.navigateTo({
      url: '/pages/myGift/Givegiftset/Givegiftset?state=0',
    })
    wx.setNavigationBarTitle({
      title: '关闭预览'
    })
  },
  togetpre: function () {
    wx.navigateTo({
      url: '/pages/Sendgift/Sendgift?state=0',
    })
    wx.setNavigationBarTitle({
      title: '关闭预览'
    })
  },
  // 联系商家
  tocall: function () {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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
   /* 点击减号 */
   bindMinus: function (e) {
    var index = e.target.dataset.index;
    console.log(index,"刚刚您点击了加+");
    if (index == 0){
      var num = this.data.num;
      if (num > 1) {
        num--;
      }
      // var minusStatus = num <= 1 ? 'disabled' : 'normal'; 
      this.setData({
        num: num,
        // minusStatus: minusStatus
      });
    }else{
      var eachnum = this.data.eachnum;
      if (eachnum > 1) {
        eachnum--;
      }
      // var minusStatus = eachnum <= 1 ? 'disabled' : 'normal';
      this.setData({
        eachnum: eachnum,
        // minusStatues: minusStatus
      });
    }

  },
  /* 点击加号 */
  bindPlus: function (e) {
    var index = e.target.dataset.index;
    console.log(index, "刚刚您点击了加+");
    if (index == 0) {
      var num = this.data.num;
      num++;
      // var minusStatus = num < 1 ? 'disabled' : 'normal';    
      this.setData({
        num: num,
        // minusStatus: minusStatus
      });
    } else if (index == 1) {
      var eachnum = this.data.eachnum;
      eachnum++;
      // var minusStatus = eachnum < 1 ? 'disabled' : 'normal';

      this.setData({
        eachnum: eachnum,
        // minusStatues: minusStatus
      });
    }
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
})