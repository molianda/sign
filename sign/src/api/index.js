import request from '@/utils/request';

// 登陆接口
export let login = code=>{

  console.log('code...', code);
  return request.post('http://123.206.55.50:7001/user/code2session', {
    code
  })
}

<<<<<<< HEAD
//获取面试列表
export let getSignList = params => {
    return request.get('/sign', params)
};

//获取面试详情
export let getSignDetail = id => {
    return request.get('/sign/' + id)
}
=======
export let addSign = params =>{
  return request.post('http://123.206.55.50:7001/sign',params)
}
>>>>>>> 11f919601205c05569fee8d1fa5f610d7900cb24
