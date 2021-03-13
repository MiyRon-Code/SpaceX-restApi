<template>
    <div class="dragonsAll">
        <div class="container">
            <div class="dragonsAll-inner">
                 <h5>{{getLocalHelpers.total}} {{getLocalCategory.dragons}}: {{getDragons.data.length}}</h5>
                 <Dragon v-for="(dragon,index) in getDragons.data" :key="index" :data="dragon"/>
            </div>
        </div>
    </div>
</template>

<script> 
    import {mapGetters} from 'vuex'

    /*components*/
    import Dragon from '@/components/dragon.vue'

    export default{
        components:{
            Dragon
        },
        mounted(){
          this.$store.dispatch('fetchDragonsAll');
        },
        computed:{
         ...mapGetters(['getDragons','getLocalCategory','getLocalHelpers']),
        },
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}
</style>