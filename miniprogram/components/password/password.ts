// components/password/password.ts

import { getPassword, setPassword } from '../../utils/config'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {
        password: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindinput: function(e) {
            const value = e.detail.value;
            this.setData({
                password: value
            })
        },
        onSubmit: function() {
            const pwd = getPassword();
            console.log(pwd);
            if (pwd == null || pwd.length == 0) {
                setPassword(this.data.password);
                this.triggerEvent('callback', {}, {});
                this.setData({
                    show: false
                });
                return;
            }
            else if (this.data.password == pwd) {
                this.triggerEvent('callback', {}, {});
                this.setData({
                    show: false
                });
                return;
            }
            wx.showToast({
                title: '密码错误',
                icon: 'error'
            });
    
        }
    }
})
