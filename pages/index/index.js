//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: "",
    active: "home",
    //轮播
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ]
  },
  //查询
  onSearch : function(e){
    debugger
  },
  //底部切换tab
  onChange(event) {
    this.setData({
      active : event.detail
    });
    console.log(event.detail);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
