<template>
    <div class="capsula">
            <div class="id">{{getLocalCard.serialNumber}} : {{data.capsule_serial}}  <input type="checkbox" class="more" v-model="checked"> </div>
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
    }
}
</script>
<style scoped>
.capsula{
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

.noMissions{
    background-color: rgb(149, 213, 255);
}

</style>