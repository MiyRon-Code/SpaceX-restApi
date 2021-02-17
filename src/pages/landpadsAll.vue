<template>
    <div class="dragonsAll">
        <div class="container">
            <div class="dragonsAll-inner">
                 <h5>всего платформ: {{getLandpads.data.length}}</h5>
                 <Landpad v-for="(landpad,index) in getLandpads.data" :key="index" :data="landpad"/>
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Landpad from '@/components/landpad.vue'
   
    export default{
        data(){
            return{
               
            }
        },
        components:{
            Landpad
        },
        mounted() {
          this.$store.dispatch('fetchLandpadsAll');
        },
        computed : {
  ...mapGetters(['getLandpads']),
  // Другие вычисляемые свойства
},
        created(){
             console.log(this.$store.state)
        }
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}
</style>