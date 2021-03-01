<template>
    <div class="slider">
        <div class="sliner-controls">
            <div class="slider-controls_button left" @click="prevImage"></div>
            <div class="slider-controls_button right" @click="nextImage" ></div>
        </div>
        <div class="slider-images">
            <div class="slide" v-for="(image,index) in this.images" :key="index">
                <img  :src="image" alt="" class="slide-img" v-if="index==imageIndex">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        images:Array
    },   
    data: function (){
        return {
            imageIndex: 0
        }
    },
     methods:{
         nextImage: function(){
             if(this.imageIndex<this.images.length-1){
                 this.imageIndex++;
             }
         },
         prevImage: function(){
             if(this.imageIndex>0){
                 this.imageIndex--;
             }
         }
     }
}
</script>
<style scoped>
.slider-images{
    width: 100%;
    height: 100vh;
   
}
.slide{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
}
.slide-img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
    .sliner-controls{
        position: absolute;
        width: 100%;
        height: 100vh;
        display:flex;
        justify-content: space-between;
         z-index: 10;
    }

    .slider-controls_button{
        transition: 1s;
        opacity: 0.3;
        width: 10%;
        height: 100%;
        background-color: rgb(19, 116, 228);
    }
    
    .slider-controls_button:hover{
        opacity: 1;
        width: 10%;
        height: 100%;
        background-color: rgb(19, 116, 228);
    }
</style>