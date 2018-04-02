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
        <button @click="increment">Add2 1</button>
        <div>{{count}}</div>
        <div>-</div>
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
            }
        }
    }
</script>
<style>
    div{
        display:flex;
    }
</style>