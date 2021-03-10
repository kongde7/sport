// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片外链汇总
    dev: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/dev-yellow.svg?sign=e400499aa56366250ada3e8be8661d83&t=1615254424",
    dev_green: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/dev-green.svg?sign=73a38bf851f80fba721aa584933a7125&t=1615278318",
    heart: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/heart.svg?sign=30c0b27c7dd0c3c5f4c2fe55479961fd&t=1615253876",
    sport: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/sport.svg?sign=8cf2bb542e599f92458b04ac6286f8f5&t=1615254119",
    temp: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/temp.svg?sign=b3c8ecdd57df9d54e2398a0cde31e199&t=1615254130",
    fav_blue: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/fav/fav-blue.svg?sign=f4f11348dd7b988d31ffc8423fc5b30e&t=1615268499",
    fav_breen: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/fav/fav-breen.svg?sign=732da9f45cd91e728743714d79e0b56c&t=1615273917",
    fav_green: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/fav/fav-green.svg?sign=0abfbbdebb1003225131f1d4f63de8f8&t=1615268509",
    fav_red: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/fav/fav-red.svg?sign=2f232c18b4e577af873df75388c28289&t=1615268519",
    // 设备状态信息
    status: "已连接"
  },

  // 用户自编函数
  btntest: function(event) {
    console.log(event);
    this.setData({
      dev: "https://7975-yun-5g8rnw9geb26d9a4-1305179687.tcb.qcloud.la/img/dev-green.svg?sign=73a38bf851f80fba721aa584933a7125&t=1615278318"
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