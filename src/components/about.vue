<template>
    <div class="about">
            <div class="about-preview">
                <img class="about-preview-img" :src="impPath" alt="">
                    <div class="about-preview-info">
                        <h1 class="about-header">{{header}}</h1>
                        <p class="about-desc">{{description}}</p>
                    </div>
                    
            </div>
    </div>
</template>

<script>
export default {
    props:{
        header : String,
        description: String,
        impPath: String
    }
}
</script>

<style scoped>
h1{
    padding: 0;
    margin: 0;
}
.about{
    margin: 20px 0px;
    display: flex;
}
.about-preview{
  position: absolute;
  width: 50%;
  height: 100vh;
  transition: 1s;
  display: flex;
}
.about-preview-img{
    object-fit: cover;
    width: 80%;
    height: 100vh;
    transition: 1s;
}
.about-preview:hover .about-preview-img{
  width: 230%;
  height: 100vh;
}
.about-preview-info{
    position: absolute;
    top: 45%;
    left: 65%;
}
.about-header{
    padding: 0px 15px;
    font-size: 55px;
    /*screen */
    mix-blend-mode:lighten;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
   
}
.about-desc{
    font-size: 16px;
    line-height: 17px;
    padding: 5px;
    width: 140%;
    mix-blend-mode:overlay;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
}
</style>