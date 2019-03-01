// pages/Dragzoom/Dragzoom.js
var commonUrl = 'https://test2.fxs100.cn/fuliShare/html/web/gift_store/#/';
var shareType = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    shareType = options.type;
    if (options.type == 'makegift') { //我的消息
      this.setData({
        src: commonUrl + 'Dragzoom?contextPath=' + 'fuliShare' + '&orderNumber=' + 'sc1548987898884' + '&uuid=' + '8cfb192ab2ae4121ad317b04d97bbf46' + '&showType=' + 'word' + '&titleShare=' + '%E5%B0%8F%E5%B0%8F%E7%9A%84%E7%A4%BC%E7%89%A9%EF%BC%8C%E8%BD%BD%E7%9D%80%E9%87%8D%E9%87%8D%E7%9A%84%E6%83%85%E6%84%8F%EF%BC%8C%E9%A3%9E%E5%88%B0%E4%BD%A0%E8%BA%AB%E8%BE%B9%EF%BC%8C%E7%A5%9D%E4%BD%A0%E5%B9%B8%E7%A6%8F%EF%BC%81' + '&blessWord=' + '%E5%A4%A7%E5%90%89%E5%A4%A7%E5%88%A9%E9%80%81%E6%82%A8%E5%A5%BD%E7%A4%BC' + '&value=' + '' + '&firstFrame=' + '' 
      })
      console.log(commonUrl + 'Dragzoom?contextPath=' + 'fuliShare' + '&orderNumber=' + 'sc1548987898884' + '&uuid=' + '8cfb192ab2ae4121ad317b04d97bbf46' + '&showType=' + 'word' + '&titleShare=' + '%E5%B0%8F%E5%B0%8F%E7%9A%84%E7%A4%BC%E7%89%A9%EF%BC%8C%E8%BD%BD%E7%9D%80%E9%87%8D%E9%87%8D%E7%9A%84%E6%83%85%E6%84%8F%EF%BC%8C%E9%A3%9E%E5%88%B0%E4%BD%A0%E8%BA%AB%E8%BE%B9%EF%BC%8C%E7%A5%9D%E4%BD%A0%E5%B9%B8%E7%A6%8F%EF%BC%81' + '&blessWord=' + '%E5%A4%A7%E5%90%89%E5%A4%A7%E5%88%A9%E9%80%81%E6%82%A8%E5%A5%BD%E7%A4%BC' + '&value=' + '' + '&firstFrame=' + '' );
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

  }
})