// pages/tables/tables.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selfTableList: [{
        name: "IPSS自测表",
        id: "ipss"
      },
      {
        name: "IPSS测试用",
        id: "ipss_test"
      }
    ]
  },

  f_ipss: function (e) {
    wx.navigateTo({
      url: '/pages/tables/ipss/ipss'
    })
  },
  
  f_ipss_test: function (e) {
    wx.navigateTo({
      url: '/pages/tables/ipss_test/ipss_test'
    })
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