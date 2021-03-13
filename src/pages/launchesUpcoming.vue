<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                 <div class="chart">
                 </div>
                 
                 <h5>{{getLocalHelpers.upcoming}} {{getLocalCategory.launches}}: {{getLaunchesUpcoming.data.length}}</h5>
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
        mounted(){
            this.$store.dispatch('fetchLaunchesUpcoming')            
        },
        components:{
            Launche,
        },
        computed : {
            ...mapGetters(['getLaunchesUpcoming','getLocalCategory','getLocalHelpers']),
        },
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}

</style>