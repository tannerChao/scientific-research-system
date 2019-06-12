import axios from './interceptors';
import _ from 'lodash'
import { getBaseUrl, getToken } from '../utils';
import  * as datas from '../utils'
import { resolve } from 'promise/lib/es6-extensions';

const OPEN_AXIOS = true;
//请求超时
axios.defaults.timeout = 30000;

export default (method, data, header) => {
    const URL = `${getBaseUrl()}${method}`;
    let token = _.hasIn(header,'token')?header.token:getToken();

    const baseHeader = {
        appkey: '10145',
        format: 'json',
        method,
        token,
    };
    const headers = (!header ? baseHeader : header);
    if(OPEN_AXIOS){
        return axios({
            url: URL,
            method: 'POST',
            headers: headers,
            data
        });
    }else{
        let promise = new Promise(resolve=>{
            setTimeout(()=>{
                resolve({
                    code: 0,
                    success: true,
                    error: '',
                    result: datas[method]
            })
            },2000)
        }) 
        return promise.then((result)=>{
            return result;
        })
    }
    
};