<template>
    <div class="rockets">
        <div class="container">
            <div class="rockets-inner">
                <h3>{{getLocalCategory.rockets}}</h3>
                <Menu :mainRoute="'rockets'" :routes="['rockets-all']" :names="[`${getLocalHelpers.all}`]" />
                <router-view> </router-view>
               
            </div>
        </div>
    </div>
</template>
<script>
import Menu from '@/components/menu.vue'
import { mapGetters } from 'vuex'
export default {
    components:{
        Menu,
    },
    computed:{
        ...mapGetters(['getLocalCategory','getLocalHelpers'])
    }
}

</script>