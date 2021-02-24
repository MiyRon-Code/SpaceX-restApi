<template>
    <div class="date">
        <li class="launche-info-item date" @click="changeDateFormat">
            полная дата: 
            <span v-show="dateMode"> {{date.getDay()+1}} {{months[date.getMonth()]}} {{date.getFullYear()}} в {{date.getHours()}}:{{date.getMinutes()}} </span>
            <span v-show="!dateMode">{{data.launch_date_local}}</span>
        </li>
    </div>
</template>
<script>
export default {
    props:{
        data: Object
    },
    data(){
        return{
            date: new Date(0,0,0),
            dateMode: false,
            months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
        }
    },
    methods:{
        changeDateFormat(){
            this.date = new Date(this.data.launch_date_local);
            this.dateMode = !this.dateMode
        }
    },
    created(){
       this.date = new Date(this.data.launch_date_local); 
    },
}
</script>
<style scoped>
.date{
   cursor: pointer;
   padding: 5px;
   animation: pulsar 3s infinite;
}
@keyframes pulsar{
    0%{
        background-color: rgba(19, 116, 228,0.1);
    }
    50%{
        background-color: transparent;
    }
    100%{
        background-color: rgba(19, 116, 228,0.1);
    }
}
</style>