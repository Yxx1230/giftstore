Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['全部订单', '自购订单', '送礼订单', '收礼订单','兑换订单'],
      Arraytype: [
        {name:'全部订单',active:false}, 
        { name: '待付款', active: false }, 
        { name: '待发货', active: false }, 
        { name: '已发货', active: false },
        { name: '已退款', active: false }, 
        { name: '已完成', active: false },
        { name: '待领取', active: false }, 
        { name: '未核销', active: false },
        { name: '已核销', active: false },
        ],
        Tabtype:0,
        orderName: '神通快递',
        courierNumber: '121314',
        status: '0',
        backMSG: [{
          time: '2019-02-20',
          context: '神通快递神通快递神通快递神通快递神通快递神通快递',
        }, {
            time: '2019-02-20',
            context: '神通快递神通快递神通快递神通快递神通快递神通快递',
          }
        ]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var index = options.type;
      var list = this.data.Arraytype.map(item => {
        item.active = false;
        this.data.Arraytype[index].active = true;
        return item
      })
      this.setData({
        Arraytype: list
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
  
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      getItem:function(e){
        var index = e.currentTarget.dataset.act;
        var list = this.data.Arraytype.map(item=>{
          item.active = false;
          this.data.Arraytype[index].active = true;
          return item
        })
        this.setData({
          Arraytype:list
        })
      },
      //提醒商家发货
      totalk: function () {
        // this.setData({
        //   istalk:true,
        // })
        wx.showModal({
          title: '提示',
          content: '已提醒商家发货',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      //确认收货
      toget: function () {
        // this.setData({
        //   istalk:true,
        // })
        wx.showModal({
          title: '提示',
          content: '已确认收货',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      //删除订单
        del: function () {
          // this.setData({
          //   istalk:true,
          // })
          wx.showModal({
            title: '提示',
            content: '已删除',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        },
      //客服电话
      tocall: function () {
        wx.makePhoneCall({
          phoneNumber: '400'
        })
      },
      //跳转待付款页面
      toPaypage: function () {
        wx.navigateTo({
          url: '/pages/Myorder/orderDetail/orderDetail',
        })
      },
       //去支付
      topay: function () {
        wx.navigateTo({
          url: '/pages/pay/pay',
        })
      },
      //跳转商家
      tocompany: function () {

        wx.navigateTo({
          url: '/pages/Companypage/Spcompanypage/Spcompanypage',
        })
      },
      //跳转发货
        toOrderForm: function (e) {
          console.log(e)
          var type = e.currentTarget.dataset.type
          wx.navigateTo({
            url: '/pages/Myorder/orderForm/orderForm?type='+type,
          })
        },
        //自购发货
        toOrderSelf: function () {
          wx.navigateTo({
            url: '/pages/Myorder/orderSelf/orderSelf',
          })
        },
        //派送礼物
        tostoreHouse: function () {

          wx.navigateTo({
            url: '/pages/storeHouse/storeHouse',
          })
        },
        //礼物详情
        togiftset: function () {
          wx.navigateTo({
            url: '/pages/myGift/Giftdetails/Giftdetails',
          })
        },
        //福利详情
        toFulidetail:function(){
          wx.navigateTo({
            url: '/pages/fuliDetail/fuliDetail',
          })
        },
       //待领取
        getdrawOrder: function (e) {
          console.log(e)
          var type = e.currentTarget.dataset.ins
          wx.navigateTo({
            url: '/pages/Myorder/drawOrder/drawOrder?type='+type,
          })
        },
        //派送礼物
        toGiftdetails:function(){
          wx.navigateTo({
            url: '/pages/myGift/Giftdetails/Giftdetails',
          })
        },
      //查看物流
        getcheckLogisticsTap:function(e){
          this.setData({
            checkLogisticsTap:!this.data.checkLogisticsTap
          })
        },
        //关闭物流弹框
        ClosecheckLogisticsTap:function(e){
          this.setData({
            checkLogisticsTap:!this.data.checkLogisticsTap
          })
        },
  })