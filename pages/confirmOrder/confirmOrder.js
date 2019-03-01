
Page({

    /**
     * 页面的初始数据
     */
    data: {
      eachnum:1,   
      num: 1,// input默认是1  
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
  
  tosubmit: function () {
    wx.navigateTo({
      url: '/pages/pay/pay?status=1',
    })
  },
  openSetting: function () {
    wx.getSetting({
      success(res) {
        // 未授权
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success(res) {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              cosnole.log(res)
              wx.chooseAddress({
                success(res) {
                  console.log(res.userName)
                  console.log(res.postalCode)
                  console.log(res.provinceName)
                  console.log(res.cityName)
                  console.log(res.countyName)
                  console.log(res.detailInfo)
                  console.log(res.nationalCode)
                  console.log(res.telNumber)
                }
              })
            }
          })
        } else {
          // 授权
          wx.chooseAddress({
            success(res) {
              console.log(res.userName)
              console.log(res.postalCode)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
        }
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
  })