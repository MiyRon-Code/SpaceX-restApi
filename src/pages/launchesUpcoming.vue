<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                 <div class="chart">
                 </div>
                 
                 <h5>всего запусков: {{getLaunchesUpcoming.data.length}}</h5>
                 <Launche v-for="(launche,index) in getLaunchesUpcoming.data" :key="index" :data="launche"/>
            </div>
        </div>
    </div>
</template>
<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Launche from '@/components/launche.vue'
    

    export default{
        data(){
            return{
               loader:true,
            }
        },
        components:{
            Launche,
        },
        mounted() {
            this.$store.dispatch('fetchLaunchesUpcoming');
            
        },
        computed : {
  ...mapGetters(['getLaunchesUpcoming']),
  // Другие вычисляемые свойства
   
},
        created(){
             this.$emit('login')
             console.log(this.$store.state)

        }
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}

</style>