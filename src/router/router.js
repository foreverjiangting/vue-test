import Index from '../components/index/index.vue';


export default {

    routes: [{
        path: '/',
        name: '首页',
        component: Index,
        redirect: '/index',
        children: [
            { path: "index", component: Index }
        ]
    }]
};