<template>
    <div>
        <div>{{title}}</div>
        <div>
            <router-link :to="{name:'Home'}">GoHome</router-link>
            <router-link :to="{name:'Log'}">GoLog</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <el-button type="primary" @click="increment">加法</el-button>
        <div>{{count}}</div>
        <el-button type="primary" @click="decrement">减法</el-button>
    </div>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                title:"APP.VUE",
                count:0
            }
        },
        methods:{
            increment(){
                this.count++
            },
            decrement(){
                this.count--
            }
        }
    }
</script>
<style>
    div{
        display:flex;
    }
</style>