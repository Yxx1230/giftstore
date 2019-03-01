
Page({

    /**
     * 页面的初始数据
     */
    data: {
         isDra:true
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options)
      var type = options.type;
      if (type == 1){
        this.setData({
          isDra:false
        })
      }
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
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
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
    // 联系商家
    tocall: function () {
      wx.makePhoneCall({
        phoneNumber: '400'
      })
    },
    //送礼记录
      togiftset: function () {
          wx.navigateTo({
            url: '/pages/myGift/Giftdetails/Giftdetails',
          })
        },
    //领取记录
    getGift:function(){
      wx.navigateTo({
        url: '/pages/Myorder/indent/indent',
      })
    },
      //福利详情
      toFulidetail:function(){
        wx.navigateTo({
          url: '/pages/fuliDetail/fuliDetail',
        })
      },
  })