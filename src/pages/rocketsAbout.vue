<template>
    <div class="rocketsAbout">
        <About 
        :impPath="'https://cms.qz.com/wp-content/uploads/2017/02/spacex-falcon-9-landing-cape-canaveral-crs-10.jpg?quality=75&strip=all&w=1200&h=900&crop=1'"
        :header ="'Rockets'"
        :description="'Rockets - ракеты разработанные SpaceX '" />
    </div>
</template>

<script>
import About from '@/components/about.vue'

export default {
    components:{
        About
    }
}
</script>