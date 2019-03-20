<template>
  <div class="wrap">
    <div class="phone-wrap">
      <image src="/static/images/my-red.png" lazy-load="false"></image>
      <p>183····3239</p>
    </div>
    <ul>
      <li>
        <icon type="waiting" size="24px" />
        <span>
          我的面试
        </span>
        <image src="/static/images/下一页.png" lazy-load="false"></image>
      </li>
    </ul>
    <div class="cover" v-if="showPhoneDialog">
      <div class="cover-dia">
        <p>为了更好的使用我们的服务，我们需要获取你的手机号码</p>
        <p class="confir">
          <button>取消</button>
          <button open-type="getPhoneNumber" @getphonenumber="onGotUserInfo">确定</button>
          
          <!--<button open-type="getUserInfo" bindgetuserinfo="onGotUserInfo">确定</button>-->
          <!---->
      
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      // 用户当前位置
      location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
      markers: [{
        iconPath: '/static/images/job.png',
        id: 0,
        latitude: 40.03298,
        longitude: 116.29891,
        width: 50,
        height: 50
      }],
      showPhoneDialog:false
    }
  },

  computed: {
    ...mapState({
      info:state=>state.info
    })
  },

  components: {
    card
  },

  methods: {
    // ...mapMutations({
    //   changeNum: 'index/changeCount'
    // }),
    // btnClick(type){
    //   this.changeNum(type);
    // },
    
    // 重新定位
    // goCurrent(){
    //   getAuth('scope.userLocation', async ()=>{
    //     let location = await getLocation();
    //     wx.setStorageSync('location', location)
    //     this.location = location;
    //   })
    //},
    onGotUserInfo(e){
      
    }
  },

  // created () {
  //   let location = wx.getStorageSync('location');
  //   let phone = wx.getStorageSync('phone');
  //   this.location = location;
  // }
  onShow(){
    if(!this.info.phone){
      this.showPhoneDialog=false;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
  height: 100%;
  position:relative;
}
.phone-wrap{
  width: 100%;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F4F6F9;
  image{
    width: 100rpx;
    height:100rpx;
    border-radius: 50%;
    margin-top:140rpx;
    margin-bottom: 30rpx;
  }
}
ul{
  width: 100%;
  padding: 0 30rpx;
  li{
    width: 100%;
    height: 120rpx;
    display: flex;
    align-items: center;
    icon{
      margin-right: 30rpx;
    }
    image{
      width: 50rpx;
      height:50rpx;
      margin-left:400rpx;
    }
  }
}
header{
  width:100%;
  height:88rpx;
}
section{
  width:100%;
  flex:1;
}
footer{
  width:100%;
  height:88rpx;
  display:flex;
  justify-content:space-around;
  align-items:center;
  dl{
    display:flex;
    flex-direction:column;
    dt{
      width:38rpx;
      height:38rpx;
      border-radius:50%;
    }
  }
}
.cover{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,.5);
  .cover-dia{
    position:relative;
    left:3%;
    top:40%;
    padding:40rpx 50rpx;
    text-align:center;
    width:80%;
    
    line-height:60rpx;
    background:#fff;
    .confir{
      display:flex;
      justify-content:space-around;
      padding-top:70rpx;
      button{
        width: 50%;
        border-color: #fff;
        background: #fff;
      }
    }
  }
}
</style>
