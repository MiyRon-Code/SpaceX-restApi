<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                <h3>{{getLocalCategory.capsules}}</h3>
                <Menu :mainRoute="'capsules'" :routes="['capsules-all','capsules-past','capsules-upcoming']" :names="[`${getLocalHelpers.all}`,`${getLocalHelpers.past}`,`${getLocalHelpers.upcoming}`]" />
                <router-view> </router-view>
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    import Menu from '@/components/menu.vue'

    

    export default{
        data(){
            return{
               activeButton:-1
            }
        },
        components:{
           Menu,
        },
        computed : {
            ...mapGetters(['getCapsules','getLocalCategory','getLocalHelpers']),
        },
        created(){
             console.log(this.$store.state)
        }
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}

</style>