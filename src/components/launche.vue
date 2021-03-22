<template>
    <div class="launche">
            <div class="id" @click="toggle"><div class="preview-info"> <div class="preview-info-item"> id: {{data.flight_number}} </div> <div class="preview-info-item" v-show="data.mission_id!=''"> {{getLocalCard.name}}: {{data.mission_name}} </div></div>  <input class="checkbox" type="checkbox" name="" id="" v-model="checked"> <div class="indicator"></div> </div>
            <div v-show="checked" class="launche-body">
                <ul class="launche-info">
                    <li class="launche-info-item">{{getLocalCard.year}}: {{data.launch_year}}</li>
                    <li class="launche-info-item">{{getLocalCard.rocket}}: {{data.rocket.rocket_name}}</li>
                    <li class="launche-info-item">{{getLocalCard.version}}: {{data.rocket.rocket_type}}</li>
                    <Date
                        :data="data"
                    />
                </ul>
            </div>
                       
    </div>
</template>
<script>
import Date  from "@/components/date.vue"
import { mapGetters } from 'vuex'

export default {
    props:{
        data: Object,
    },
    data(){
        return{
            checked : false,
        }
    },
    components:{
        Date
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
.checkbox{
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
}
.launche{
    color: black;
    background-color: #EEEEEE;
    margin-bottom:5px; 
}
.preview-info{
    display: flex;
}
.preview-info-item{
    min-width: 100px;
    margin: 0px 10px;
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
.launche-body{
       padding: 10px;
    box-sizing: border-box;
    background-color: #F9F9F9;
    font-size: 12px; 
    font-weight: 300;
    border: 3px solid #eeeeee;
}
.launche-info{
    margin: 0;
    padding: 0;
    list-style: none;
}
.launche-info-item:not(:last-child){
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