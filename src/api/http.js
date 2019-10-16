import axios from 'axios'
import {message} from 'antd'
/* 封装ajax请求 */
export default function ajax(url,data={},method='GET'){
    return new Promise(function(resolve,reject){
        let promise;
        if(method=='GET'){
            promise=axios.get(url,{params:data})
        }else{
            promise=axios.post(url,data)
        }
        promise.then(response=>{
            // 成功
            resolve(response.data)
        }).catch(error=>{
            // 失败
            message.error('请求出错:'+error.message)
            // reject(error)
        })
    })
}