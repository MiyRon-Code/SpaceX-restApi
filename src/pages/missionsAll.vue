<template>
    <div class="missionsAll">
        <div class="container">
            <div class="missionsAll-inner">
                 <h5>всего миссий: {{getDragons.data.length}}</h5>
                 
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Mission from '@/components/mission.vue'
   
    export default{
        data(){
            return{
               
            }
        },
        components:{
            Dragon
        },
        mounted() {
          this.$store.dispatch('fetchDragonsAll');
        },
        computed : {
  ...mapGetters(['getDragons']),
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