<template>
    <div class="capsulesAbout">
        <About 
        :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/36/spacecraft-693231_960_720.jpg'"
        :header ="'Capsules'"
        :description="'Capsules  — что-то'" />
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