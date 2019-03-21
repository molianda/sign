import request from '@/utils/request';

// 登陆接口
export let login = code => {
        console.log('code...', code);
        return request.post('http://123.206.55.50:7001/user/code2session', {
            code
        })
    }
    //添加面试接口
export let addSign = params => {
    return request.post('http://123.206.55.50:7001/sign', params)
}