<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                 
                 <h5>всего запусков: {{getLaunches.data.length}}</h5>
                
                 <Launche v-for="(launche,index) in getLaunches.data" :key="index" :data="launche"/>
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
               loader:true
            }
        },
        components:{
            Launche,
            
        },
        mounted() {
          this.$store.dispatch('fetchLaunchesAll');
        },
        computed : {
  ...mapGetters(['getLaunches']),
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