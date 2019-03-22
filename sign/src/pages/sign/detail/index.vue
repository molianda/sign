<template>
    <div class="wrap">
        <ul>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
            <li>
                <label for=""></label>
                <span></span>
            </li>
        </ul>
    </div>
</template>


<script>
    import {mapState,mapActions} from 'vuex'
    export default{
        computed: {
          ...mapState({
              info:state=>state.sign.info
          })  
        },
        methods:{
            ...mapActions({
                getDetail:'sign/getDetail'
            })
        },
        onLoad(options){
            //获取id
            this.id=options.id
        },
        async onShow(){
            wx.showLoading({
                title:'加载数据中……',
                mask:true
            })
            await this.getDetail(this.id);
            //修改标题
            wx.setNavigationBarTitle({
                title:this.info.company
            })
            wx.hideLoading();
        }
    }
</script>

<style lang="scss" scoped>
    
    
</style>