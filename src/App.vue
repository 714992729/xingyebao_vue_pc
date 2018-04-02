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
    </div>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                title:"APP.VUE"
            }
        }
    }
</script>
<style>
    div{
        display:flex;
    }
</style>