// pages/openpage/openpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playllp: true,
    idopen: false,
    
    wxAppendData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // that.snowFlow();
    // that.settime();
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  snowFlow: function() {
    var that = this;
    var showtimer = setInterval(function() {
      that.data.wxAppendData = [{

          node: 'element',
          tag: 'img',
          class: ['snow_img'],
          src: 'https://www.fuxingfuli.com/images/giftstore/yGiftes.png',

      
    }];
      console.log(that.data.wxAppendData)

      // $(".snow").append(html_snow);
      that.hbFlow();
      // setTimer++;
      // console.log(setTimer)
      // clearTimer();
    }, 400);
  },
  hbFlow: function() {
    // console.log('111')
  },
  closeauido: function(e) {
    var kind = e.target.id;

    if (this.data.playllp == false) {
      this.setData({
        playllp: true
      })

    } else {
      this.setData({
        playllp: false
      })

    }
  },
  openhb: function(e) {
    var kind = e.target.id;

    if (this.data.idopen == false) {
      this.setData({
        idopen: true,
        playllp: false,
      })
      wx.redirectTo({
        url: '/pages/receive/receive',
      })
    } else {
      this.setData({
        idopen: false,
      })
    }
  },
  settime: function() {
    // setTimeout(function () {
    //   wx.redirectTo({
    //     url: '/pages/receive/receive',
    //   })

    // }, 3000);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

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