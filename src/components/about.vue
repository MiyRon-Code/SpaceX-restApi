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
    width: 100%;
    position: relative;
}
.about-preview{
  width: 100%;
  height: 100vh;
  transition: 1s;
  display: flex;
  overflow: hidden;
}
.about-preview-img{
    object-fit: cover;
    width: 50%;
    height: 100%;
    transition: 1s;
}
.about-preview:hover .about-preview-img{
  width: 100%;
  height: 100%;
}


.about-preview-info{
    position: absolute;
    top: 45%;
    left: 55%;
}
.about-header{
    padding: 0px 15px;
    font-size: 55px;
    /*screen */
    mix-blend-mode:lighten;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
    color:rgba(0, 0, 0);
}
.about-desc{
    transition: 3s;
    font-size: 16px;
    line-height: 17px;
    padding: 15px;
    width: 400px;
    mix-blend-mode:screen;
    background-blend-mode:multiply ;
    background-color: rgb(0, 0, 0);
    color:white;
}


  @media (max-width: 480px) {
    .about-header{
        font-size: 22px;
      width: 80%;
    }
    .about-desc {
       width: 80%;
    }
  }

</style>