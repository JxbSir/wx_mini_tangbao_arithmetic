// components/rules/rules.ts

import { getConfigData, setConifgData } from '../../utils/config'

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
        leftMin: 1,
        leftMax: 1,
        rightMin: 1,
        rightMax: 1,
        count: 1,
    },

    lifetimes: {
        attached: function() {
            const config = getConfigData();
            if (config != null) {
                this.setData({
                    leftMin: config.leftMin,
                    leftMax: config.leftMax,
                    rightMin: config.rightMin,
                    rightMax: config.rightMax,
                    count: config.count,
                });
                console.log(this.data)
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindLeftMinTextChange: function(e) {
            this.setData({
                leftMin: e.detail.value
            });
        },
        bindLeftMaxTextChange: function(e) {
            this.setData({
                leftMax: e.detail.value
            });
        },
        bindRightMinTextChange: function(e) {
            this.setData({
                rightMin: e.detail.value
            });
        },
        bindRightMaxTextChange: function(e) {
            this.setData({
                rightMax: e.detail.value
            });
        },
        bindCountTextChange: function(e) {
            this.setData({
                count: e.detail.value
            });
        },
        onSubmit: function() {
            const config = {
                leftMin: this.data.leftMin,
                leftMax: this.data.leftMax,
                rightMin: this.data.rightMin,
                rightMax: this.data.rightMax,
                count: this.data.count,
            }
            setConifgData(config);

            wx.showToast({
                title: '保存成功'
            });
            this.setData({
                show: false
            })
        }
    }
})
