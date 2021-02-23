<template>
    <div class="dragon">
            <div class="id">id : {{data.id}}  <input type="checkbox" class="more" v-model="checked"> </div>
            <div v-show="checked" class="dragon-body">
                <ul class="dragon-info">
                    <li class="dragon-info-item">масса (кг): {{data.dry_mass_kg}}</li>
                    <li class="dragon-info-item">масса (фунт): {{data.dry_mass_lb}}</li>
                    <li class="dragon-info-item">вместимость экипажа: {{data.crew_capacity}}</li>
                    <li class="dragon-info-item">первый полёт: {{data.first_flight}}</li>
                    <li class="dragon-info-item">высота грузового отсека (метры): {{data.height_w_trunk.meters}}</li>
                    <li class="dragon-info-item">высота грузового отсека (футов): {{data.height_w_trunk.feet}}</li>
                    <li class="dragon-info-item">стартовая масса полезной нагрузки (кг): {{data.launch_payload_mass.kg}}</li>
                    <Description
                        :show="false"
                        :text = data.description
                    />
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
        Description,
    }
}
</script>
<style scoped>
.dragon{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
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
.dragon-body{
       padding: 10px;
    box-sizing: border-box;
    background-color: #F9F9F9;
    font-size: 12px; 
    font-weight: 300;
    border: 3px solid #eeeeee;
}
.dragon-info{
    margin: 0;
    padding: 0;
    list-style: none;
}
.dragon-info-item:not(:last-child){
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