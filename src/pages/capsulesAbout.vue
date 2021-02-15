<template>
    <div class="capsulesAbout">
        <About 
        :impPath="'https://i.pinimg.com/originals/6f/a5/49/6fa54949658d7ae6893898074bfa5d1d.jpg'"
        :header ="'CrewDragon'"
        :description="'Dragon 2 — американский многоразовый пилотируемый космический корабль компании SpaceX, разработанный по заказу НАСА'" />
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