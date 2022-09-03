// components/study/study.ts

import { getConfigData, setConifgData } from '../../utils/config'

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
        index: -1,
        question: null,
        questions: [],
        answer: ""
    },

    lifetimes: {
        attached: function () {
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
                questions: questions
            });
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onAnswerChnage: function(e) {
            const answer = e.detail.value;
            this.setData({
                answer: answer
            })
        } ,
        onSubmit: function() {
            const qa = this.data.questions[this.data.index];
            const answer = Number(qa.left) + Number(qa.right);
            if (answer != Number(this.data.answer)) {
                console.log(answer)
                console.log(this.data.answer)
                wx.showToast({
                    title: '答错了',
                    icon: 'error'
                })
                return
            }  
            wx.showToast({
                title: '答对了',
                icon: 'success'
            })
            

            const index = this.data.index + 1;
            if (index >= this.data.questions.length) {
                wx.showToast({
                    title: '全部做完了',
                    icon: 'success'
                })
                return
            }
            const question = this.data.questions[index];
            this.setData({
                index: index,
                question: question,
                answer: ""
            });
        }
    }
})
