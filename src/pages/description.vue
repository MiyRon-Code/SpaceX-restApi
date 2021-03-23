<template>
    <div class="main">
        <div class="container">
            <About 
            :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/35/satellite-693194_960_720.jpg'"
            :header ="`${getLocalCategory.description}`"
            :description="`${getLocalDescription.description}`" 
            />
            <h3>{{getLocalCategory.info}}</h3>
            <jsonDescription 
                :title="`${getLocalCategory.api}`"
                :link="'https://api.spacexdata.com/v3'"
                :action="'fetchAboutApi'"
                :getter="'getAboutApi'"
            />
            <jsonDescription 
                :title="`${getLocalCategory.company}`"
                :link="'https://api.spacexdata.com/v3/info'"
                :action="'fetchAboutCompany'"
                :getter="'getAboutCompany'"
            />
            <h3>{{getLocalCategory.landpads}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.landpads}`"
                :link="'https://api.spacexdata.com/v3/launchpads'"
                :action="'fetchLandpadsAll'"
                :getter="'getLandpads'"
            />
            <h3>{{getLocalCategory.capsules}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.capsules}`"
                :action="'fetchCapsulesAll'"
                :getter="'getCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules'"
            />
            <jsonDescription 
                :title="`${getLocalHelpers.past} ${getLocalCategory.capsules}`"
                :action="'fetchCapsulesPast'"
                :getter="'getPastCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules/past'"
            />
            <jsonDescription 
                :title="`${getLocalHelpers.upcoming} ${getLocalCategory.capsules}`"
                :action="'fetchCapsulesUpcoming'"
                :getter="'getUpcomingCapsules'"
                :link="'https://api.spacexdata.com/v3/capsules/upcoming'"
            />
            <h3>{{getLocalCategory.rockets}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.rockets}`"
                :action="'fetchRockets'"
                :getter="'getRockets'"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <h3>{{getLocalCategory.launches}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.launches}`"
                :action="'fetchLaunchesAll'"
                :getter="'getLaunches'"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <jsonDescription 
                :title="`${getLocalHelpers.upcoming} ${getLocalCategory.launches}`"
                :action="'fetchLaunchesUpcoming'"
                :getter="'getLaunchesUpcoming'"
                :link="'https://api.spacexdata.com/v3/launches/upcoming'"
            />
            <jsonDescription 
                :title="`${getLocalHelpers.past} ${getLocalCategory.launches}`"
                :action="'fetchLaunchesPast'"
                :getter="'getLaunchesPast'"
                :link="'https://api.spacexdata.com/v3/launches/past'"
            />
            <h3>{{getLocalCategory.dragons}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.dragons}`"
                :getter="'getDragons'"
                :action="'fetchDragonsAll'"
                :link="'https://api.spacexdata.com/v3/dragons'"
            />
            <h3>{{getLocalCategory.missions}}</h3>
            <jsonDescription 
                :title="`${getLocalHelpers.all} ${getLocalCategory.missions}`"
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
        //local
        ...mapGetters(['getLocalCategory','getLocalHelpers','getLocalDescription']),
    },    


}
</script>
<style scoped>

</style>