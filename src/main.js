import Vue from "vue"
import App from "./App"
import router from "./router/router"
import {Button} from 'element-ui';
Vue.use(Button)
new Vue({
    el:"#app",
    router,
    render:h=>h(App)
})