// pages/about/about.js
Page({
  // 拨打电话
  phoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '137*****615',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },

  // 保存通讯录
  saveContact: function() {
    wx.addPhoneContact({
      firstName: 'XXX',
      remark: '前端工程师',
      mobilePhoneNumber: '13788888888',
      weChatNumber: 'XXX',
      organization: '腾讯科技',
      title: '高级工程师'
    })
  },

   // 添加个人微信功能 - 自定义事件处理函数
   showQrcode: function() {
    wx.previewImage({ // 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
      current: 'cloud://cloud-1j8z4.636c-cloud-1j8z4-1303914026/图片素材/IMG_7904.jpg', // 当前显示图片的http链接
      urls: ['cloud://cloud-1j8z4.636c-cloud-1j8z4-1303914026/图片素材/IMG_7904.jpg'] // 需要预览的图片http链接列表
    })
  },

   // 拨打电话
   phoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '13800000000',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },

  // 保存通讯录
  saveContact: function() {
    wx.addPhoneContact({
      firstName: 'XX',
      remark: 'CHARLIEVA',
      mobilePhoneNumber: '1822222223',
      weChatNumber: 'XXXXX',
    })
  }
})
