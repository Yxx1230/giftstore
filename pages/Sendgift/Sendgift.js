// pages/Sendgift/Sendgift.js
const innerAudioContext = wx.createInnerAudioContext();

var animation = wx.createAnimation({})
var i = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowVideo: false,
    statetype: 0,
    isplay: false,
    btn_state:1,
    isopenpage:1,
    statetype: 1,
    isplay: false,
    emptygoods: true,
    stategift: 1,//无礼物
    isopenpage: 1,//开屏动画
    playllp: true,//自动播放音乐
    idopen: false,//拆红包
    appendData: [],
    setTimer: 1,
    showtimer: '',
    donghua: true,
    List: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var state = options.state;
    var that = this;
    if (state == 0) {
      that.setData({
        btn_state: 3,
      })
    }
    that.playauido();
    // that.snowFlow();
    that.settime(); //3秒后自动关闭动画
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.snowFlow();
  },

  snowFlow: function () {
    var that = this;
    var setTimer = that.data.setTimer;
    var arr = new Array();
    var showtimer = setInterval(function () {
      var redPack = [
        {
          src: 'https://www.fuxingfuli.com/images/giftstore/coinsy.png',
          left1: Math.floor(Math.random() * 305 + 1),
        },
        {
          src: 'https://www.fuxingfuli.com/images/giftstore/redBox.png',
          left1: Math.floor(Math.random() * 405 + 1),
        },
        {
          src: 'https://www.fuxingfuli.com/images/giftstore/yGiftes.png',
          left1: Math.floor(Math.random() * 205 + 1),
        }
      ]
      let redType = Math.floor((Math.random() * redPack.length))
      arr.push(redPack[redType]);
      setTimer++;
      // console.log(setTimer)
      that.setData({
        appendData: arr,
        setTimer: setTimer,
      })
      var length = that.data.appendData.length
      // console.log(length)
      var list = []
      for (var i = 0; i < length; i++) {
        animation.translateY(604).left(Math.random() * 350).step({ duration: 3000 })
        list.push({
          animationData: animation.export()
        })
      }
      that.setData({
        List: list
      })
      that.clearTimer(that);//清除定时器

    }, 200);
    that.setData({
      showtimer: showtimer,
    })
  },
  //清除定时器
  clearTimer: function (that) {
    var that = this;
    var showtimer = that.data.showtimer;
    if (that.data.setTimer > 30) {
      clearInterval(showtimer);
    }

  },
  // 播放音乐
  playauido: function () {
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    innerAudioContext.src = 'https://www.fuxingfuli.com/files/giftstore/bg_audio.mp3';
    innerAudioContext.title = "天天音乐";
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onStop(() => {
      console.log('停止播放');
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  //停止播放音乐
  closeauido: function (e) {
    var that = this;
    var kind = e.target.id;
    var playllp = that.data.playllp;

    if (playllp == false) {
      innerAudioContext.play();
      this.setData({
        playllp: true
      })
    } else {
      innerAudioContext.stop();
      this.setData({
        playllp: false
      })
    }
  },
  //开红包
  openhb: function (e) {
    var kind = e.target.id;
    var that = this;
    if (that.data.idopen == false) {
      that.setData({
        idopen: true,
        playllp: false,
        // isopenpage:0,
      })
      that.clearTimer(that);//清除定时器
      // console.log('关闭动画')
      setTimeout(function () {
        that.setData({
          isopenpage: 0,
        })
      }, 800) //延迟时间 这里是1秒
    } else {
      that.setData({
        idopen: false,
        // isopenpage: 1,
      })
      that.clearTimer(that);//清除定时器
    }
  },
  //3秒后自动关闭动画
  settime: function () {
    var that = this;
    setTimeout(function () {
      innerAudioContext.stop();
      that.stoppage();//3秒后自动关闭动画
    }, 3000);
  },
  //3秒后自动关闭动画
  stoppage: function () {
    var that = this;
    that.setData({
      idopen: true,
      playllp: false,
      appendData: '',
    })
    that.clearTimer(that);//清除定时器
    setTimeout(function () {
      that.setData({
        isopenpage: 0,
      })
    }, 800) //延迟时间 这里是1秒
  },

  // 语音播放暂停
  playvoice: function () {
    var that = this;
    if (that.data.isplay == false) {
      that.setData({
        isplay: true
      })
    } else {
      that.setData({
        isplay: false
      })
    }
  },
  // 关闭预览
  closepre: function () {
    wx.navigateBack({
      url: '/pages/Buygift/Buygift',
    })
  },
  // 打开视频弹框
  lookvideo: function () {
    this.setData({
      isShowVideo: true
    })
  },
  // 关闭视频弹框
  closeVideo: function () {
    this.setData({
      isShowVideo: false
    })
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

  },
  setAddress(){
    wx.navigateTo({
      url: '/pages/setAddress/setAddress',//填写地址
    })
  }
})