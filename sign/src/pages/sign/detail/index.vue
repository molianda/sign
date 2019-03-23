<template>
    <div class="wrap">
        <ul>
            <li>
                <label for="">面试地址：</label>
                <span></span>
            </li>
            <li>
                <label for="">面试时间：</label>
                <span></span>
            </li>
            <li>
                <label for="">联系方式：</label>
                <span></span>
            </li>
            <li>
                <label for="">是否提醒：</label>
                <span></span>
            </li>
            <li>
                <label for="">面试状态：</label>
                <span></span>
            </li>
            <li>
                <label for="">取消提醒：</label>
                <span></span>
            </li>
            <select name="" id=""></select>
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
            console.log(this.id)
        }
    }
</script>

<style lang="scss" scoped>
    
    
</style>