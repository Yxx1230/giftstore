Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664320890&di=a11dd700c47d298b1ed48b0a026fb278&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120105%2F0017030057473498_b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg'
    ],
    buyerAvater: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
    avatarList: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664320890&di=a11dd700c47d298b1ed48b0a026fb278&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120105%2F0017030057473498_b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664320890&di=a11dd700c47d298b1ed48b0a026fb278&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120105%2F0017030057473498_b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664320890&di=a11dd700c47d298b1ed48b0a026fb278&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120105%2F0017030057473498_b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321610&di=9a8a998b3b96cd7635dc7e910a8baf29&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fg6%2FM06%2F19%2FE4%2FwKhQsFPTSM-ECGz5AAAAAGajBU4076.jpg'
    ],
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
    detailList: [{
      type: 'text',
      text: '奥卡福拔萝卜GV乐极生悲格拉斯哥花完了'
    }, {
      type: 'img',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg'
    }],
    recommendList: [{
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾纯棉柔巾洗脸巾纯棉柔巾洗脸巾纯棉柔巾洗脸巾纯棉柔巾洗脸巾纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】纯棉柔巾洗脸巾',
      price1: 59.90,
      price2: 65.50
    }, {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548664321617&di=5be5e27f4ac8f07ffa7a5a40848eeb41&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db0e96188e324b899ca31717b066f77e0%2Fa8014c086e061d9592aa7cb071f40ad163d9ca4e.jpg',
      name: '【环球精品】',
      price1: 59.90,
      price2: 65.50
    }],
    rewardShow:0
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //跳转店铺
  toShop:function(){
    wx.navigateTo({
      url: '/pages/Companypage/Company/Companypage',
    })
  },
  // 打客服电话
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: '400'
    })
  },
  //跳转订单
  toOrder:function(){
    wx.switchTab({
      url: '/pages/Myorder/Myorder',
    })
  },
  //自己购买
  selfBuy:function(){
    wx.navigateTo({
      url: '/pages/confirmOrder/confirmOrder', 
    })
  },
  recommend: function () {
    wx.navigateTo({
      url: '/pages/fuliDetail/fuliDetail',
    })
  },
  //赠送好友
  sendGift:function(){
    wx.navigateTo({

      url: '/pages/Buygift/Buygift',
    })
  },
  todragzoom: function () {
    wx.navigateTo({
      url: '/pages/Dragzoom/Dragzoom',
    })
  },
  //展示奖励弹框
  rewardShow:function(){
    this.setData({
      rewardShow:1
    })
  },
  //展示奖励弹框
  rewardClose: function () {
    this.setData({
      rewardShow: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

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