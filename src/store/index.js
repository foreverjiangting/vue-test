import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import header from './modules/common/header.js';
import login from './modules/common/login.js';
import index from './modules/index.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        index,
        header,
        login
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});