<template>
    <div>
        <div>{{message}}</div>
    </div>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                message:"I`m Log Components"
            }
        }
    }
</script>
<style scoped>
    div{
        background-color:blue;
    }
</style>