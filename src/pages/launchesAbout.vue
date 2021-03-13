<template>
    <div class="landpadsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2016/03/09/09/15/rocket-1245696_960_720.jpg'"
        :header ="`${getLocalCategory.launches}`"
        :description="`${getLocalDescription.launches}`" />
    </div>
</template>

<script>
import About from '@/components/about.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        About
    },
    computed:{
        ...mapGetters(['getLocalCategory','getLocalDescription'])
    }
}
</script>