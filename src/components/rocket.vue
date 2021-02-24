<template>
    <div :class="['rocket',{'active-rocket':data.active}]">
            <div class="id">версия: {{data.id}} <span class="status"> <div class="isActive" v-show="data.active">АКТИВНАЯ!</div> <input type="checkbox" class="more" v-model="checked"></span>       </div>
            <div v-show="checked" class="rocket-body">
                <ul class="rocket-info">
                    <li class="rocket-info-item">страна:       {{data.country}}</li>
                    <li class="rocket-info-item">диаметр:       {{data.diameter.meters}} метров / {{data.diameter.feet}} футов</li>
                    <Description
                        :text="data.description"
                    />
                     <li class="rocket-info-item">первый вылет:       {{data.first_flight}}</li>
                     <li class="rocket-info-item ">
                         первая ступень 
                         <div class="stage">
                            <div class="stage-info-item"> <img class="stage-info-item-icon"> время горения ступени {{data.first_stage.burn_time_sec}} секунд</div>
                            <div class="stage-info-item"> <img class="stage-info-item-icon"> время горения ступени {{data.first_stage.burn_time_sec}} секунд</div>
                            <div class="stage-info-item"> <img class="stage-info-item-icon"> количество топлива {{data.first_stage.fuel_amount_tons}} тонн</div>reusable
                            <div class="stage-info-item res"> <img class="stage-info-item-icon"> многоразовый?  <div v-show="!data.first_stage.reusable" class="isReusable"></div> <div v-show="data.first_stage.reusable" class="isReusable-active"></div></div>
                         </div> 
                     </li>
                </ul>
            </div>
    </div>
</template>
<script>
import Description from "@/components/description.vue"
export default {
    props:{
        data: Object
    },
    data(){
        return{
            checked : false,
        }
    },
    components:{
        Description
    }
}
</script>
<style scoped>
@keyframes  active {
    0%{
        background-color: rgb(155, 255, 169);
    }
    50%{
        background-color: rgb(134, 248, 149);
    }
    0%{
        background-color: rgb(155, 255, 169);
    }
}
.rocket{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
   
}
.res{
    display: flex;
    align-items: center;
}
.isReusable{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: rgb(252, 38, 0);
}
.isReusable-active{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: rgb(155, 255, 169);
}
.active-rocket{
    animation: active 2s infinite;
    background-color: rgb(155, 255, 169);
}
.isActive{
    
   margin: 0px 5px;
}
.status{
    display: flex;
    align-items: center;

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
.rocket-body{
       padding: 10px;
    box-sizing: border-box;
    background-color: #F9F9F9;
    font-size: 12px; 
    font-weight: 300;
    border: 3px solid #eeeeee;
}
.rocket-info{
    margin: 0;
    padding: 0;
    list-style: none;
}
.rocket-info-item:not(:last-child){
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


</style>