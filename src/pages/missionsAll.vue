<template>
    <div class="missionsAll">
        <div class="container">
            <div class="missionsAll-inner">
                 <h5>всего миссий: {{getMissions.data.length}}</h5>
                 <Mission v-for="mission in getMissions.data" :key="(mission,index)" :data="mission"/>
            </div>
            <chartLine
                :data="getDataForChart"
                :labels="getTitleForChart"
            />
            {{getDataForChart}}
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Mission from '@/components/mission.vue'
    import chartLine from '@/components/chartLine.vue'
    export default{
        data(){
            return{
               dataForChart: this.getDataForChart()
            }
        },
        components:{
            Mission,chartLine
        },
        mounted() {
          this.$store.dispatch('fetchMissions');
        },
        methods:{
            
        },
        computed : {
            ...mapGetters(['getMissions']),
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