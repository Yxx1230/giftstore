// pages/Mycenter/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'USA',
        value: '男'
      },
      {
        name: 'CHN',
        value: '女',
        checked: 'true'
      }
    ],
    region: ['广东省', '广州市', '海珠区'],
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  //上传头像
  img_item: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          ['tempFilePaths[' + e.target.id + ']']: res.tempFilePaths[0]
        });
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            console.log(res)
            that.setData({
              ['tempFilePaths64[' + e.target.id + ']']: res.data
            });
            that.setData({
              form: {
                storePhotoUrl: that.data.tempFilePaths64[0],
                scenePhoneUrl: that.data.tempFilePaths64[1],
              }
            })
          }
        })
      }
    })
  },
  tomycenter:function(){
      wx.switchTab({
        url: '/pages/Mycenter/my/Mycenter',
      })
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
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