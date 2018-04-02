<template>
    <div>
        <div>{{message}}</div>
    </div>
</template>
<script>
    module.exports = {
        data:function(){
            return {
                message:"I`am Home Component"
            }
        }
    }
</script>
<style scoped>
    div{
        background-color:red;
    }

</style>