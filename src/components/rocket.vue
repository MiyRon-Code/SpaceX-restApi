<template>
<div class="rocket">
    <div class="rocket-info">
        <div class="preview">
            <div class="name-rocket">
                <wikiButton
                    :link="data.wikipedia"
                />
                <div>{{data.id}}</div>
            </div>
            <img src="@/assets/falcon.jpg" alt="" class="rocket-preview-img">
        </div>
        <VueSlickCarousel v-bind="settings" class="slider"> 
            <div class="slide" @click="toggleNotation">
                <div :class="['slide-content-wrapper', {'si':americanNotation}]">
                    <h5>{{getLocalCard.diameter}}</h5>
                    <img src="@/assets/icons/diameter.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info" v-show="americanNotation">
                            {{data.diameter.meters}} meters
                    </span>
                        <span class="slider-item-info" v-show="!americanNotation">
                            {{data.diameter.feet}} feet
                    </span>
                </div>                
            </div>
            <div class="slide">
                <div :class="['slide-content-wrapper', {'si':americanNotation}]">
                    <h5>{{getLocalCard.height}}</h5>
                    <img src="@/assets/icons/height.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info" v-show="americanNotation">
                        {{data.height.meters}} meters
                    </span>
                    <span class="slider-item-info" v-show="!americanNotation">
                        {{data.height.feet}} feet
                    </span>
                </div> 
            </div>
            <div class="slide">
                <div :class="['slide-content-wrapper', {'si':americanNotation}]">
                    <h5>{{getLocalCard.mass}}</h5>
                    <img src="@/assets/icons/weight.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info" v-show="americanNotation">
                            {{data.mass.kg}} kg
                    </span>
                        <span class="slider-item-info" v-show="!americanNotation">
                            {{data.mass.lb}} lb
                    </span>
                </div>
            </div>
            <div class="slide">
                <div class="slide-content-wrapper">
                    <h5>{{getLocalCard.costPerLaunch}}</h5>
                    <img src="@/assets/icons/dollar.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info">
                        {{data.mass.lb}} $
                    </span>
                </div>
            </div>
            <div class="slide">
                <div class="slide-content-wrapper">
                    <h5>{{getLocalCard.dateFirstFlight}}</h5>
                    <img src="@/assets/icons/rocket.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info">
                        {{data.first_flight}}
                    </span>
                </div>
            </div>
            <div class="slide">
                <div class="slide-content-wrapper">
                    <h5>{{getLocalCard.fireTime}}</h5>
                    <img src="@/assets/icons/fire.svg" alt="" class="slider-item-icon">
                        <span class="slider-item-info">
                            {{data.first_stage.burn_time_sec+data.second_stage.burn_time_sec}} sec
                    </span>
                </div>
            </div>
            <div class="slide">
                <div :class="['slide-content-wrapper', {'si':americanNotation}]">
                    <h5>{{getLocalCard.thrustVacuum}}</h5>
                    <img src="@/assets/icons/rocket-flying.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info" v-show="americanNotation">
                            {{data.engines.thrust_vacuum.kN}} kN
                    </span>
                    <span class="slider-item-info" v-show="!americanNotation">
                            {{data.engines.thrust_vacuum.lbf}} lbf
                    </span>
                </div>
            </div>
            <div class="slide">
                <div class="slide-content-wrapper">
                    <h5>{{getLocalCard.preSuccessfulLandings}}</h5>
                    <img src="@/assets/icons/pie-chart.svg" alt="" class="slider-item-icon">
                    <span class="slider-item-info">
                        {{data.success_rate_pct}} %
                    </span>                    
                </div>
            </div>
            <div class="slide">
                <div class="slide-content-wrapper">
                    <h5>{{getLocalCard.fuelQuantity}}</h5>
                    <img src="@/assets/icons/fuel.svg" alt="" class="slider-item-icon">
                        <span class="slider-item-info">
                            {{data.first_stage.fuel_amount_tons+data.second_stage.fuel_amount_tons}} тонн
                    </span>                    
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</div>
</template>
<script>
import wikiButton from '@/components/wikiButton.vue'


import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'

export default {
    components:{
        wikiButton,
        VueSlickCarousel
    },
    props:{
        data: Object,
        preview: String
    },
    data (){
        return{
            americanNotation:false,
            settings:{
                "dots": false,
                "focusOnSelect": false,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "autoplay":true,
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "arrows": false,
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "arrows": false,
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "arrows": false,
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            }
        }
    },
    methods:{
        toggleNotation: function(){
            this.americanNotation = !this.americanNotation;
        }
    },
    computed:{
        ...mapGetters(['getLocalCard'])
    }
}
</script>

<style scoped>

.rocket-info{
    display: flex;
    justify-content: space-between;
}
.slider{
    width: 75%;
}
.slide{
    box-sizing: border-box;
    height: 400px;
    background:linear-gradient(  #2948ff, #2B04E8);
}
.si{
    background: linear-gradient( #393cfc, #6229ff);
}
.slide-content-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
}
.slider-item-icon{
    width: 120px;
    height: 120px;
}
.preview{
    width: 25%;
    height: 400px;
    background-color: blue;
    position: relative;
}
.rocket-preview-img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.name-rocket{
    color: white;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 900;
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    background: linear-gradient( rgba(0,0,0,0),  rgba(0,0,0,0.2));
    box-sizing: border-box;
}

    @media (max-width: 1070px) {
        .preview{
            width: 30%;
        }
        .slider{
            width: 70%;
        }
    }

    @media (max-width:768px) {
        .preview{
            width: 40%;
        }
        .slider{
            width: 60%;
        }
    }

    @media (max-width:480px) {
        .preview{
            width: 50%;
        }
        .slider{
            width: 50%;
        }
    }
</style>