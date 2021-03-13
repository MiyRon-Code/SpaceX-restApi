<template>
    <div class="rocketsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/36/satellite-693204_960_720.jpg'"
        :header ="`${getLocalCategory.rockets}`"
        :description="`${getLocalDescription.rockets}`" />
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