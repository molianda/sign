<template>
    <div class="wrap">
        <header>
            <div class="mine">
                <image src="/static/images/mine.png" lazy-load="false"></image>
            </div>
            <p>176******9025</p>
        </header>
        <ul>
            <li @click="goSignList">
                <icon type="waiting" size="24px"></icon>
                <span class="my">我的面试</span>
                <span>〉</span>
            </li>
        </ul>
        <div class="tan" v-if="isShow">
            <div class="cont">
                <span>获取手机号</span>
                <div class="btns">
                    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</button>
                    <button @click="cancel">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getLocation,
        getAuth
    } from '@/utils/index.js'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        data() {
            return {
                isShow: false
            }
        },
        computed: {
            ...mapState({
                info: state => state.info
            })
        },
        methods: {
            getPhoneNumber(e) {
                console.log('e...', e)
                console.log('info...', this.info);
                /* wx.getUserInfo({
                    success: function(res){
                        // success
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                }) */
            },
                goSignList(){
                wx.navigateTo({ url: '/pages/sign/list/main' });
                }
            },
            cancel() {
                this.isShow = false;
            }
        },
        onShow() {
            if (!this.info.phone) {
                this.isShow = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        height: 100%;
        position: relative;
    }
    
    header {
        background: #F4F6F9;
        width: 100%;
        height: 400rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .mine {
            width: 100rpx;
            height: 100rpx;
            background: orange;
            border-radius: 50%;
            line-height: 125rpx;
            text-align: center;
            image {
                display: inline-block;
                width: 70%;
                height: 70%;
            }
        }
    }
    
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 20rpx;
        box-sizing: border-box;
        margin-top: 40rpx;
        li {
            width: 100%;
            height: 80rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            icon {
                padding: 0 10rpx;
                box-sizing: border-box;
            }
            .my {
                flex: 1;
                height: 100%;
                line-height: 80rpx;
                margin: 0 10rpx;
            }
        }
    }
    
    .tan {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        position: absolute;
        top: 0;
        left: 0;
        .cont {
            width: 300px;
            height: 200px;
            background: #fff;
            margin: 100px auto;
            border-radius: 10px;
            text-align: center;
            padding: 0 10px;
            box-sizing: border-box;
            input {
                display: inline-block;
                border: 1px solid #ccc;
                width: 100%;
                height: 30px;
                margin: 30px 0;
            }
            button {
                width: 100%;
                height: 40px;
                font-size: 16px;
                line-height: 40px;
                margin: 20rpx 0
            }
        }
    }
</style>