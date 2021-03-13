<template>
    <div class="dragonsAbout">
        <About 
        :impPath="'https://i.pinimg.com/originals/6f/a5/49/6fa54949658d7ae6893898074bfa5d1d.jpg'"
        :header ="`${getLocalCategory.dragons}`"
        :description="'Dragon 2 — американский многоразовый пилотируемый космический корабль компании SpaceX, разработанный по заказу НАСА'" />
    </div>
</template>

<script>
import About from '@/components/about.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        About
    },
    computed : {
        ...mapGetters(['getLocalCategory']),
    },
}
</script>