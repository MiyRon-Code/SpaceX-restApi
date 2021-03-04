<template>
    <div class="main">
    <portal-target name="destination"></portal-target>
        <div class="container">
                    <About 
                    :impPath="'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'"
                    :header ="'SpaceX-Api'"
                    :description="'Визуализация данных из SpaceX restApi '" />
          <VueSlickCarousel v-bind="firstCarousel">
            <div class="slide">
                <div class="info-item">
                    <span class="category">Генеральный директор компании (CEO)</span>
                    <span class="category-info">{{getAboutCompany.data.ceo}}</span>
                </div>    
            </div>    
            <div class="slide">
                <div class="info-item">
                    <span class="category">Главный операционный директор (COO)</span>
                    <span class="category-info">{{getAboutCompany.data.coo}}</span>
                </div>
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Технический директор (CTO)</span>
                    <span class="category-info">{{getAboutCompany.data.cto}}</span>
                </div>
            </div> 
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="secondCarousel">
            <div class="slide">
                <div class="info-item">
                    <span class="category">Штаб Квартира</span>
                    <span class="category-info">{{getAboutCompany.data.headquarters.state}}, {{getAboutCompany.data.headquarters.city}}, {{getAboutCompany.data.headquarters.address}}</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Количество сотрудников</span>
                    <span class="category-info">{{getAboutCompany.data.employees}} человек</span>
                </div>    
            </div>  
             <div class="slide">
                <div class="info-item">
                    <span class="category">Компания основана в</span>
                    <span class="category-info">{{getAboutCompany.data.founded}} году</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Основатель</span>
                    <span class="category-info">{{getAboutCompany.data.founder}}</span>
                </div>    
            </div>    
          </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
import About from '@/components/about.vue'
import {mapGetters} from 'vuex'


 
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components:{
        About,
        VueSlickCarousel,
    },
    mounted() {
            this.$store.dispatch('fetchAboutCompany');
    },
     computed : {
        ...mapGetters(['getAboutCompany']),
        // Другие вычисляемые свойства
    },
    data (){
            return{
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
created(){
    }    

}
</script>
<style scoped>
.info-item{
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center
}
.category{
    color: rgb(3, 36, 75);
    font-size: 16px;
    font-weight: 600;
}
</style>