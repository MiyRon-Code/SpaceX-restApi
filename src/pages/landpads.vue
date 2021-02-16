<template>
    <div class="landpads">
        <div class="container">
            <div class="landpads-inner">
                <h3>landpads</h3>
                <Menu :mainRoute="'landpads'" :routes="['landpads-all']" :names="['все']" />
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