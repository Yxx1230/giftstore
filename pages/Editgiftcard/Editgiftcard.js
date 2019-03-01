// pages/Editcard/Editcard.js
let maskCanvas = wx.createCanvasContext('maskCanvas');
let items = [];
let tpdata = {}; //新创建的组件的信息
let index = 0;
let itemId = 5;
let hCw = 1.778666;
let num = 1; //canvas内的图片占总canvas的百分比;
let bgList = [];
let design = 750;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "../../images/background/yeditorbg.png",
    logosrc:'../../images/background/discount_bg.png',
    canvasWidth: 550,
    //画布
    showCanvas: false, //设置画板的显示与隐藏，画板不隐藏会影响页面正常显示
    shareImgPath: '',   //用于储存canvas生成的图片
    canvasHidden: true, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.getSystemInfo({
      success: sysData => {
        _this.sysData = sysData;
        console.log(sysData)
        _this.setData({
          cHeight: sysData.screenWidth * 0.85 * hCw
        })
      },
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
  togiftcards: function () {
    var that =this;
    wx.showLoading({
      title: '正在生成礼品贺卡',
    })
    that.setData({
      showCanvas: true
    })
    that.drawImg()
    //canvas画图需要时间而且还是异步的，所以加了个定时器
    // setTimeout(() => {
    //   // 将生成的canvas图片，转为真实图片
      
    //   wx.canvasToTempFilePath({
    //     x: 0,
    //     y: 0,
    //     canvasId: 'maskCanvas',
    //     fileType: 'jpg',
    //     success: function (res) {
    //       console.log(res, 'canvas')
    //            wx.hideLoading();
    //        that.setData({
    //          shareImg:res.tempFilePath,
    //        })
          
    //       // wx.saveImageToPhotosAlbum({
    //       //   filePath: res.tempFilePath,
    //       //   success(res) {
    //       //     wx.hideLoading();
    //       //     wx.showToast({
    //       //       title: '保存成功',
    //       //     });
    //       //   },
    //       //   fail() {
    //       //     wx.hideLoading()
    //       //   }
    //       // })
    //     },
    //     fail: function (res) {
    //     }
    //   })
    // }, 500)

  },
  drawImg:function(){
    let that = this;
    // that.canvasHidden = true  //设置画板显示，才能开始绘图
    var img=that.data.bgImg;

    // let ctx = wx.createCanvasContext('maskCanvas')  //这里的“share”是“canvas-id”
    // console.log(img)
    // ctx.drawImage(img,0, 0, 570, 1013);
    // ctx.draw()
    //一张白图

    maskCanvas.setFillStyle('#fff');
    maskCanvas.fillRect(0, 0, this.data.canvasWidth / 2, this.data.canvasWidth / 2 * hCw)
    maskCanvas.closePath();
    maskCanvas.stroke();


    //画底图
    maskCanvas.drawImage(img,0,0,275,489)
    setTimeout(() => {
      maskCanvas.draw(false, (e) => {
        wx.canvasToTempFilePath({
          canvasId: 'maskCanvas',
          success: res => {
            wx.hideLoading();
            this.setData({
              canvasTemImg: res.tempFilePath,
              shareImg: res.tempFilePath,
            })
          }
        }, this)
      })
    }, 500)


  },
  towarehouse:function(){
      wx.saveImageToPhotosAlbum({
        filePath: this.data.shareImg,
            success(res) {
              wx.hideLoading();
              wx.showToast({
                title: '保存成功',
              });
            },
            fail() {
              wx.hideLoading()
            }
          })

  },
  // 上传照片
  upload: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#000",
      success: function (res) {
        if (!res.cancel) {
          // console.log(res.tapIndex, '类型')
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
            that.setData({
              // applyAlert:0,
              // Votedetails: 0,
            })
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
            that.setData({
              // applyAlert: 0,
              // Votedetails: 0,
            })
          }
        }
      }
    })

  },
  // 上传照片
  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: [type], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  

        const src = res.tempFilePaths[0];
        var activity_id = that.data.activity_id;
        wx.redirectTo({
          url: '/pages/Cutpictures/upload/upload?src=' + src + '&activity_id=' + activity_id + '&uploadtype=' + 1,
        })

      }
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
  //保存图片
  save: function () {
    this.setData({
      showCanvas: true
    })
    let prop = 1;
    //一张白图
    console.log(this)
    maskCanvas.setFillStyle('#fff');
    maskCanvas.fillRect(0, 0, this.data.canvasWidth / 2, this.data.canvasWidth / 2 * hCw)
    maskCanvas.closePath();
    maskCanvas.stroke();


    //画底图
    maskCanvas.drawImage(
      '../../images/icon/bannertop.png',
      0,
      0,
      275,
      489
    )



    maskCanvas.draw(false, (e) => {
      wx.canvasToTempFilePath({
        canvasId: 'maskCanvas',
        success: res => {
          this.setData({
            canvasTemImg: res.tempFilePath
          })
        }
      }, this)
    })
  },

  disappearCanvas: function () {
    this.setData({
      showCanvas: false
    })
  },
})