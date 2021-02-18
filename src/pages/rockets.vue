<template>
    <div class="rockets">
        <div class="container">
            <div class="rockets-inner">
                <h3>rockets</h3>
                <Menu :mainRoute="'rockets'" :routes="['rockets-all']" :names="['все ракеты']" />
                <router-view> </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '@/components/menu.vue'
export default {
     components:{
           Menu,
        },
}

</script>