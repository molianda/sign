<template>
  <form>
    <ul>
      <li>
        <label for="">面试地址</label>
        <span>{{info.address&&info.address.address}}</span>
      </li>
      <li>
        <label for="">面试时间</label>
        <span>{{info.start_time}}</span>
      </li>
      <li>
        <label for="">联系方式</label>
        <span @click="makePhone">{{info.phone}}</span>
      </li>
      <li>
        <label for="">是否提醒</label>
        <span>{{info.remind?'未提醒':'已提醒'}}</span>
      </li>
      <li>
        <label for="">面试状态</label>
        <span>{{info.status==-1?'未开始':info.status==0?'已打卡':'已放弃'}}</span>
      </li>
      <li v-if="info.status==-1">
        <label for="">取消提醒</label> 
        <swith :checked="info.remind==1" />
      </li>
    </ul>
    <section v-if="info.status==-1" class="action">
      <button @click="goSign">去打卡</button>
      <button @click="giveup">放弃面试</button>
    </section>
  </form>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
  computed: {
    ...mapState({
      info: state=>{
        console.log('666666')
        console.log(state.sign)
        return state.sign.info
      }
    })
  },
  
  methods: {
    ...mapActions({
      getDetail:'sign/getDetail',
      updateDetail:'sign/updateDetail'
    }),
    goSign(){
      wx.wx.showToast({
        title: '功能正在紧急开发中',
        icon: 'none'
      })
    },
    giveup(){
      wx.showModal({
        title: '温馨提示',
        content: '确定要放弃本次面试吗?',
        success:async function(res) {
          if(res.confirm){
            // await this.updateDetail({
            //   id:this.id,
            //   params:{status:1}
            // })
          }
        }
      })
    },
    makePhone(){
      wx.makePhoneCall({
        phoneNumber: this.info.phone
      })
    },
    cancelMind(){
      wx.showModal({
        title: '温馨提示',
        content: '取消提醒，后续将接受不到本次面试的任何提醒',
        success:(res)=>{
          if(res.confirm){
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onLoad(options){
    this.id=options.id
    console.log('opt',options)
  },
  async onShow(){
    await this.getDetail(this.id);
    
    wx.setNavigationBarTitle({
      title: this.info.company
    })
    
  }
}
</script>
<style lang="scss" scoped>
  ul{
    border-top: solid 1rpx #eee;
    border-bottom: 1rpx solid #eee;
    background: #fff;
    li{
      width: 720rpx;
      height: 88rpx;
      margin-left: 30rpx;
      border-bottom: 1rpx solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      label{
        color: #666;
        width: 170rpx;
        font-size: 30rpx;
      }
      span,switch{
        flex: 1;
        // text-align: right;
        font-size: 30rpx;
        color: #333;
        height: 88rpx;
        line-height: 88rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 30rpx;
        box-sizing: border-box;
      }
    }
  }
  .action{
    display: flex;
    margin: 50rpx 15rpx;
    button{
      flex: 1;
      color: #fff;
      margin: 15rpx;
    }
    button:first-child{
      background: #197DBF;
    }
    button:last-child{
      background: #DC4E42;
    }
  }
</style>
