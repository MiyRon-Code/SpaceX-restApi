<template>
    <div class="landpad">
            <div class="id"><div class="preview-info"> <div class="preview-info-item"> id : {{data.id}} </div> <div class="preview-info-item"> имя : {{data.full_name}} </div></div>  <input type="checkbox" class="more" v-model="checked"> </div>
            <div v-show="checked" class="landpad-body">
                <ul class="landpad-info">

                    <li class="landpad-info-item">Кол-во: попыток высадок на платформу:       {{data.attempted_landings}}</li>
                   
                    <li class="landpad-info-item">успешные посадки:       {{data.successful_landings}}</li>
                    <li class="landpad-info-item">тип посадки:       {{data.landing_type}}</li>
                    <li class="landpad-info-item">регион:       {{data.location.region}}</li>
                    <li class="landpad-info-item">локация:       {{data.location.name}}</li>
                    <li class="landpad-info-item" ><span>координаты : <span class="location">широта   {{data.location.latitude}}</span>  <span class="location">долгота{{data.location.longitude}}</span> </span> <a target="_blank" :href="`https://www.google.ru/maps/place/@${data.location.latitude},${data.location.longitude},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d${data.location.latitude}!4d${data.location.longitude}`"><div class="search-button" title="найти на карте">  <img class="search-button-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTU1MC40LDI4MS44MTdjLTE4LjM4NSwyMC42MzctMzYuMzk1LDQyLjg2OC00OC45NjUsNzMuNTRjLTUuNzIxLDE0LjE2NC0xOS4zMjIsMjMuMzU3LTM0LjYxMywyMy4zNTcgICBjLTE1LjM4MywwLTI4Ljk4NC05LjE5My0zNC43OTktMjMuNDVjLTE0LjU0MS0zNS42NDYtMzYuNTg0LTU5LjkzOS01Ny45NzEtODMuMzljLTUuMzQ2LTUuOTA5LTEwLjY5My0xMS44MTktMTUuOTQ1LTE3LjkxNiAgIGMtMC4yODEsMC4wOTQtMC40NzEsMC4xODgtMC43NSwwLjI4MWMtMjAuODI0LDYuMjg0LTM2Ljg2NSwzMy44NjItMjcuMjAzLDU2LjI4MWM2LjU2NiwxNS4zODMsNTIuNjIzLDEyLjQ3Niw0OC42ODQsNDUuNTg3ICAgYy0zLjI4MywyNy4xMDgsMzIuMTcyLDM0LjIzNyw0NC43NDIsMzIuOTI1YzEyLjU3LTEuNTAxLDMxLjg5MywyMC42MzcsMjIuMTM3LDMwLjM5MmMtOS42Niw5Ljc1Ni0yNy45NTMsMTAuMTMxLTI1LjEzOSwzNS4yNyAgIGMwLjc1LDcuMzE2LDIyLjg4OSw2LjM3OSwyMi44ODksMTcuNDQ3YzAsMTEuMTYyLTExLjQ0MywyMy44MjYtMi42MjcsMzYuNjc3YzEuODc3LDIuODEzLDMuODQ2LDQuOTcxLDUuOTEsNi42NTkgICBjLTQyLjM5OCwzOS4wMjItOTguOTYxLDYyLjk0MS0xNjAuOTY0LDYyLjk0MWMtMTMxLjA0MSwwLTIzNy42LTEwNi41NTktMjM3LjYtMjM3LjZjMC0zOS43NzEsOS44NS03Ny4yOTMsMjcuMjAzLTExMC4zMTEgICBjLTAuMDk0LDQyLjY4LDIyLjcsNzguMTM3LDMzLjM5Myw4OC44M2MzNC44OTQsMzQuOCw4NS40NTQsMjMuODI1LDkxLjkyNSw1Mi45OTdjNi41NjYsMjkuMDc5LTM0LjcwNywyOS4xNzMtMzEuOTg2LDUxLjQwMyAgIGMyLjgxMywyMi4zMjUsNTYuNTYyLDI4LjIzNSw0NC41NTYsNDguNzc3Yy0xNS44NTMsMjcuMjk2LDEwLjY5MywyOS4yNjYsMy4wMDIsNjIuOTRjLTQuMTI3LDE4LjM4NiwyMi40MTgsMjEuOTUsMzIuMjY4LDcuOTc0ICAgYzcuNTA0LTEwLjY5Myw2LjAwMy0yMy44MjYsMjEuMTA1LTM5Ljg2NWMxOC40NzktMTkuNjk5LDYxLjM0Ny0yMi44ODgsNTYuNTYyLTU1LjQzOGMtOC4xNi01NC4wMjktNjAuNjg5LTYyLjQ3Mi04My41NzctNzUuMTM2ICAgYy0yNS45ODMtMTQuMjU3LTE5LjYwNC00OC40OTUtMjUuMjMzLTY0LjgxNmMtNy44NzktMjMuMTY5LTM0LjYxMyw2LjQ3My00OC44NzEtNy4wMzVjLTIzLjQ1LTIyLjEzNyw0LjIyMS01My40NjcsMjMuOTE5LTUyLjgxICAgYzQxLjU1NCwxLjMxMyw1NC4zMTEsNDEuNzQyLDY5LjYsNDAuMzM0YzE0LjkxNS0xLjMxMywyNC41NzctMjIuMTM3LDI3LjIwMy0zMy4yMDVjNS41MzUtMjQuMTA3LTkuMzgtMTMuMzItMTUuMzgzLTI1Ljg5ICAgYy04LjA2Ny0xNi43OSwyOC4zMjgtMzIuODMsNDIuMzk4LTQ1LjIxMmMyLjE1OC0xLjg3NiwzLjc1Mi0zLjY1OCw0LjU5Ni01LjM0N2M0LjIyMy04LjI1NC0xLjMxMi0xNC41MzktMTAuNjkzLTIwLjI2MSAgIGMtMTguNzU5LTExLjM1MS01Mi45OTctMjAuMzU1LTU0LjU5MS0zOC4wODNjLTAuOTM5LTEwLjg4MiwxOS44ODYtMTYuMTM0LDQzLjYxNy0xNy4wNzJjMy45MzksMC4xODgsNy43ODUsMC41NjMsMTEuNzI2LDAuOTM4ICAgYzEuOTY5LTExLjE2Myw1LjE1OC0yMi4xMzgsOS40NzMtMzIuNjQzYy0xMS4zNS0xLjUwMS0yMi44ODctMi4yNTItMzQuNjEzLTIuMjUyYy0xNDkuNTIsMC0yNzEuMTgsMTIxLjY2LTI3MS4xOCwyNzEuMTggICBDMTQuNjA0LDQ5MC4zNCwxMzYuMjY1LDYxMiwyODUuNzg1LDYxMmMxNDkuNTIsMCwyNzEuMTgyLTEyMS42NjEsMjcxLjE4Mi0yNzEuMTgxQzU1Ni45NjcsMzIwLjU1OCw1NTQuNzE1LDMwMC43NjYsNTUwLjQsMjgxLjgxN3ogICAgTTQ1NC4wNjIsMC42MDNDMzc3LjUxLDcuODM5LDMyNS4wNzgsODIuMDE2LDMzOC40MzksMTU3Ljc0MWMxMy41NjgsNzYuOTIxLDg0LjQ5LDEwMC41OTgsMTE5LjY4NiwxODYuOTQyICAgYzMuMTcyLDcuNzgxLDE0LjEyNyw3LjgyLDE3LjI5NywwLjAzOGMzOS4wMTYtOTUuNzY2LDEyMS45NzUtMTE0LjQ1NSwxMjEuOTc1LTIxNC4xMDZDNTk3LjM5Niw1NC4yODIsNTMxLjkxNi02Ljc1Niw0NTQuMDYyLDAuNjAzICAgeiBNNDY2Ljc4MSwxOTkuNTkzYy0zOC4wOTYsMC02OC45NzktMzAuODgyLTY4Ljk3OS02OC45NzhjMC0zOC4wOTUsMzAuODgzLTY4Ljk3Nyw2OC45NzktNjguOTc3czY4Ljk3NywzMC44ODIsNjguOTc3LDY4Ljk3NyAgIFM1MDQuODc1LDE5OS41OTMsNDY2Ljc4MSwxOTkuNTkzeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" /></div> </a> </li>
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