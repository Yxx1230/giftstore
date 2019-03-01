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
let proportion = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgImg: "../../images/background/discount_bg.jpg",
    canvasWidth:550,
    offsetTop: 0,
    offsetLeft: 0,
    itemList:[
      // {
      //   id: 14008,
      //   type: 'image',
      //   image: '../../images/background/discount_bg.png', //图片地址
      //   top: 0, //初始图片的位置
      //   left: 0,
      //   x: 0, //初始圆心位置，可再downImg之后又宽高和初始的图片位置得出
      //   y: 0,
      //   scale: 1,
      //   angle: 0,
      //   rotate: 0,
      //   active: false, //判定点击状态,
      //   htmlLeft: 0,
      //   htmlTop: 0,
      //   htmlWidth: 206,
      //   htmlHeight: 38,
      //   z_index: 8
      // },
      {
        id: 14008,
        type: 'text',
        text: '我叫原佳豪', //图片地址
        fontSize:38,
        fontColor:'#000000',
        fontAlign:'left',
        top: 0, //初始图片的位置
        left: 0,
        x: 0, //初始圆心位置，可再downImg之后又宽高和初始的图片位置得出
        y: 0,
        scale: 1,
        angle: 0,
        rotate: 0,
        active: false, //判定点击状态,
        htmlLeft: 0,
        htmlTop: 0,
        htmlWidth: 206,
        htmlHeight: 38,
        z_index: 8
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    items = this.data.itemList;
    wx.getSystemInfo({
      success: sysData => {
        _this.sysData = sysData;
        proportion = design / _this.sysData.windowWidth;
        console.log(sysData)
        _this.setData({
          cHeight: sysData.screenWidth * 0.85 * hCw
        })
      },
    })
    wx.createSelectorQuery().select('#the-id').boundingClientRect(function (rect) {
      console.log(rect)
      _this.setData({
        offsetLeft: rect.left,
        offsetTop: rect.top
      })
    }).exec()
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
  //保存图片
  save: function () {
    this.setData({
      showCanvas: true
    })
    // let prop = 1;
    // var aprop = 640 / this.data.canvasWidth;
    // //一张白图
    // maskCanvas.setFillStyle('#fff');
    // maskCanvas.fillRect(0, 0, this.data.canvasWidth / proportion, this.data.canvasWidth / proportion * hCw)
    // maskCanvas.closePath();
    // maskCanvas.stroke();
    //画底图
    maskCanvas.drawImage(
      this.data.bgImg,
      0,
      0,
      200,
      300
    )

    //画原
    // maskCanvas.save();
    // maskCanvas.beginPath();
    // maskCanvas.arc(
    //   50,
    //   100,
    //   50,
    //   Math.PI * 2,
    //   false
    // );
    // // maskCanvas.stroke()
    // maskCanvas.clip(); //截取
    // //画头像
    // maskCanvas.drawImage('../../images/background/discount_bg.png', 0, 50, 100, 100)
    // maskCanvas.closePath();
    // maskCanvas.restore();

    // //文字
    // maskCanvas.save();
    // maskCanvas.beginPath();
    // let textColor = '#000';
    // maskCanvas.setFontSize(30)
    // maskCanvas.setFillStyle(textColor)
    // maskCanvas.fillText(
    //   "我叫原佳豪",
    //   0,
    //   30,
    // );
    // maskCanvas.closePath();
    // maskCanvas.stroke();

    // items.forEach((currentValue, index) => {
    //   maskCanvas.save();
    //   maskCanvas.beginPath();
    //   if (currentValue.type == "image") {
    //     maskCanvas.translate(((currentValue.x - this.data.offsetLeft) / aprop), ((currentValue.y - this.data.offsetTop) / aprop)); //圆心坐标
    //     maskCanvas.rotate(currentValue.angle * Math.PI / 180); // 旋转值
    //     maskCanvas.translate(
    //       -(currentValue.htmlWidth / aprop * currentValue.scale / 2),
    //       -(currentValue.htmlHeight / aprop * currentValue.scale / 2)
    //     )
    //     maskCanvas.drawImage(currentValue.image, 0, 0, currentValue.htmlWidth / aprop * currentValue.scale, currentValue.htmlHeight / aprop * currentValue.scale);
    //     maskCanvas.restore();
    //   }else{
    //     maskCanvas.setFontSize(currentValue.fontSize)
    //     maskCanvas.setFillStyle(currentValue.fontColor)
    //     maskCanvas.fillText(
    //       currentValue.text,
    //       0,
    //       0
    //     );
    //     maskCanvas.closePath();
    //     maskCanvas.stroke();
    //   }
      
      
    // })

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
  saveImg: function () {
    let _this = this;
    wx.saveImageToPhotosAlbum({
      filePath: _this.data.canvasTemImg,
      success: res => {
        wx.showToast({
          title: '保存成功',
          icon: "success"
        })
      }
    })

  },
  touchStart: function (e) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
      if (e.currentTarget.dataset.id == items[i].id) {
        index = i;
        items[index].active = true;
      }
    }
    items[index].x = (items[index].htmlLeft / proportion) + ((items[index].htmlWidth) / 2) + this.data.offsetLeft;
    items[index].y = (items[index].htmlTop / proportion) + ((items[index].htmlHeight) / 2) + this.data.offsetTop;
    console.log(items[index].htmlLeft / proportion)
    console.log(proportion)
    items[index].tx = e.touches[0].clientX;
    items[index].ty = e.touches[0].clientY;
    items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)
    items[index].r = this.getDistancs(items[index].x, items[index].y, items[index].htmlLeft / proportion + this.data.offsetLeft, items[index].htmlTop / proportion + this.data.offsetTop)
  },
  touchMove: function (e) {
    items[index]._tx = e.touches[0].clientX;
    items[index]._ty = e.touches[0].clientY;
    items[index].disPtoO = this.getDistancs(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
    items[index].scale = items[index].disPtoO / items[index].r;
    items[index].oScale = 1 / items[index].scale;
    items[index].angleNext = this.countDeg(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
    items[index].new_rotate = items[index].angleNext - items[index].anglePre;
    items[index].rotate += items[index].new_rotate;
    items[index].angle = items[index].rotate;
    items[index].tx = e.touches[0].clientX;
    items[index].ty = e.touches[0].clientY;
    items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)
    this.setData({
      itemList: items
    })

  },
  touchEnd: function (e) { },
  WraptouchStart: function (e) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
      if (e.currentTarget.dataset.id == items[i].id) {
        index = i;
        items[index].active = true;
      }
    }
    items[index].x = (items[index].htmlLeft / proportion) + ((items[index].htmlWidth) / 2) + this.data.offsetLeft;
    items[index].y = (items[index].htmlTop / proportion) + ((items[index].htmlHeight) / 2) + this.data.offsetTop;
    this.setData({
      itemList: items
    })
    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
  },
  WraptouchMove: function (e) {

    items[index]._lx = e.touches[0].clientX;
    items[index]._ly = e.touches[0].clientY;
    console.log(items[index]._lx, items[index]._ly)
    items[index].left += items[index]._lx - items[index].lx;
    items[index].htmlLeft = items[index].left * proportion;
    items[index].top += items[index]._ly - items[index].ly;
    items[index].htmlTop = items[index].top * proportion;
    // 边缘检查

    // if (items[index].left < 0) {
    //     items[index].left = 0;
    // }
    // console
    // if (items[index].left + items[index].width> this.sysData.screenWidth * 0.75){
    //     items[index].left = this.sysData.screenWidth * 0.75 - items[index].width ;
    // }
    // if (items[index].top < 0) {
    //     items[index].top = 0;
    // }
    // if (items[index].top + items[index].height> this.sysData.screenWidth * 0.75 * hCw){
    //     items[index].top = this.sysData.screenWidth * 0.75 * hCw - items[index].height;
    // }


    items[index].x += items[index]._lx - items[index].lx;
    items[index].y += items[index]._ly - items[index].ly;
    console.log(items[index])
    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
    this.setData({
      itemList: items
    })
  },
  WraptouchEnd: function () {

  },
  getDistancs(cx, cy, pointer_x, pointer_y) {
    var ox = pointer_x - cx;
    var oy = pointer_y - cy;
    return Math.sqrt(
      ox * ox + oy * oy
    );
  },
  countDeg: function (cx, cy, pointer_x, pointer_y) {
    var ox = pointer_x - cx;
    var oy = pointer_y - cy;
    var to = Math.abs(ox / oy);
    var angle = Math.atan(to) / (2 * Math.PI) * 360;
    if (ox < 0 && oy < 0) {
      angle = -angle;
    } else if (ox <= 0 && oy >= 0) //左下角,3象限  
    {
      angle = -(180 - angle)
    } else if (ox > 0 && oy < 0) //右上角，1象限  
    {
      angle = angle;
    } else if (ox > 0 && oy > 0) //右下角，2象限  
    {
      angle = 180 - angle;
    }

    return angle;
  },
  removeActive(){
    console.log(111)
    for (let j = 0; j < items.length; j++) {
      items[j].active = false;
    }
    this.setData({
      itemList: items
    })
  }
})