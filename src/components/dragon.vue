<template>
    <div class="dragon">
            <div class="id" @click="toggle">id : {{data.id}}  <input class="checkbox" type="checkbox" name="" id="" v-model="checked"> <div class="indicator"></div> </div>
            <div v-show="checked" class="dragon-body">
                <ul class="dragon-info">
                    <li class="dragon-info-item">{{getLocalCard.mass}} (kg): {{data.dry_mass_kg}}</li>
                    <li class="dragon-info-item">{{getLocalCard.mass}} (lb): {{data.dry_mass_lb}}</li>
                    <li class="dragon-info-item">{{getLocalCard.crewCapacity}}: {{data.crew_capacity}}</li>
                    <li class="dragon-info-item">{{getLocalCard.date}}: {{data.first_flight}}</li>
                    <li class="dragon-info-item">{{getLocalCard.cargoBayHeight}} (meters): {{data.height_w_trunk.meters}}</li>
                    <li class="dragon-info-item">{{getLocalCard.cargoBayHeight}} (feet): {{data.height_w_trunk.feet}}</li>
                    <li class="dragon-info-item">{{getLocalCard.startWeight}} (kg): {{data.launch_payload_mass.kg}}</li>
                    
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
import { mapGetters } from 'vuex'
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
    },
    computed:{
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
.dragon{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
}
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
.checkbox{
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
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