<template>
    <div class="missionsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2015/11/07/11/03/satellite-1030782_960_720.jpg'"
        :header ="'Missions'"
        :description="'Missions - Информация о всех миссиях SpaceX'" />
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