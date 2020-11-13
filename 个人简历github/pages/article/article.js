// pages/article/article.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mid: '',
    sn: '',
    chksm: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 内页跳转接收参数值是通过options获取
    console.log('options===',options)
      this.setData({ // 改变初始数据状态
        mid: options.mid,
        sn: options.sn,
        chksm: options.chksm
      })
  }
})
