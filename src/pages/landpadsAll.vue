<template>
    <div class="dragonsAll">
        <div class="container">
            <div class="dragonsAll-inner">
                 <h5>всего платформ: {{getDragons.data.length}}</h5>
                 <Dragon v-for="(dragon,index) in getDragons.data" :key="index" :data="dragon"/>
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Dragon from '@/components/dragon.vue'
   
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