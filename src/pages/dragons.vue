<template>
    <div class="dragon">
        <div class="container">
            <div class="dragonst-inner">
                <h3>{{getLocalCategory.dragons}}</h3>
                <Menu :mainRoute="'dragons'" :routes="['dragons-all']" :names="[`${getLocalHelpers.all}`]" />
                <router-view> </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '@/components/menu.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        Menu,
    },
    computed : {
        ...mapGetters(['getLocalCategory','getLocalHelpers']),
    },
}

</script>