<template>
    <div class="header">
        <div class="container">
            <div :class="['header-inner', {'header-inner-mobile':mobile}]">
                <div class="logo" @click="$router.push({name:'main'})">
                    SpaceX-Api
                </div>
                <div :class="['nav', {'mobile':mobile}]">
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'description'}); toggleMobile()">{{getLocalCategory.description}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'missions'}); toggleMobile() ">{{getLocalCategory.missions}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'launches'}); toggleMobile()">{{getLocalCategory.launches}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'rockets'}); toggleMobile()">{{getLocalCategory.rockets}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'capsules'}); toggleMobile()">{{getLocalCategory.capsules}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'dragons'}); toggleMobile()">{{getLocalCategory.dragons}}</button>
                        <button :class="['nav-item', {'nav-item-mobile':mobile}]" @click="$router.push({name:'landpads'}); toggleMobile()">{{getLocalCategory.landpads}}</button>
                        <button class="lang" @click="changeLocal">{{getLocalLang}}</button>
                        <div :class="['burger', {'burger-mobile':mobile}]">                                                        
                            <input type="checkbox" id="checkbox" class="mobile-menu__checkbox" v-model="mobile">
                            <label for="checkbox" class="mobile-menu__btn">
                                <div class="mobile-menu__icon"></div>
                            </label>
                        </div>
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
        toggleMobile: function(){
            this.mobile = !this.mobile;
        },
        changeLocal: function(){
            this.$store.dispatch('changeLocalLang')
        }
    }
}
</script>
<style scoped>
    .mobile-menu__checkbox {
        display: none;
    }
    .burger{
        position: relative;
    }
    .burger-mobile{
        left:calc(100% - 30px) ;
        position: absolute;
    }
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
    

    @media (max-width: 1070px) {
        .nav-item{
            margin-left: 15px;
        }
    }

    @media (max-width: 891px) {
        .nav-item{
            margin-left: 10px;
        }
    }

    @media (max-width: 768px) {
        
        .burger{
            display: flex;
            align-items: center;
        }
        .nav-item{
            text-transform: uppercase;
            padding-left: 30px ;
            font-size: 16px;
            display: none;
        }
        .nav-item-mobile{
            display: block;
        }
        .header-inner-mobile{
            padding: 0;
        }
        .mobile{
            padding: 30px 0px;
            background-color: #2B04E8;
            height: 100vh;
            width: 100%;
            position: fixed;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
            z-index: 10;
        }
        /* burger */
        .mobile-menu__icon {
        display: block;
        position: relative;
        background: rgba(255, 255, 255, 1);
        width: 30px;
        height: 3px;
        transition: 0.4s;
        }
        .mobile-menu__icon::after, .mobile-menu__icon::before {
        content: "";
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 1);
        width: 100%;
        height: 3px;
        transition: 0.4s;
        }
        .mobile-menu__icon::after {
        top: -10px;
        }
        .mobile-menu__icon::before {
        top: 10px;
        } 

        .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon {
        background: transparent;
        }
        .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before, .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
        top: 0;
        }
        .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        }
        .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        }

    }

</style>