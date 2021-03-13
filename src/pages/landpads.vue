<template>
    <div class="landpads">
        <div class="container">
            <div class="landpads-inner">
                <h3>{{getLocalCategory.landpads}}</h3>
                <Menu :mainRoute="'landpads'" :routes="['landpads-all']" :names="[`${getLocalHelpers.all}`]" />
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