<template>
    <div class="landpadsAbout">
        <About 
        :impPath="'https://cms.qz.com/wp-content/uploads/2017/02/spacex-falcon-9-landing-cape-canaveral-crs-10.jpg?quality=75&strip=all&w=1200&h=900&crop=1'"
        :header ="`${getLocalCategory.landpads}`"
        :description="'Landpads - посадочная площадка SpaceX '" />
    </div>
</template>

<script>
import About from '@/components/about.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        About
    },
    computed:{
        ...mapGetters(['getLocalCategory'])
    }
}
</script>