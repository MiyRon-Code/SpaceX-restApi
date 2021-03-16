<template>
    <div class="missionsAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2015/11/07/11/03/satellite-1030782_960_720.jpg'"
        :header ="`${getLocalCategory.missions}`"
        :description="`${getLocalDescription.missions}`" />
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
        ...mapGetters(['getLocalCategory','getLocalDescription'])
    }
}
</script>