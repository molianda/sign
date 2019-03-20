import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 挂载modules
import index from './modules/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index
    },
    state: {
        info: {} //用户信息
    },
    //用于同步更改数据
    mutations: {
        updateState(state, payload) {
            console.log('state...', state, payload)
                //更新全局的state
            state.info = payload;
        }
    },
    //异步更改数据
    actions: {

    },
    plugins: [createLogger()]
})