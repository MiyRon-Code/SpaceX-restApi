<template>
    <div class="footer">
        <div class="container">
            <div class="footer-inner">
            <div class="logo" @click="$router.push({name:'main'})">
                SpaceX-Api
            </div>
            <ul class="footer-list">
                <h5>Контакты SpaceX</h5>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.twitter}`" target="blank">SpaceX Twitter</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.flickr}`" target="blank">Flickr</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.website}`" target="blank">official website</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.elon_twitter}`" target="blank">Elon Twitter</a></li>
            </ul>
            <ul class="footer-list">
                <h5>Навигация</h5>
                <li class="footer-list-item" @click="$router.push({name:'description'})">description</li>
                <li class="footer-list-item" @click="$router.push({name:'launches'})">launches</li>
                <li class="footer-list-item" @click="$router.push({name:'rockets'})">rockets</li>
                <li class="footer-list-item" @click="$router.push({name:'capsules'})">capsules</li>
                <li class="footer-list-item" @click="$router.push({name:'dragons'})">dragons</li>
                <li class="footer-list-item" @click="$router.push({name:'landpads'})">landpads</li>
            </ul>
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
    h5{
        font-size: 20px;
    }
    .logo{
        transition: 1s;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .logo:hover{
        font-weight: 900;
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
    .footer-list-item a{
        text-decoration: none;
        color: white;
    }
</style>