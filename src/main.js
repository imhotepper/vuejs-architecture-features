import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createMockServer } from "./mock-server"

Vue.config.productionTip = false


if (process.env.NODE_ENV === "development") {
    createMockServer();
    //makeServer();
}


import axios from 'axios'
import VueAxios from 'vue-axios'


//interceptor

axios.interceptors.request.use(function(config) {
    console.log('[features] Axios reequest interceptor executed at: ', new Date());
    return config;
}, function(err) {
    return Promise.reject(err);
});


Vue.use(VueAxios, axios)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')