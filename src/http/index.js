import _axios from './interceptors'
const axios = _axios.create()
let baseURL = ''    //'http://172.20.9.104'

//请求超时
axios.defaults.timeout = 30000;

// switch(process.env.NODE_ENV){
//     //开发环境
//     case '':
//         baseURL = '';
//         break;
        
//     //生产环境
//     case '':
//         baseURL = ''
//         break;

//     //测试环境
//     default:
//         //baseURL = 'http://172.20.9.104'
//         break;
// }

/**
 * @url = api
 */
// export default ({   api, 
//                     data = {}, 
//                     method = 'POST', 
//                     header = {} }) => axios({
                        
//     url:api, data, method, baseURL,

//     // headers:{
//     //     ...header,
//     //     method,
//     //     appkey: '10001', 
//     //     format: 'JSON'
//     // }   
// })

    





export default (method, data, header) => {
    // console.log('Request Data:', data);
    const URL = baseURL + '/router/rest' + (!method ? '' : '?' + method);
    let token = localStorage.userToken ? JSON.parse(localStorage.userToken) : '';
    const baseHeader = {
        appkey: '10145',
        format: 'json',
        method,
        token,
    };
    const headers = (!header ? baseHeader : header);
    // console.log('header:', headers);
    return axios({
        url: URL,
        method: 'POST',
        headers: headers,
        data
    });
};