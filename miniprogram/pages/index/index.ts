// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

import { getConfigData, setConifgData } from '../../utils/config'

Page({
    data: {
        showPassword: false,
        showRules: false,
        showStudy: false,
        showYanhua: false,
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
    },
    onShowStudy: function() {
        const config = getConfigData();
        if (config == null) {
            wx.showToast({
                title: '请先家长设置规则'
            });
            this.onShowPassword();
            return;
        }
        this.setData({
            showStudy: true
            // showYanhua: true
        })
    },
    finishStudy: function() {

        this.setData({
            showYanhua: true
        })
    }
})
