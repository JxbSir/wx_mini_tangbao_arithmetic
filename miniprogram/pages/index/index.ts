// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        showPassword: false,
        showRules: false,
    },
    onShareAppMessage: function () {
        return {
            title: "汤包数学",
            path: "/pages/index/index"
        };
    },
    onShowPassword: function() {
        this.setData({
            showPassword: true
        })
    },
    validPassSuccess: function(e) {
        this.setData({
            showRules: true
        })
    }
})
