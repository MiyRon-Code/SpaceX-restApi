<template>
    <div class="main" >
        <div class="main-iiner">
            <portal-target name="destination"></portal-target>
        <ThreeJs/>
        <div class="container">
        <div class="slider"></div>
          <VueSlickCarousel v-bind="firstCarousel">
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.ceo}} (CEO)</span>
                    <span class="category-info">{{getAboutCompany.data.ceo}}</span>
                </div>    
            </div>    
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.coo}} (COO)</span>
                    <span class="category-info">{{getAboutCompany.data.coo}}</span>
                </div>
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.cto}} (CTO)</span>
                    <span class="category-info">{{getAboutCompany.data.cto}}</span>
                </div>
            </div> 
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="secondCarousel">
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.headquarters}}</span>
                    <span class="category-info">{{getAboutCompany.data.headquarters.state}}, {{getAboutCompany.data.headquarters.city}}, {{getAboutCompany.data.headquarters.address}}</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.totalEmployees}}</span>
                    <span class="category-info">{{getAboutCompany.data.employees}} {{getLocalCard.humans}}</span>
                </div>    
            </div>  
             <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.DateOfFoundation}}</span>
                    <span class="category-info">{{getAboutCompany.data.founded}} {{getLocalCard.year}}</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">{{getLocalCard.founder}}</span>
                    <span class="category-info">{{getAboutCompany.data.founder}}</span>
                </div>    
            </div>    
          </VueSlickCarousel>
        </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

import ThreeJs from '@/components/threeJs.vue' 
 
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components:{
        VueSlickCarousel,
        ThreeJs,
    },

    mounted() {
        this.$store.dispatch('fetchAboutCompany');
    },

     computed : {
        ...mapGetters(['getAboutCompany','getLocalDescription','getLocalCard',"getScene"]),
    },
    data (){
            return{
                container : null,
                slider: false,
                firstCarousel:{
                    "infinite": true,
                    "speed": 900,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "autoplay":true,
                    "arrows":false,
            },
            secondCarousel:{
                    "infinite": true,
                    "speed": 1000,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "autoplay":true,
                    "arrows":false,
            }
        }
    },


}
</script>
<style scoped>
::-webkit-scrollbar {
    width: 12px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color:#143861;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color:  rgba(137, 64, 255,.5);
    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
    background-color:  rgba(137, 64, 255,1);
}

.info-item{
    margin: 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center

}
.category{
    color: rgb(3, 36, 75);
    font-size: 13px;
    font-weight: 600;
}
.category-info{
    font-size: 13px;
}
.about-preview{
  width: 100%;
  height: 100vh;
  transition: 1s;
  display: flex;
}
.about-preview-img{
    object-fit: cover;
    width: 50%;
    height: 100vh;
    transition: 1s;
}
.about-preview:hover .about-preview-img{
  width: 100%;
  height: 100vh;
}


.about-preview-info{
    position: absolute;
    top: 35%;
    left: 55%;
}
.about-header{
    padding: 0px 15px;
    font-size: 55px;
    /*screen */
    mix-blend-mode:lighten;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
    color:rgba(0, 0, 0);;
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
    color:white
}

</style>