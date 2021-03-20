<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <div class="logo" @click="$router.push({name:'main'})">
                    SpaceX-Api
                </div>
                <div class="nav mobile-nav">
                        <button class="nav-item" @click="$router.push({name:'description'})">{{getLocalCategory.description}}</button>
                        <button class="nav-item" @click="$router.push({name:'missions'})">{{getLocalCategory.missions}}</button>
                        <button class="nav-item" @click="$router.push({name:'launches'})">{{getLocalCategory.launches}}</button>
                        <button class="nav-item" @click="$router.push({name:'rockets'})">{{getLocalCategory.rockets}}</button>
                        <button class="nav-item" @click="$router.push({name:'capsules'})">{{getLocalCategory.capsules}}</button>
                        <button class="nav-item" @click="$router.push({name:'dragons'})">{{getLocalCategory.dragons}}</button>
                        <button class="nav-item" @click="$router.push({name:'landpads'})">{{getLocalCategory.landpads}}</button>
                        <button class="lang" @click="changeLocal">{{getLocalLang}}</button>
                        <button class="burger" @click="changeMobileMode">B</button>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data: function(){
        return{
            mobile: false
        }
    },
    computed:{
        ...mapGetters(['getLocalCategory']),
        ...mapGetters(['getLocalLang'])
    },
    methods:{
        changeMobileMode: function(){
            this.mobile = !this.mobile;
        },
        changeLocal: function(){
            this.$store.dispatch('changeLocalLang')
        }
    }
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color: white;
    }
    .header{
        background: linear-gradient(80deg, #2B04E8, rgb(137, 64, 255)) ;
        color:white;
    }
    .header-inner{
        padding: 15px 0px;
        display: flex;
        justify-content: space-between
    }
    .logo{
        transition: 1s;
        font-weight: 900;
        cursor: pointer;
    }
   
    .nav{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    .nav-item{
        display: block;
        margin-left: 30px;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 15px;
        color: white;
    }
    .mobile-nav{
        width: 100%;
        display: none;
        z-index: 10;
    }
    .lang{
        transition: .5s;
        cursor: pointer;
        margin: 0px 15px;
        background: transparent;
        border: 1px solid white;
        color:white;
        border-radius: 5px;
    }
    .lang:hover{
        background-color: white;
        color:rgb(137, 64, 255);
    }
    .nav-item::after{
        content: '';
        position: absolute;
        top:25px;
        left: 0;
        width: 100%;
        height: 4px;
        transition: .5s;
    }
    .nav-item:hover::after{
        top:30px;
        background-color: white;
    }



@media (max-width: 768px) {
    .nav{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: blue;
        height: 100vh;
        position: absolute;   
    }
    .logo{
        font-size:  16px;
    }
    .nav-item{
        text-transform: uppercase;
        font-size: 23px;
    }
}


@media (max-width: 875px) {
    .nav-item{
        margin-left: 10px;
        font-size: 13px;
    }
}

@media (max-width: 1170px) {
    .logo{
        font-size:  13px;
    }
    .nav-item{
        margin-left: 20px;
    }
}

</style>