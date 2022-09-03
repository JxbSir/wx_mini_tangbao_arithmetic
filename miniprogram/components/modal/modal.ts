// component/selector/singer.js
Component({
    
    /**
     * 组件的属性列表
     */
    properties: {
        show: Boolean,
        background: {
            type: String,
            value: "white"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    lifetimes: {
        attached: function () {
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        hide: function () {
            this.onHide();
        },
        onHide: function () {
            this.setData({
                show: false,
            });
        },
    }
})