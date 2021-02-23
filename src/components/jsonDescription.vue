<template>
    <div class="json-description">
        <div class="container">
            <textarea name="" id="" rows="10"  v-model="dataJson">
            </textarea>
        </div>
       
    </div>
</template>
<script>
//Object.keys(o)
export default {
    props:{
        data: Object
    },
    data:function (){
        return{
            dataJson: Object.keys(this.data)
        }
    }
}
</script>
<style scoped>
    textarea{
        width: 100%;
        display: block;
        height: fit-content;
        background-color: darkgray;
        color: white;
        resize: auto;
    }
</style>