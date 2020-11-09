Page({

  data: {
    avatar: '',
    name: '',
    realname: '',
    phone: ''
  },

  onShow: function () {
    this.setData(getApp().globalData.userInfo);
  },

  changeRealName: function(e) {
    var realname = e.detail.value.trim();
    var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
    if(realname) {
      if (!nameReg.test(realname)) {
        getApp().globalData.userInfo.flagRealnameInputted = false;
        wx.showToast({title: '姓名格式错误~', icon: 'none'});
        return;
      }
      getApp().globalData.userInfo.realname = realname;
      getApp().globalData.userInfo.flagRealnameInputted = true;
      this.data.realname = realname;
      wx.showToast({
        title: '姓名更新成功~', 
        icon: 'none', 
        duration: 2000
      });
    }
    else {
      this.setData({
        realname: this.data.realname
      });
    }
  },

  changePhone: function(e) {
    var phone = e.detail.value.trim();
    var phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
    if(phone) {
      if (!phoneReg.test(phone)) {
        getApp().globalData.userInfo.flagPhoneInputted = false;
        wx.showToast({title: '手机号格式错误~', icon: 'none'});
        return;
      }
      getApp().globalData.userInfo.phone = phone;
      getApp().globalData.userInfo.flagPhoneInputted = true;
      this.data.phone = phone;
      wx.showToast({
        title: '手机号更新成功~', 
        icon: 'none', 
        duration: 2000
      });
    }
    else {
      this.setData({
        phone: this.data.phone
      });
    }

  },

  navTo: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.target == 'setting' ? '/pages/setting/setting' : '/pages/user/user'
    });
  }

})