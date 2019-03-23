<template>
  <div class="wrap">
    <div class="content">
      <header>
        <span class="mine">
          <img src="/static/images/mine.png" alt="">
        </span>
        <p>150*****233</p>
      </header>
      <ul>
        <li @click="goDetail">
          <icon type="waiting" size="24px"></icon>
          <p>我的面试</p>
          <span>〉</span>
        </li>
      </ul>
    </div>
    <div v-if="flag?true:false" class="model">
      <div class="main">
        <div class="title">
          还没有获取到您的电话号码,需要获取您的电话号码，是否同意
        </div>
        <div class="btns">
          <button>取消</button>
          <button open-type="getPhoneNumber" @click="sure">确定</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      showPhoneDialog: true
    }
  },

  computed: {
    ...mapState({
      info: state=>state.info
    })
  },

  methods: {
    getPhoneNumber(e){
      console.log('e...', e);
    },
    goSignList(){
      wx.navigateTo({ url: '/pages/sign/list/main' });
    }
  },

  onShow() {
    if (!this.info.phone){
      this.showPhoneDialog = false;
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  background: #F4F6F9;
  width: 100%;
  height: 350rpx;
  box-sizing: border-box;
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .avatar{
    width: 100rpx;
    height: 100rpx;
    background: #fff;
    text-align: center;
    padding: 20rpx;
    border-radius: 50%;
  }
  image{
    width: 90%;
    height: 90%;
  }
}
.phone{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    width: 60%;
    background: #fff;
  }
  button{
    width: 60%;
  }
}
li{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50rpx 40rpx 0 40rpx;
  span:nth-child(2){
    flex: 1;
    margin-left: 40rpx;
    color: #666;
    font-size: 36rpx;
  }
  image{
    width: 40rpx;
    height: 40rpx;
  }
}
</style>
