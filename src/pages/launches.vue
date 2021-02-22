<template>
    <div class="launches" :created="OnCreate" >
        <div class="container">
            <div class="launches-inner">
                <h3>launches</h3>
                <Menu :mainRoute="'launches'" :routes="['launches-all']" :names="['все']" />
              
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
        methods:{
            OnCreate: function(){
                alert("create")
            },
            onLogin () {
                alert('child component said login')
            }
        }
}

</script>