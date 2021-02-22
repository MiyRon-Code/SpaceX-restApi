<template>
    <div class="landpadsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2016/03/09/09/15/rocket-1245696_960_720.jpg'"
        :header ="'Launches'"
        :description="'Launches - Информация о запусках SpaceX. '" />
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