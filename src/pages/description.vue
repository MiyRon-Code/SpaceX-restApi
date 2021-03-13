<template>
    <div class="main">
        <div class="container">
            <About 
            :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/35/satellite-693194_960_720.jpg'"
            :header ="'Description'"
            :description="'Description - описание Json данных каждого запроса. '" 
            
            />
            <h3>{{getLocalCategory.company}}</h3>
            <jsonDescription 
                :title="'о компании'"
                :link="'https://api.spacexdata.com/v3/info'"
                :action="'fetchAboutCompany'"
                :getter="'getAboutCompany'"
            />
            <jsonDescription 
                :title="'о компании'"
                :link="'https://api.spacexdata.com/v3/info'"
                :action="'fetchAboutCompany'"
                :getter="'getAboutCompany'"
            />
            <h3>{{getLocalCategory.landpads}}</h3>
            <jsonDescription 
                :title="'о компании'"
                :link="'https://api.spacexdata.com/v3/info'"
                :action="'fetchAboutCompany'"
                :getter="'getAboutCompany'"
            />
            <h3>{{getLocalCategory.capsules}}</h3>
            <jsonDescription 
                :title="'все капсулы'"
                :action="'fetchCapsulesAll'"
                :getter="'getCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules'"
            />
            <jsonDescription 
                :title="'прошлые капуслы'"
                :action="'fetchCapsulesPast'"
                :getter="'getPastCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules/past'"
            />
            <jsonDescription 
                :title="'запланированные капсулы'"
                :action="'fetchCapsulesUpcoming'"
                :getter="'getUpcomingCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules/upcoming'"
            />
            <h3>{{getLocalCategory.rockets}}</h3>
            <jsonDescription 
                :title="'все ракеты'"
                :action="'fetchRockets'"
                :getter="'getRockets'"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <h3>{{getLocalCategory.launches}}</h3>
            <jsonDescription 
                :title="'все запуски'"
                :action="'fetchLaunchesAll'"
                :getter="'getLaunches'"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <jsonDescription 
                :title="'будущие запуски'"
                :action="'fetchLaunchesUpcoming'"
                :getter="'getLaunchesUpcoming'"
                :link="'https://api.spacexdata.com/v3/launches/upcoming'"
            />
            <jsonDescription 
                :title="'прошедшие запуски'"
                :action="'fetchLaunchesPast'"
                :getter="'getLaunchesPast'"
                :link="'https://api.spacexdata.com/v3/launches/past'"
            />
            <h3>{{getLocalCategory.dragons}}</h3>
            <jsonDescription 
                :title="'все версии аппарата crew dragon'"
                :getter="'getDragons'"
                :action="'fetchDragonsAll'"
                :link="'https://api.spacexdata.com/v3/dragons'"
            />
            <h3>{{getLocalCategory.missions}}</h3>
            <jsonDescription 
                :title="'все миссии'"
                :action="'fetchMissions'"
                :getter="'getMissions'"
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
    async mounted() {
        // this.$store.dispatch('fetchAboutCompany');
        // this.$store.dispatch('fetchLandpadsAll');
        // this.$store.dispatch('fetchCapsulesAll');
        // this.$store.dispatch('fetchCapsulesPast');
        // this.$store.dispatch('fetchCapsulesUpcoming');
        // this.$store.dispatch('fetchLaunchesAll');
        // this.$store.dispatch('fetchLaunchesPast');
        // this.$store.dispatch('fetchLaunchesUpcoming');
        // this.$store.dispatch('fetchDragonsAll');
        // this.$store.dispatch('fetchRockets');
        // this.$store.dispatch('fetchMissions');
    },
    computed:{
        ...mapGetters(['getAboutCompany','getLandpads','getCapsules','getPastCapsules','getUpcomingCapsules','getLaunches','getLaunchesUpcoming','getLaunchesPast','getDragons','getRockets','getMissions']),
        //local
        ...mapGetters(['getLocalCategory']),
    },    


}
</script>
<style scoped>

</style>