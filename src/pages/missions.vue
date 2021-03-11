<template>
    <div class="missions">
        <div class="container">
            <div class="missions-inner">
                <h3>Миссии</h3>
                <Menu :mainRoute="'missions'" :routes="['missions-all']" :names="['все']" />
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