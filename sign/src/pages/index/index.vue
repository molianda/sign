<template>
  <div @click="clickHandle" class="wrap">
    <!-- 首页地图模块 -->
    <map
      id="map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      scale="14"
      show-location
      show-compass
      :markers="markers"
      @markertap="markertap"
      @regionchange="regionChange"
    ></map>
    <!-- 重新定位图标 -->
    <cover-view class="current" @tap="goCurrent">
      <cover-image class="location" src="/static/images/location.png" />
      <cover-view class="my" @click="goMy">
        <cover-image src="/static/images/my.png" />
      </cover-view>
    </cover-view>
    <!-- vuex最简单的demo -->
    <!-- <div>
      <button @click="btnClick('+')">+</button>
      <span>{{state}}</span>
      <button @click="btnClick('-')">-</button>
    </div> -->
  </div>
</template>

<script>
    import card from '@/components/card'
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
                }]
            }
        },

        computed: {
            ...mapState({
                state: state => state.index.count,
                state2: state => state.index.count,
            })
        },

        components: {
            card
        },

        methods: {
            ...mapMutations({
                changeNum: 'index/changeCount'
            }),
            btnClick(type) {
                this.changeNum(type);
            },
            regionChange(e) {

            },
            // 点击标注物
            marketTap(e) {

            },
            // 重新定位
            goCurrent() {
                getAuth('scope.userLocation', async() => {
                    let location = await getLocation();
                    wx.setStorageSync('location', location)
                    this.location = location;
                })
            },
            // 去我的页面
            goMy() {
                wx.navigateTo({
                    url: '/pages/my/main'
                });
            }
        },

        created() {
            let location = wx.getStorageSync('location');
            this.location = location;
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        height: 100%;
    }
    
    map {
        width: 100%;
        height: 100%;
    }
    
    .location {
        position: fixed;
        bottom: 100rpx;
        width: 80rpx;
        height: 80rpx;
        left: 20rpx;
    }
    
    .my {
        position: fixed;
        background: #fff;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        bottom: 100rpx;
        width: 120rpx;
        height: 90rpx;
        right: 0;
        cover-image {
            width: 70rpx;
            height: 70rpx;
            margin-top: 10rpx;
            margin-left: 20rpx;
            background: #eee;
            border-radius: 50%;
        }
    }
</style>