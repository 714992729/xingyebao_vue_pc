import Vue from "vue"
import VueRouter from "vue-router"
import Home from "Pages/Home"
import Log from "Pages/Log"
Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    base:__dirname,
    routes:[
        {name:"Home",component:Home,path:"/home"},
        {name:"Log",component:Log,path:"/log"}
    ]
})
