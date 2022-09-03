// components/password/password.ts
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
            if (this.data.password != "123123") {
                wx.showToast({
                    title: '密码错误',
                    icon: 'error'
                })
                return
            }

            this.triggerEvent('callback', {}, {})

            this.setData({
                show: false
            });
        }
    }
})
