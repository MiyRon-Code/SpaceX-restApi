<template>
    <div class="rocketsAll">
        <div class="container">
            <div class="rocketsAll-inner">
                 <h5>всего ракет: {{getRockets.data.length}}</h5>
                 <Rocket v-for="(rocket,index) in getRockets.data" :key="index" :data="rocket"
                    
                 />
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Rocket from '@/components/rocket.vue'
   
    export default{
        data(){
            return{
               
            }
        },
        components:{
            Rocket
        },
        mounted() {
          this.$store.dispatch('fetchRockets');
        },
        computed : {
  ...mapGetters(['getRockets']),
  // Другие вычисляемые свойства
},
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}
</style>