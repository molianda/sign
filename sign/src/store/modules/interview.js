import {addSign} from "@/api/index"

const state={
  list:[],
  current:{
    company:"北京小桔科技有限公司",
    phone:"15811521233",
    address:"",
    description:""
  }
}
const mutations={
  updateState(state,payload){
    state.current={...state.current,...payload}
  }
}
const actions = {
  async submit(state, {...payload}){
    return new Promise(async (resolve, reject)=>{
       // 填充经纬度
       console.log("payload....",payload)
      payload.latitude = payload.address.location.lat;
      payload.longitude = payload.address.location.lng;
      // 序列号地址
      payload.address = JSON.stringify(payload.address);
      let result = await addSign(payload);
      resolve(result);
    })
  }
}
export default {
  namespaced:true,
  state,
  actions,
  mutations
}