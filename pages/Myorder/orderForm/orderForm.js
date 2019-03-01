
Page({

    /**
     * 页面的初始数据
     */
    data: {
         isForm:false,
      istalk: true,
      isshou:false
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var type = options.type;
     console.log(options)
      if (type == 2){
        this.setData({
          isshou:!this.data.isshou
        })
      }else if(type == 1){
        this.setData({
          isForm: true,
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
  
  totalk:function() {
    // this.setData({
    //   istalk:true,
    // })
    wx.showModal({
      title: '提示',
      content: '已提醒商家发货',
      showCancel:false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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
     //福利详情
   toFulidetail:function(){
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })
  },
    //客服电话
    tocall: function () {
      wx.makePhoneCall({
        phoneNumber: '400'
      })
    },
    //收礼记录
    receiveGift:function(){
      wx.navigateTo({
        url: '/pages/Myorder/receiveGift/receiveGift',
      })
    }
  })