<template>
    <div class="rocketsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/36/satellite-693204_960_720.jpg'"
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