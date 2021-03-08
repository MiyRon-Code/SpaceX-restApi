<template>
    <div class="main">
        <div class="container">
            <About 
            :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/35/satellite-693194_960_720.jpg'"
            :header ="'Description'"
            :description="'Description - описание Json данных каждого запроса. '" />
        </div>
        {{getLaunches[0]}}
        <jsonDescription :data="getLaunches.data" />
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

/* components */
import About from '@/components/about.vue'
import jsonDescription from '@/components/jsonDescription.vue'

export default {
    components:{
        About,
        jsonDescription,
    },

created(){},
mounted() {
            this.$store.dispatch('fetchLaunchesAll');
            
        },
 computed : {
  ...mapGetters(['getLaunches']),
  // Другие вычисляемые свойства
   
},    


}
</script>
<style scoped>

</style>