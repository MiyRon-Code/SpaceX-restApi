<template>
    <div class="main">

        <div class="container">
                    <About 
                    :impPath="'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'"
                    :header ="'SpaceX-Api'"
                    :description="'Визуализация данных из SpaceX restApi '" />
        </div>
    </div>
</template>
<script>
import About from '@/components/about.vue'

export default {
    components:{
        About,
    },

created(){
    }    

}
</script>
<style scoped>

</style>