import { getSignList, getSignDetail, updateSignDetail } from '@/api/index';
const moment = require('moment');

const state = {
    active: 0, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
    list: [], //面试列表
    hasMore: true, //是否有更多数据
    page: 1, //当前页码
    pageSize: 10, //每页数据,
    info: {}
}

const mutations = {
    updateState(state, payload) {
        for (let key in payload) {
            state[key] = payload[key]
        }
    }
}

const actions = {
    getList({ commit, state }, payload) {
        // console.log('payload...', payload);
        // console.log('statezhuangtai', state)
        return new Promise(async(resolve, reject) => {
            let params = {};
            if (state.active) {
                params.status = state.active - 2;
            }
            let result = await getSignList(params);
            result.data.forEach(item => {
                item.address = JSON.parse(item.address);
                item.start_time = formatTime(item.start_time);
            })

            // 判断是替换还是追加
            if (state.page == 1) {
                commit('updateState', { list: result.data })
            } else {
                commit('updateState', { list: [...state.list, result.data] })
            }
        })
    },

    //获取面试详情
    getDetail({ commit }, payload) {
        // console.log(payload)
        return new Promise(async(resolve, reject) => {
            let data = await getSignDetail(payload);
            // console.log('xaingqingxinxi', data)
            if (data.data.address) {
                data.data.address = JSON.parse(data.data.address)
            }
            data.data.start_time = formatTime(data.data.start_time)
            commit('updateState', { info: data.data });
            resolve();
        })
    },

    //更新面试状态
    updateDetail({ commit, dispatch }, payload) {
        console.log('0000000')
        return new Promise(async(resolve, reject) => {
            let data = await updateSignDetail(payload.id, payload.params);
            console.log('gengxin', data);
            if (data.code == 0) {
                //重新获取详情
                dispatch('getDetail', payload.id)
            }
            resolve(data);
        })
    }
}

function formatTime(start_time) {
    return moment(start_time * 1000).format('YYYY-MM-DD HH:mm');
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}