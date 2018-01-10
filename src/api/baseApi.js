import axios from 'axios';
import utils from '../utils/utils.js';
import { common } from '../common/commonBll.js';

import Interceptors from './interceptors.js';

/**
 * 基础 Api
 */
class BaseApi extends Interceptors {
    /**
     * @params {string} protocol 协议头
     * @params {string} serviceCode 服务号 
     */
    constructor(protocol, serviceCode) {
            super();


        }
        /**
         * 统一post请求
         * @param params {Object} 请求参数
         * @param isShowLogin {Boolean} 是否显示登录框
         * @param useVirtualPath {Boolean} 
         */
    post(params, isShowLogin, useVirtualPath) {

        }
        /**
         * 统一get请求
         * @param params {Object} 请求参数
         * @param isShowLogin {Boolean} 是否显示登录框     
         */
    get(params, isShowLogin, useVirtualPath) {

    }

    /**
     * 设置请求参数
     * @param params {Object} 请求参数
     */
    setRequestParams(params, useVirtualPath) {
        if (process.env.NODE_ENV == "development") {
            params.baseUrl = useVirtualPath ? this.virtualPath : this.baseUrl;
        } else {
            params.baseUrl = params.baseUrl || this.baseUrl;
        }
        if (!params.data) {
            params.data = JSON.stringify({});
        }
    }
}

export default BaseApi;