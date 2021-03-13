<template>
    <div class="launches" :created="OnCreate" >
        <div class="container">
            <div class="launches-inner">
                <h3>{{getLocalCategory.launches}}</h3>
                <Menu :mainRoute="'launches'" :routes="['launches-all','launches-upcoming']" :names="[`${getLocalHelpers.all}`,`${getLocalHelpers.upcoming}`]"/>
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
        methods:{
            OnCreate: function(){
                alert("create")
            },
            onLogin () {
                alert('child component said login')
            }
        },
        computed : {
            ...mapGetters(['getLocalCategory','getLocalHelpers']),
        },
}

</script>