// pages/Cutpictures/upload/upload.js
import WeCropper from '../we-cropper/we-cropper.js'

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight - 50

var activityId = '';
var king_id = '';
var ctx = getApp().globalData.ctx;
var phpCtx = getApp().globalData.phpCtx;
var phpSellerCtx = getApp().globalData.phpSellerCtx;
var adminId = getApp().globalData.adminId;
var imgUrl = getApp().globalData.imgUrl;
// var getCookie = getApp().getHKCookie;
var userId = wx.getStorageSync('userId');
var netRequest = getApp().netRequest;

Page({
  data: {
    cropperOpt: {
      id: 'cropper',
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 400) / 2,
        width: 300,
        height: 420,

      }
    },

  },
  onLoad: function (option) {
    const {
      cropperOpt
    } = this.data
    var uploadtype = option.uploadtype;
    var vote_id = option.vote_id
    console.log(option, 'options')
    if (option.src) {
      cropperOpt.src = option.src
      new WeCropper(cropperOpt)
        .on('ready', (ctx) => { })
        .on('beforeImageLoad', (ctx) => {
          wx.showToast({
            title: '上传中',
            icon: 'loading',
            duration: 20000
          })
        })
        .on('imageLoad', (ctx) => {
          // console.log(`picture loaded`)
          // console.log(`current canvas context:`, ctx)
          wx.hideToast()
        })
        .on('beforeDraw', (ctx, instance) => { })
        .updateCanvas()
    }
    var that = this;
    var activityId = option.activity_id;

    that.setData({
      activity_id: activityId,
      uploadtype: uploadtype,
      vote_id: vote_id,
    })

  },

  touchStart(e) {
    this.wecropper.touchStart(e)
  },
  touchMove(e) {
    this.wecropper.touchMove(e)
  },
  touchEnd(e) {
    this.wecropper.touchEnd(e)
  },
  getCropperImage() {
    var that = this;
    that.wecropper.getCropperImage((avatar) => {

      if (avatar) {
        netRequest({
          url: '/activity/uploadImgFile',
          data: {
            image: avatar
          },
          requestType: 'uploadFile',
          success: function (res) {
            console.log(res, '获取到裁剪后的图片')
            var activity_id = that.data.activity_id;

            var SrcImgavatar = JSON.parse(res).src;
            var uploadtype = that.data.uploadtype;
            var vote_id = that.data.vote_id
              wx.redirectTo({
                url: `/pages/Editgiftcard/Editgiftcard?avatar=` + avatar + '&activity_id=' + activity_id + '&SrcImgavatar=' + SrcImgavatar,

              })



          }
        })


      } else {
        console.log('获取图片失败，请稍后重试')
      }
    })
  },
  uploadTap() {

    var that = this

    var activity_id = that.data.activity_id;
    var uploadtype = that.data.uploadtype;
    var vote_id = that.data.vote_id

      wx.redirectTo({
        url: '/pages/Editgiftcard/Editgiftcard?activity_id=' + activity_id + '&type=' + 1,

      })
  

  },

})