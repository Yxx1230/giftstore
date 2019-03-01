// pages/Givegiftset/Givegiftset.js
var url = getApp().globalData.url;
var commonUrl = getApp().globalData.commonUrl;
var adminId = getApp().globalData.adminId;
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay:false,
    indicatorDots: true,
    videoSource:'',//视频路径
    videoshow:false,
    isvideoshow: false,
    autoplayvideo: false,
    isauido:false,
    startluyin:true,
    isplaystart:true,
    auidoshow:false,
    dabaobtn: false,
    selectbtn:false,
    ispre: false,
    preventD: false,
    giftnum:2,
    currenttype:0,//打包、群发
    currentTab:0,//视频录音
    arrowtype:0,//图标方向  
    num: 1,// input默认是1  
    eachnum:1,    
    isBless:true,//是否弹层
    minusStatus: 'disabled',  // 使用data数据对象设置样式名 
    minusStatues: 'disabled',  // 使用data数据对象设置样式名 
    thumbTempFilePath:'',
    blessword:'',
    // blessword:'大吉大利 送您好礼',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var state = options.state;
    var that =this;
    if (state ==0 ){
      that.setData({
        ispre:true,
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
  changeone: function () {
    var that = this;
    that.setData({
      currenttype: 0,
      dabaobtn:false,
      isBless:true
    })
  },
  changetwo: function () {
    var that = this;
    that.setData({
      currenttype: 1,
      dabaobtn: false,
      isBless:true
    })
  },
  //打包送一人
  changemethod: function () {
    var that = this;
    that.setData({
      dabaobtn:true,
      isBless:false
    })

  },
  //录制视频
  onvideoshow:function(){
    var that = this;
    wx.chooseVideo({
      //相机和相册
      sourceType: ['album', 'camera'],
      //录制视频最大时长
      maxDuration: 30,
      compressed:true,//压缩视频
      //摄像头
      camera: ['front', 'back'],
      //这里返回的是tempFilePaths并不是tempFilePath
      success: function (res) {
        console.log(res)
        console.log(res.tempFilePath)
        that.setData({
          videoSource: res.tempFilePath,
          videoshow: true,
          thumbTempFilePath: res.thumbTempFilePath,
        })
      },
      fail: function (e) {
        console.log(e)
      }
    })

  },
  toplayvideo:function(){
      this.setData({
        isvideoshow:true,
        autoplayvideo:true,
      })
  },
  remakevideo: function () {
    this.setData({
      videoshow: false,
      videoSource: '',
    })
  },
  remakeauido: function () {
    this.setData({
      auidoshow: false,
      isauido: false,
    })
  },
  //长按
  longTap: function () {
    console.log('longTap....')

  },
//开始录音的时候
  touchStart: function () {
    console.log('touchStart....')
    this.start();
    this.setData({
      startluyin:false,
    })
  },

  touchEnd: function () {
    console.log('touchEnd....')
    this.stop();
    this.setData({
      isauido: true,
      auidoshow:true,
    })
  }, 
  //开始录音的时候
  start: function () {
    console.log('开始录音....')
    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },

  //停止录音
  stop: function () {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.tempFilePath = res.tempFilePath;
      console.log('停止录音', res.tempFilePath)
      const { tempFilePath } = res
    })
  },


  //播放声音
  play: function () {
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.tempFilePath,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
          wx.showToast({

            title: '开始播放',

            icon: 'success',

            duration: 1000

          }) 
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  //播放视频
  voicestart:function(){

    var that =this;
    if (that.data.isplaystart ==true){
      this.play();
      this.setData({
        isplaystart: false,
      })
    }else{
      this.play();
      this.setData({
        isplaystart: true,
      })
    }
  },
  //滑动切换
  swiperTab: function (e) {
    // console.log(e)
    this.setData({
      currentTab: e.detail.current,

    })
  },
  //设置分享标语
  ishowshare:function(){
    var that = this;
    if (that.data.arrowtype == 0){
      that.setData({
        arrowtype: 1
      })
    } else if(that.data.arrowtype == 1){
      that.setData({
        arrowtype: 0
      })
    }

  },
  /* 点击减号 */
  bindMinus: function (e) {
    var index = e.target.dataset.index;
    console.log(index,"刚刚您点击了加+");
    if (index == 0){
      var num = this.data.num;
      if (num > 1) {
        num--;
      }
      // var minusStatus = num <= 1 ? 'disabled' : 'normal'; 
      this.setData({
        num: num,
        // minusStatus: minusStatus
      });
    }else{
      var eachnum = this.data.eachnum;
      if (eachnum > 1) {
        eachnum--;
      }
      // var minusStatus = eachnum <= 1 ? 'disabled' : 'normal';
      this.setData({
        eachnum: eachnum,
        // minusStatues: minusStatus
      });
    }

  },
  /* 点击加号 */
  bindPlus: function (e) {
    var index = e.target.dataset.index;
    console.log(index, "刚刚您点击了加+");
    if (index == 0) {
      var num = this.data.num;
      num++;
      // var minusStatus = num < 1 ? 'disabled' : 'normal';    
      this.setData({
        num: num,
        // minusStatus: minusStatus
      });
    } else if (index == 1) {
      var eachnum = this.data.eachnum;
      eachnum++;
      // var minusStatus = eachnum < 1 ? 'disabled' : 'normal';

      this.setData({
        eachnum: eachnum,
        // minusStatues: minusStatus
      });
    }
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  bindManuals: function (e) {
    var eachnum = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      eachnum: eachnum
    });
  },
  towarehouse:function(){
    wx.navigateTo({
      url: '/pages/myGift/Preview/Preview',
    })
  },
  changestore: function () {
    wx.navigateTo({
      url: '/pages/storeHouse/storeHouse',
    })
  },
  // 生成礼物贺卡
  changemore: function () {
    var that = this;
    wx.navigateTo({
      url: '/pages/Dragzoom/Dragzoom?type=makegift',
    })
    that.setData({
      selectbtn: false,
    })
  },
  // 关闭预览
  closepre: function () {
    wx.navigateBack({
      url: '/pages/Buygift/Buygift',
    })
  },
  closeedit: function () {
    var that = this;
    that.setData({
      dabaobtn: false,
      isBless:true
    })
  },
  clickzhezhao: function (e) {
    var that = this;
    that.setData({
      dabaobtn: false,
      isBless:true
    })
  },
  changeedit: function () {
    var that = this;
    that.setData({
      selectbtn: false,
      isBless:true
    })
  },
  givefriend: function () {
    var that = this;
    that.setData({
      selectbtn:true,
      isBless:false
    })
    // wx.showActionSheet({
    //   itemList: ['发送给好友', '生成礼物贺卡'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //     if (res.tapIndex === 0) {
    //       console.log('发送给好友');


    //     } else {
    //       console.log('生成礼物贺卡');
    //       wx.navigateTo({
    //         url: '/pages/Editcard/Editcard',
    //       })
    //     }

    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
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
  onShareAppMessage: function (res) {
    var that =this;
    that.setData({
      selectbtn: false,
    })
    return {
      title: '123',
      imageUrl: 'https://www.fuxingfuli.com/images/giftstore/yuserphoto.png',
      path: '/pages/myGift/Givegiftset/Givegiftset' ,
    }
  }
 
})