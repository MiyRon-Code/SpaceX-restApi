<template>
    <div class="mission">
        <div class="mission-header">
           <div>{{getLocalCard.name}}<span class="mission-name">{{data.mission_name}}</span></div>
           <div class="payload_ids">{{getLocalCard.totalVehicles}}<span class="mission-name">{{data.payload_ids.length}}</span></div>
        </div>
        <div class="mission-body">
            <wikiButton :link="data.wikipedia"/>
            <twitterButton :link="data.twitter"/>
            <websiteButton :link="data.website"/>
        </div>
    </div>
</template>
<script>
import wikiButton from '@/components/wikiButton.vue' 
import twitterButton from '@/components/twitterButton.vue' 
import websiteButton from '@/components/websiteButton.vue' 
import { mapGetters } from 'vuex'
export default {
    props:{
        data: Object
    },
    components:{
        wikiButton,
        twitterButton,
        websiteButton,
    },
    computed:{
        ...mapGetters(['getLocalCard'])
    }
}
</script>
<style scoped>
.mission{
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.mission-header{
    display: flex;
    justify-content: space-between;
   
}
.payload_ids{
    font-size: 100;
}
.mission-body{
    display: flex;
}
.mission-name{
    font-weight: 800;
    margin: 0px 10px;
}

@media (max-width: 480px){
    .mission-header{
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }
}
</style>