import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router.js';
import store from './store';
import App from './components/app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
const router = new VueRouter(routes);

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    el:"#app",
    router,
    store,
    components:{App}
});

