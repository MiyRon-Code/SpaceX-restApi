<template>
    <div class="capsules">
        <div class="container">
            <div class="capsules-inner">
                <h3>капсулы</h3>
                <Menu :mainRoute="'capsules'" :routes="['capsules-all','capsules-past','capsules-upcoming']" :names="['все','запущеные','будущие']" />
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
        mounted() {
          this.$store.dispatch('fetchCapsulesAll');
        },
        computed : {
  ...mapGetters(['getCapsules']),
  // Другие вычисляемые свойства
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