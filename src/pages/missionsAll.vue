<template>
    <div class="missionsAll">
        <div class="container">
            <div class="missionsAll-inner">
                 <h5>{{getLocalHelpers.total}} {{getLocalCategory.missions}}: {{getMissions.data.length}}</h5>
                 <Mission v-for="mission in getMissions.data" :key="(mission,index)" :data="mission"/>
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
               dataForChart: this.getDataForChart()
            }
        },
        components:{
            Mission
        },
        mounted() {
          this.$store.dispatch('fetchMissions');
        },
        computed : {
            ...mapGetters(['getMissions','getLocalCategory','getLocalHelpers']),
            getDataForChart(){
                let data = []
                for( let i=0; i<10; i++){
                    data.push(i%2);
                }
                return data;
            },
            getTitleForChart(){
                let data = []
                for( let i=0; i<10; i++){
                    data.push((i%2)+'');
                }
                return data;
            },
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