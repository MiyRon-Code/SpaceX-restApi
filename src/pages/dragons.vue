<template>
    <div class="dragon">
        <div class="container">
            <div class="dragonst-inner">
                <h3>crew dragons</h3>
                <Menu :mainRoute="'dragons'" :routes="['dragons-all']" :names="['все']" />
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