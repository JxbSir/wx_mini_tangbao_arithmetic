// components/study/study.ts

import { getConfigData, setConifgData } from '../../utils/config'
import { insertErrorQa, getErrorList } from '../../utils/qa'

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        focus: false,
        index: -1,
        question: null,
        questions: [],
        answer: ""
    },

    lifetimes: {
        attached: function () {
            const errorList = getErrorList();
            console.log(errorList);

            const config = getConfigData();
            if (config == null) {
                wx.showToast({
                    title: '请先家长设置规则'
                });
                this.setData({
                    show: false,
                });
                return;
            }

            var questions = []
            for (let index = 0; index < config.count; index++) {
                const r = Math.random();
                const left = (r * (Number(config.leftMax) - Number(config.leftMin)) + Number(config.leftMin)).toFixed(0);
                const right = (r * (Number(config.rightMax) - Number(config.rightMin)) + Number(config.rightMin)).toFixed(0);

                questions.push({
                    left: left,
                    right: right
                })
            }

            this.setData({
                index: 0,
                question: questions[0],
                questions: questions,
            });
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onAnswerChnage: function (e) {
            const answer = e.detail.value;
            this.setData({
                answer: answer
            })
        },
        onSubmit: function () {
            const qa = this.data.questions[this.data.index];
            const answer = Number(qa.left) + Number(qa.right);
            if (answer != Number(this.data.answer)) {
                // console.log(answer)
                // console.log(this.data.answer)
                // wx.showToast({
                //     title: '答错了',
                //     icon: 'error'
                // })
                insertErrorQa(qa.left, qa.right, "+");
                const innerAudioContext = wx.createInnerAudioContext({
                    useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
                })
                innerAudioContext.src = '/mp3/failure.mp3'
                innerAudioContext.autoplay = true;
                innerAudioContext.play()
                this.setData({
                    answer: "",
                    focus: true
                });
                return
            }
            // wx.showToast({
            //     title: '答对了',
            //     icon: 'success'
            // })

            const innerAudioContext = wx.createInnerAudioContext({
                useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
            })
            innerAudioContext.src = '/mp3/success.mp3'
            innerAudioContext.autoplay = true;
            innerAudioContext.play()

            const index = this.data.index + 1;
            if (index >= this.data.questions.length) {
                // wx.showToast({
                //     title: '全部做完了',
                //     icon: 'success'
                // })
                return
            }
            const question = this.data.questions[index];
            this.setData({
                index: index,
                question: question,
                answer: "",
                focus: true
            });
        }
    }
})
