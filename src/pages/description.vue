<template>
    <div class="main">
        <div class="container">
            <About 
            :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/35/satellite-693194_960_720.jpg'"
            :header ="'Description'"
            :description="'Description - описание Json данных каждого запроса. '" 
            
            />
            <h3>Информация о компании</h3>
            <jsonDescription 
                :title="'о компании'"
                :data="getAboutCompany"
                :link="'https://api.spacexdata.com/v3/info'"
            />
            <jsonDescription 
                :title="'о spaceX api'"
                :data="getAboutCompany"
                :link="'https://api.spacexdata.com/v3'"
            />
            <h3>Платформы для запуска</h3>
            <jsonDescription 
                :title="'все платформы'"
                :data="getLandpads"
                :link="'https://api.spacexdata.com/v3/launchpads'"
            />
            <h3>Капсулы</h3>
            <jsonDescription 
                :title="'все капсулы'"
                :data="getCapsules"
                :link="'https://api.spacexdata.com/v3/capsules'"
            />
            <jsonDescription 
                :title="'прошлые капуслы'"
                :data="getPastCapsules"
                :link="'https://api.spacexdata.com/v3/capsules/past'"
            />
            <jsonDescription 
                :title="'запланированные капсулы'"
                :data="getUpcomingCapsules"
                :link="'https://api.spacexdata.com/v3/capsules/upcoming'"
            />
            <h3>Ракеты</h3>
            <jsonDescription 
                :title="'все ракеты'"
                :data="getRockets"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <h3>Запуски</h3>
            <jsonDescription 
                :title="'все запуски'"
                :data="getLaunches"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <jsonDescription 
                :title="'будущие запуски'"
                :data="getLaunchesUpcoming"
                :link="'https://api.spacexdata.com/v3/launches/upcoming'"
            />
            <jsonDescription 
                :title="'прошедшие запуски'"
                :data="getLaunchesPast"
                :link="'https://api.spacexdata.com/v3/launches/past'"
            />
            <h3>Crew Dragon</h3>
            <jsonDescription 
                :title="'все версии аппарата crew dragon'"
                :data="getDragons"
                :link="'https://api.spacexdata.com/v3/dragons'"
            />
            <h3>Миссии</h3>
            <jsonDescription 
                :title="'все миссии'"
                :data="getMissions"
                :link="'https://api.spacexdata.com/v3/missions'"
            />
        </div>
      
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

/* components */
import About from '@/components/about.vue'
import jsonDescription from '@/components/jsonDescription.vue'

export default {
    components:{
        About,
        jsonDescription,
    },
    mounted() {
        this.$store.dispatch('fetchAboutCompany');
        this.$store.dispatch('fetchLandpadsAll');
        this.$store.dispatch('fetchCapsulesAll');
        this.$store.dispatch('fetchCapsulesPast');
        this.$store.dispatch('fetchCapsulesUpcoming');
        this.$store.dispatch('fetchLaunchesAll');
        this.$store.dispatch('fetchLaunchesPast');
        this.$store.dispatch('fetchLaunchesUpcoming');
        this.$store.dispatch('fetchDragonsAll');
        this.$store.dispatch('fetchRockets');
        this.$store.dispatch('fetchMissions');
    },
    computed:{
        ...mapGetters(['getAboutCompany']),
        ...mapGetters(['getLandpads']),
        ...mapGetters(['getCapsules']),
        ...mapGetters(['getPastCapsules']),
        ...mapGetters(['getUpcomingCapsules']),
        ...mapGetters(['getLaunches']),
        ...mapGetters(['getLaunchesUpcoming']),
        ...mapGetters(['getLaunchesPast']),
        ...mapGetters(['getDragons']),
        ...mapGetters(['getRockets']),
        ...mapGetters(['getMissions']),
    },    


}
</script>
<style scoped>

</style>