<template>
    <div class="landpad">
            <div class="id"><div class="preview-info"> <div class="preview-info-item"> id : {{data.id}} </div> <div class="preview-info-item"> имя : {{data.name}} </div></div>  <input type="checkbox" class="more" v-model="checked"> </div>
            <div v-show="checked" class="landpad-body">
                <ul class="landpad-info">

                    <li class="landpad-info-item">Кол-во: попыток высадок на платформу:       {{data.attempted_landings}}</li>
                   
                    <li class="landpad-info-item">успешные посадки:       {{data.successful_landings}}</li>
                    <li class="landpad-info-item">тип посадки:       {{data.landing_type}}</li>
                    <li class="landpad-info-item">регион:       {{data.location.region}}</li>
                    <li class="landpad-info-item">локация:       {{data.location.name}}</li>
                    <li class="landpad-info-item" ><span>координаты : <span class="location">широта   {{data.location.latitude}}</span>  <span class="location">долгота{{data.location.longitude}}</span> </span> <a target="_blank" :href="`https://www.google.ru/maps/place/@${data.location.latitude},${data.location.longitude},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d${data.location.latitude}!4d${data.location.longitude}`"><div class="search-button" title="найти на карте">  <img class="search-button-img" src="@/assets/icons/place.svg" /></div> </a> </li>
                    <li class="landpad-info-item">статус:       {{data.status}}</li>
                    <description
                        :show="true"
                        :text="data.details"
                    />
                    <button :class="['landpad-info-item show-chart',{'show-chart-active':showChart}]" @click="showChart = !showChart"><span v-show="!showChart"> Показать данные в виде графика </span> <span v-show="showChart">Скрыть данные в виде графика </span> </button>
                

                </ul>
                <div class="chart-info" v-show="showChart">
                    <div class="chart">
                        <chart
                        :labels="['успешные посадки','всего посадок']"
                        :data="[data.successful_landings,data.attempted_landings]"
                        />
                    </div>
                    <div class="chart">
                        <chartLine
                        :labels="['','успешные посадки','всего посадок']"
                        :data="[0,data.successful_landings,data.attempted_landings]"
                        />
                    </div>
                    <div class="chart">
                        <chartBar
                        :labels="['','успешные посадки','всего посадок']"
                        :data="[0,data.successful_landings,data.attempted_landings]"
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
    }
}
</script>
<style scoped>
body{
    background-color: red
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
.id{
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