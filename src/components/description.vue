<template>
    <div class="description">
        <div class="description-controls">показать детали?<input type="checkbox" v-model="show">  </div>
        <div class="description-item" >
                  <div :class="['detail',{'detail-active':show}]">{{text}}</div> 
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show: Boolean,
        text: String
    },
}
</script>
<style scoped>
.description{
    width: 100%;
    margin: 5px 0px;
}
.description-controls{
    margin-bottom: 5px;
}
.detail{
    height: 0px;
    opacity: 0;
    transition: .5s;
    overflow: hidden;
}
.detail-active{
    height: fit-content;
    opacity: 1;
    overflow: visible;
    padding: 5px;
    line-height: 17px;
    background-color: rgba(19, 116, 228,0.1);
}
</style>