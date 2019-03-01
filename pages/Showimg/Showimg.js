// pages/Showimg/Showimg.js
let maskCanvas = wx.createCanvasContext('maskCanvas');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var _this = this;
    // _this.setData({
    //   imgSrc: options.src
    // })
    _this.setData({
      imgSrc: 'https://www.fuxingfuli.com/images/giftstore/imgsrce.png'
    })  
    wx.downloadFile({
      url: 'https://www.fuxingfuli.com/images/giftstore/imgsrce.png', // 仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          maskCanvas.drawImage(
            res.tempFilePath,
            0,
            0,
            550,
            978
          )
          maskCanvas.draw(false, (e) => {
            wx.canvasToTempFilePath({
              canvasId: 'maskCanvas',
              success: res => {
                console.log(res)
                _this.setData({
                  canvasTemImg: res.tempFilePath
                })
              }
            }, _this)
          })
        }
      }
    })
  },
  save(){
    let _this = this;
    console.log(11)
    // wx.saveImageToPhotosAlbum({
    //   filePath: _this.data.canvasTemImg,
    //   success: res => {
    //     wx.showToast({
    //       title: '保存成功',
    //       icon: "success"
    //     })
    //   },
    //   fail: res => {
        
    //   }
    // })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              wx.saveImageToPhotosAlbum({
                filePath: _this.data.canvasTemImg,
                success(result) {
                  console.log(result)
                }
              })
            }
          })
        }
      }
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