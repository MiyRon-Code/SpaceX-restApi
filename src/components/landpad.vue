<template>
    <div class="landpad">
            <div class="id" @click="toggle"><div class="preview-info"> <div class="preview-info-item"> id : {{data.id}} </div> <div class="preview-info-item"> имя : {{data.name}} </div></div>  <input class="checkbox" type="checkbox" name="" id="" v-model="checked"> <div class="indicator"></div></div>
            <div v-show="checked" class="landpad-body">
                <ul class="landpad-info">

                    <li class="landpad-info-item">{{getLocalCard.totalLandings}}:       {{data.attempted_launches}}</li>
                   
                    <li class="landpad-info-item">{{getLocalCard.successfulLandings}}:       {{data.successful_launches}}</li>
                    <li class="landpad-info-item">{{getLocalCard.landingType}}:       {{data.vehicles_launched}}</li>
                    <li class="landpad-info-item">{{getLocalCard.region}}:       {{data.location.region}}</li>
                    <li class="landpad-info-item">{{getLocalCard.location}}:       {{data.location.name}}</li>
                    <li class="landpad-info-item" ><span>{{getLocalCard.coordinates}}: <span class="location">широта   {{data.location.latitude}}</span>  <span class="location">долгота{{data.location.longitude}}</span> </span> <a target="_blank" :href="`https://www.google.ru/maps/place/@${data.location.latitude},${data.location.longitude},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d${data.location.latitude}!4d${data.location.longitude}`"><div class="search-button" title="найти на карте">  <img class="search-button-img" src="@/assets/icons/place.svg" /></div> </a> </li>
                    <li class="landpad-info-item">{{getLocalCard.status}}:       {{data.status}}</li>
                    <description
                        :show="true"
                        :text="data.details"
                    />
                    <button :class="['landpad-info-item show-chart',{'show-chart-active':showChart}]" @click="showChart = !showChart"><span v-show="!showChart">{{getLocalCard.chartShow}} </span> <span v-show="showChart">{{getLocalCard.chartClose}}</span> </button>
                

                </ul>
                <div class="chart-info" v-show="showChart">
                    <div class="chart">
                        <chart
                        :labels="[`${getLocalCard.successfulLandings}`,`${getLocalCard.totalLandings}`]"
                        :data="[data.attempted_launches,data.attempted_launches]"
                        />
                    </div>
                    <div class="chart">
                        <chartLine
                        :labels="['',`${getLocalCard.successfulLandings}`,`${getLocalCard.totalLandings}`]"
                        :data="[0,data.attempted_launches,data.attempted_launches]"
                        />
                    </div>
                    <div class="chart">
                        <chartBar
                        :labels="['',`${getLocalCard.successfulLandings}`,`${getLocalCard.totalLandings}`]"
                        :data="[0,data.attempted_launches,data.attempted_launches]"
                        />
                    </div>
                </div>
            </div>
           
    </div>
</template>
<script>
import chart from '@/components/chartPie.vue'
import chartLine from '@/components/chartLine.vue'
import chartBar from '@/components/chartBar.vue'

import description from '@/components/description.vue'
import { mapGetters } from 'vuex'

export default {
    props:{
        data: Object
    },
    data(){
        return{
            checked : false,
            showChart: false
        }
    },
    components:{
        chart,
        chartLine,
        chartBar,
        description
    },
    computed: {
        ...mapGetters(['getLocalCard'])
    },
    methods:{
        toggle: function(){
            this.checked = !this.checked;
        }
    }
}
</script>
<style scoped>
@keyframes indicator{
    0%{
        transform: translateX(-2px);
    }
    50%{
        transform: translateX(7px);
    }
    100%{
        transform: translateX(-2px);
    }
}
.checkbox{
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
}
.show-chart{
     padding: 5px;
     background-color: rgb(19, 116, 228);
     color: white;
     font-size: 17px;
     font-weight: 500;
     transition: .3s;
     cursor: pointer;
}
.show-chart:hover{
    background-color: rgb(19, 50, 228);
    color: white;
}
.show-chart-active{
    background-color: rgba(19, 116, 228,0.1);
    color: black;
}
.landpad{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
}
.chart-info{
    display: flex;
    justify-content: space-between;
}
.id:hover {
    color: white;
    background-color: #4b28f7;
}
.id:hover  .indicator{
    border-color: 6px solid transparent; border-right: 6px solid white;
}
.indicator{
    transition: .3s;
    border: 6px solid transparent; border-right: 6px solid #4b28f7;
    border-radius: 4px;
}
.id input:focus  ~ .indicator{
    animation: 2s indicator infinite;
}
.id input:checked ~ .indicator{
    animation: none;
    transition: 1s;
    transform: rotate(-90deg);
}

.id{
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.landpad-body{
       padding: 10px;
    box-sizing: border-box;
    background-color: #F9F9F9;
    font-size: 12px; 
    font-weight: 300;
    border: 3px solid #eeeeee;
}
.landpad-info{
    margin: 0;
    padding: 0;
    list-style: none;
}
.landpad-info-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    width: 100%;
}
.landpad-info-item:not(:last-child){
    margin-bottom: 16px;
}
.more{

}
.missions{
    display: flex;
    align-items: center;
}
.mission-item{
    margin: 0px 10px;
    padding: 10px;
    background-color: #EEEEEE;
    font-size: 8px;
    display: flex;
    flex-direction: column;

}
.fullName{
    margin: 0px 30px;
}
.preview-info{
    display: flex;
}
.preview-info-item{
    min-width: 100px;
    margin: 0px 10px;
}

.search-button{
    background-color: rgb(19, 116, 228);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: .2s;
}
.search-button:hover{
    transform: translateY(-4px) ;
    background-color: rgb(8, 101, 207);
}
.search-button:active{
    transform: translateY(-2px) ;
    background-color: rgb(88, 101, 207);
}
.search-button-img{
    width: 80%;
    height: 80%;
}

.location{
    margin: 0px 12px;
    padding: 5px;
    border-radius:4px; 
    background-color: rgba(19, 116, 228,0.1);

}
.detail{
    height: 0px;
    opacity: 0;
    transition: .5s;
    overflow: hidden;
}
.detail-active{
    height: auto;
    opacity: 1;
    overflow: visible;
    padding: 5px;
    line-height: 17px;
    background-color: rgba(19, 116, 228,0.1);
}
.chart{
    width: 300px;
    height: 300px;
}
</style>