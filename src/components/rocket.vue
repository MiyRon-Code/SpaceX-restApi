<template>
    <div class="rocket">
        <div class="rocket-preview">
            <div class="flag">
                <img src="@/assets/flags/United States.png"  alt="" class="flag-img">
            </div>
            <img src="@/assets/falcon.jpg" alt="" class="rocket-preview-img">
            <h1 class="rocket-version">{{data.id}}</h1>
            <h5 class="rocket-desc">{{data.description}}</h5>
        </div>
        <div class="rocket-body" >
            <div :class="['rocket','id',{'active-rocket':data.active}]" >версия: {{data.id}} <span class="status"> <div class="isActive" v-show="data.active">АКТИВНАЯ!</div></span>       </div>
            <div class="slider">
                    <VueSlickCarousel v-bind="settings">
                        <div :class="['slider-item',{'meter':this.americanNotation}]" @click="changeNotation">
                            <div class="slide">
                                 <h5>диаметр</h5>
                                <img src="@/assets/icons/diameter.svg" alt="" class="slider-item-icon">
                                <span class="slider-item-info" v-show="americanNotation">
                                        {{data.diameter.meters}} meters
                                </span>
                                 <span class="slider-item-info" v-show="!americanNotation">
                                        {{data.diameter.feet}} feet
                                </span>
                            </div>
                        </div>
                        <div :class="['slider-item',{'meter':this.americanNotation}]"  @click="changeNotation">
                            <div class="slide">
                                 <h5>высота</h5>
                                <img src="@/assets/icons/height.svg" alt="" class="slider-item-icon">
                                <span class="slider-item-info" v-show="americanNotation">
                                        {{data.height.meters}} meters
                                </span>
                                 <span class="slider-item-info" v-show="!americanNotation">
                                        {{data.height.feet}} feet
                                </span>
                            </div>
                           
                        </div>
                        <div :class="['slider-item',{'meter':this.americanNotation}]"  @click="changeNotation">
                            <div class="slide">
                                 <h5>масса</h5>
                                <img src="@/assets/icons/weight.svg" alt="" class="slider-item-icon">
                                <span class="slider-item-info" v-show="americanNotation">
                                        {{data.mass.kg}} kg
                                </span>
                                 <span class="slider-item-info" v-show="!americanNotation">
                                        {{data.mass.lb}} lb
                                </span>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slide">
                                 <h5>стоимость за запуск</h5>
                                <img src="@/assets/icons/dollar.svg" alt="" class="slider-item-icon">
                                 <span class="slider-item-info">
                                        {{data.mass.lb}} $
                                </span>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slide">
                                 <h5>дата первого вылета</h5>
                                <img src="@/assets/icons/rocket.svg" alt="" class="slider-item-icon">
                                 <span class="slider-item-info">
                                        {{data.first_flight}}
                                </span>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slide">
                                 <h5>время горения</h5>
                                <img src="@/assets/icons/fire.svg" alt="" class="slider-item-icon">
                                 <span class="slider-item-info">
                                        {{data.first_stage.burn_time_sec+data.second_stage.burn_time_sec}} сек
                                </span>
                            </div>
                        </div>
                        <div :class="['slider-item',{'meter':this.americanNotation}]"  @click="changeNotation">
                            <div class="slide">
                                 <h5>тяга в вакуме</h5>
                                <img src="@/assets/icons/rocket-flying.svg" alt="" class="slider-item-icon">
                                <span class="slider-item-info" v-show="americanNotation">
                                        {{data.engines.thrust_vacuum.kN}} kN
                                </span>
                                 <span class="slider-item-info" v-show="!americanNotation">
                                        {{data.engines.thrust_vacuum.lbf}} lbf
                                </span>
                            </div>
                        </div>
                         <div class="slider-item">
                            <div class="slide">
                                 <h5>процент успешных запусков</h5>
                                <img src="@/assets/icons/pie-chart.svg" alt="" class="slider-item-icon">
                                 <span class="slider-item-info">
                                        {{data.success_rate_pct}} %
                                </span>
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slide">
                                 <h5>количество топлива</h5>
                                <img src="@/assets/icons/fuel.svg" alt="" class="slider-item-icon">
                                 <span class="slider-item-info">
                                        {{data.first_stage.fuel_amount_tons+data.second_stage.fuel_amount_tons}} тонн
                                </span>
                            </div>
                        </div>
                    </VueSlickCarousel>
            </div>
            
           
            <div class="buttons">
                <wikiButton
                    :link="data.wikipedia"
                />
                прочтите статью на википедии!
            </div>
        </div>
    </div>
</template>
<script>
import wikiButton from '@/components/wikiButton.vue'

 
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

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
            }
        }
    },
    methods:{
        changeNotation: function(){
            this.americanNotation = !this.americanNotation;
        }
    }
}
</script>

<style scoped>

    .rocket{
        position: relative;
        display:flex;
    }
    .rocket-preview{
        cursor: pointer;
        width:300px;
        height: 500px;
        transition: 1s;
    }
    .rocket-preview:active{
        width:350px;
        height: 500px;
        position: relative;
    }
    .rocket-preview:hover .flag{
        opacity: 1;
    }
    .rocket-preview:active .rocket-version {
        display: block;
    }
    .rocket-preview:active  .rocket-desc{
        display: block;
    }
    .rocket-preview:active  ~ .rocket-body{
        display: none;
    }
    .rocket-preview-img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .rocket-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .flag{
        transition: .1s;
        opacity: 0;
        top: 10px;
        left:10px;
        position: absolute;
        height: 40px;
        width: 70px;
    }
    .flag-img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .rocket-version{
        display: none;
    }
    .rocket-version{
        position: absolute;
        z-index: 1;
        color: white;
        font-size: 30px;
        top: calc(50% - 30px);
        left: 70%;
        text-transform: uppercase;
        mix-blend-mode:lighten;
        background-blend-mode:multiply ;
        background-color: rgb(255, 255, 255);
        color:rgba(0, 0, 0);
    }

    .id{
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }
    .isActive{
    margin: 0px 5px;
    }
    @keyframes  active {
        0%{
            background-color: rgb(13, 115, 231);
        }
        50%{
            background-color: rgb(8, 101, 207);
        }
        0%{
            background-color: rgb(13, 115, 231);
        }
    }
    .rocket-desc{
            display: none;
            padding: 5px;
            position: absolute;
            z-index: 1;
            color: white;
            top: calc(50% + 10px);
            left: 70%;
            width: 500px;
            background-color: rgb(13, 115, 231);
            color:white;
            line-height: 20px;
            mix-blend-mode:lighten;
    }

    .slider{
        width: 700px;
    }
    .slide{
        width: 100%;
        height: 100%;
         display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color:white;
    }
    .slider-item{
        height: 400px;
        cursor:move;
        background: linear-gradient( #396afc, #2948ff);
    }
    .meter{
         background: linear-gradient( #393cfc, #6229ff);
    }
    .slider-item-icon{
        width: 120px;
        height: 120px;
    }
    .slider-item-info{
        font-size: 26px; 
    }
    .buttons{
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 12px;
        letter-spacing: 1.5px; 
    }
</style>