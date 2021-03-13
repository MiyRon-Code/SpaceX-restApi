<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                 <h5>{{getLocalHelpers.total}} {{getLocalCategory.capsules}}: {{getUpcomingCapsules.data.length}}</h5>
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
            ...mapGetters(['getUpcomingCapsules','getLocalCategory','getLocalHelpers']),
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