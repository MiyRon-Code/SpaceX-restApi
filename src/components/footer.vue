<template>
    <div class="footer">
        <div class="container">
            <div class="footer-inner">
            <button class="logo" @click="$router.push({name:'main'})">
                  <span>SpaceX-Api</span>
            </button>
            <ul class="footer-list">
                <h5>Контакты SpaceX</h5>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.twitter}`" target="blank">SpaceX Twitter</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.flickr}`" target="blank">Flickr</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.website}`" target="blank">official website</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.elon_twitter}`" target="blank">Elon Twitter</a></li>
            </ul>
            <div class="footer-list-btn">
                <h5>Навигация</h5>
                <button class="footer-list-item-btn" @click="$router.push({name:'description'})" > description</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'launches'})" >launches</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'rockets'})"> rockets </button>
                <button class="footer-list-item-btn" @click="$router.push({name:'capsules'})"> capsules </button>
                <button class="footer-list-item-btn" @click="$router.push({name:'dragons'})"> dragons </button>
                <button class="footer-list-item-btn" @click="$router.push({name:'landpads'})"> landpads </button>
            </div>
             <ul class="footer-list">
                <h5>Иходники</h5>
                <li class="footer-list-item"><a href="https://github.com/MiyRon-Code/SpaceX-restApi" target="blank">репозиторий этого проекта на GitHub</a></li>
                <li class="footer-list-item"><a href="https://github.com/MiyRon-Code/" target="blank">мой GitHub</a></li>
                <li class="footer-list-item"><a href="">лицензия</a></li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    mounted() {
            this.$store.dispatch('fetchAboutCompany');
    },
     computed : {
        ...mapGetters(['getAboutCompany']),
        // Другие вычисляемые свойства
    },
}
</script>
<style  scoped>
    @keyframes logoAnim{
        0%{
            text-shadow: 1px 0px 0px white;    
        }
        50%{
            text-shadow: 1px 0px 4px white;
        }
        100%{
            text-shadow: 1px 0px 0px white;
        }
    }
    h5{
        font-size: 20px;
    }
    .logo{
        background-color: transparent;
        border: none;
        transition: 1s;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: white;
        outline: none;
    }
    .logo:hover{
        animation: logoAnim 2s infinite;
    }
    
    .logo:focus span{
        border: 1px solid white;
    }
    .logo:hover span{
        border: none
    }
    .footer{
        box-sizing: border-box;
        padding: 10px 0px;
        position: absolute; 
        bottom: 0; 
        color:white;
        height: 320px;
        width: 100%;
        background: linear-gradient(80deg, #2B04E8,rgb(137, 64, 255));
       
    }
    .footer-inner{
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .footer-list{
        display: block;
        font-weight: 100;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-list-item{
        background-color: transparent;
        border: none;
        position: relative;
        cursor: pointer;
        margin: 15px 0px;
        font-size: 14px;
    }
    .footer-list-item::before{
        content: '';
        transition: .3s;
        position: absolute;
        top: 2px;
        left: -14px;
        border: 7px solid transparent; border-left: 7px solid white;
        border-radius: 4px;
        opacity: 0;
    }
    .footer-list-item:hover::before{
        opacity: 1;
    }
    .footer-list-item:focus::before{
        opacity: 1;
    }
    .footer-list-btn{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-weight: 100;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .footer-list-item-btn{
        display: flex;
        justify-content: flex-start;
        background-color: transparent;
        border: none;
        position: relative;
        cursor: pointer;
        margin: 7px 0px;
        padding: 0px;
        font-size: 14px;
        height: fit-content;
        color: white;
    }

    .footer-list-item-btn::before{
        content: '';
        transition: .3s;
        position: absolute;
        top: 2px;
        left: -14px;
        border: 7px solid transparent; border-left: 7px solid white;
        border-radius: 4px;
        opacity: 0;
    }
    .footer-list-item-btn:hover::before{
        opacity: 1;
    }

    .footer-list-item-btn:focus::before{
        opacity: .5;
    }

    a{
        text-decoration: none;
        color: white;
    }
</style>