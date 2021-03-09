<template>
    <div class="main">
        <div class="container">
            <About 
            :impPath="'https://cdn.pixabay.com/photo/2015/03/26/18/35/satellite-693194_960_720.jpg'"
            :header ="'Description'"
            :description="'Description - описание Json данных каждого запроса. '" 
            
            />
            <h3>Информация о компании</h3>
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/info'"
            />
            <h3>Запуски</h3>
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/launchpads'"
            />
            <h3>Капсулы</h3>
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/capsules'"
            />
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/capsules/past'"
            />
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/capsules/upcoming'"
            />
            <h3>Ракеты</h3>
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/rockets'"
            />
            <h3>Crew Dragon</h3>
            <jsonDescription 
                :data="getLaunches.data[0]"
                :link="'https://api.spacexdata.com/v3/dragons'"
            />
        </div>
      
        
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
    data (){
        return{
            
        }
    },

created(){
    
},
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