<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                 <h5>всего капсул: {{getUpcomingCapsules.data.length}}</h5>
                <Capsula v-for="(capsula,index) in getUpcomingCapsules.data" :key="index" :data="capsula"/>
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Capsula from '@/components/capsule.vue'

    export default{
        data(){
            return{
               
            }
        },
        components:{
            Capsula
        },
        mounted() {
          this.$store.dispatch('fetchCapsulesUpcoming');
        },
        computed : {
            ...mapGetters(['getUpcomingCapsules']),
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