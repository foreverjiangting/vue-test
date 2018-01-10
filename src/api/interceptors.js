/**
* 拦截器
*/
import axios from 'axios';

class Interceptors {
    constructor(){
        this.interceptorsRequest();
        this.interceptorsResponse();
    }

    /**
     * 添加请求拦截器
     */
    interceptorsRequest(){
        axios.interceptors.request.use(function (config) {    
            return config;
        }, function (error) {    
            return Promise.reject(error);
        });
    }
   
    /**
     * 添加响应拦截器
     */
    interceptorsResponse(){        
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }
}
export default Interceptors;