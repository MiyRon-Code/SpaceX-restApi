<template>
    <div class="missions">
        <div class="container">
            <div class="missions-inner">
                <h3>{{getLocalCategory.missions}}</h3>
                <Menu :mainRoute="'missions'" :routes="['missions-all']" :names="[`${getLocalHelpers.all}`]" />
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
    computed:{
        ...mapGetters(['getLocalCategory','getLocalHelpers'])
    }
}

</script>