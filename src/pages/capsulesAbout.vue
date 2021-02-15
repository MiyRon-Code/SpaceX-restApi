<template>
    <div class="capsulesAbout">
        <About 
        :impPath="'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/10/starship.jpg'"
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