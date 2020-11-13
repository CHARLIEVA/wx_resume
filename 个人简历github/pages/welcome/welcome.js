// pages/welcome/welcome.js
Page({
  // 生命周期函数--监听页面加载	
  onLoad: function (options) {
    wx.showToast({ // 显示消息提示框
      title: '加载中',
      icon: 'loading',
      duration: 400
    })
    setTimeout(() => { // 定时器到期以后执行注册的回调函数
      wx.switchTab({ // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
        url: '/pages/about/about',
      })
    }, 6000)
  },
})
