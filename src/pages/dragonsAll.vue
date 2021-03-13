<template>
    <div class="dragonsAll" @click="check">
        <div class="container">
            <div class="dragonsAll-inner">
                 <h5>всего драконов: {{getDragons.data.length}}</h5>
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
        methods:{
            check: function(){
                alert()
                console.log(mapGetters(['getDragons']))
                console.log(this.getDragons)
                let test = eval('this.getDragons')
                console.log(test)
            }
        },
        components:{
            Dragon
        },
        mounted(){
          this.$store.dispatch('fetchDragonsAll');
        },
        computed:{
         ...mapGetters(['getDragons']),
        },
    }
</script>

<style  scoped>
h5{
    font-weight: 500;
}
</style>