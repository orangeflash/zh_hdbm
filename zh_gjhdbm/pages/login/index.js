// pages/login/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  qx() {
    wx.navigateBack({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.getUserInfo(function (userInfo) {
    //   console.log(userInfo)
    // })
    app.getSystem(this)
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    if (e.detail.errMsg == 'getUserInfo:ok') {
      // 授权成功
      //  wx.reLaunch({
      //    url: 'index/index',
      //  })
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '您拒绝了信息授权，将无法正常使用小程序',
      })
    }
    // wx.reLaunch({
    //   url: '../index/index',
    // })
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
})