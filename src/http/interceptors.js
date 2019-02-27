import axios from 'axios'

/**
 * 请求拦截
 */
axios.interceptors.request.use(
    config => {
        return config
    },
    err => Promise.reject(err)
)

/**
 * 响应拦截
 */

axios.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        let { response } = err;
        // if(response.code===6001){
        //     console.log("token失效")
        //  }
        console.log('请求报错', response);
    
        return Promise.reject(err)
    }
)


export default axios