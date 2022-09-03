// components/yanhua/yanhua.ts
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

    },

    lifetimes: {
        attached: function () {

            setTimeout(() => {
                const innerAudioContext = wx.createInnerAudioContext({
                    useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
                })
                innerAudioContext.src = '/mp3/yanhua.mp3'
                innerAudioContext.autoplay = true;
                innerAudioContext.play();

                setTimeout(() => {
                    innerAudioContext.stop();
                }, 7000);
            }, 3000);

            const that = this;
            setTimeout(() => {
                that.setData({
                    show: false
                })
            }, 10000);
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
