<template>
    <div class="capsula" @click="toggle">
            <div class="id">{{getLocalCard.serialNumber}} : {{data.capsule_serial}} <input class="checkbox" type="checkbox" name="" id=""> <div class="indicator"></div> </div>
            <div v-show="checked" class="capsula-body">
                <ul class="capsula-info">
                    <li class="capsula-info-item">{{getLocalCard.landingCount}}:       {{data.landings}}</li>
                    <li class="capsula-info-item">{{getLocalCard.date}}:       {{data.original_launch}} <span v-show="!data.original_launch">{{getLocalCard.indefiniteDate}}</span> </li>
                    <li class="capsula-info-item">{{getLocalCard.reuseCount}}:      {{data.reuse_count}}</li>
                    <li class="capsula-info-item">{{getLocalCard.status}}:      {{data.status}}</li>
                    <li class="capsula-info-item">{{getLocalCard.type}}:      {{data.type}}</li>
                    <li class="capsula-info-item missions">{{getLocalCard.missions}}:
                        <div class="mission-item noMissions" v-show="!data.missions.length">
                            {{getLocalCard.noMissions}}
                        </div> 
                        <div class="mission-item" v-for="(mission, index ) in data.missions" :key="index">
                            {{getLocalCard.name}}:{{mission.name}}      {{getLocalCard.flight}}:{{mission.flight}}
                        </div>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
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
.capsula{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
    position: relative;
}
.capsula:hover .id{
    color: white;
    background-color: #4b28f7;
}
.capsula:hover .indicator{
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
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.capsula-body{
    padding: 10px;
    box-sizing: border-box;
    background-color: #F9F9F9;
    font-size: 12px; 
    font-weight: 300;
    border: 3px solid #eeeeee;
}
.capsula-info{
    margin: 0;
    padding: 0;
    list-style: none;
}
.capsula-info-item:not(:last-child){
    margin-bottom: 16px;
}
.checkbox{
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
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

.noMissions{
    background-color: rgb(149, 213, 255);
}

</style>