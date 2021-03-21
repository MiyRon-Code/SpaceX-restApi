<template>
    <div class="footer" v-if="getAboutCompany">
        <div class="container">
            <div class="footer-inner">
            <button class="logo" @click="$router.push({name:'main'})">
                  <span>SpaceX-Api</span>
            </button>
            <ul class="footer-list">
                <h5>{{getLocalHelpers.contacts}} SpaceX</h5>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.twitter}`" target="blank">SpaceX Twitter</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.flickr}`" target="blank">Flickr</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.website}`" target="blank">official website</a></li>
                <li class="footer-list-item"><a :href="`${getAboutCompany.data.links.elon_twitter}`" target="blank">Elon Twitter</a></li>
            </ul>
            <div class="footer-list-btn" id="navigation">
                <h5>{{getLocalCategory.navigation}}</h5>
                <button class="footer-list-item-btn" @click="$router.push({name:'description'})" >{{getLocalCategory.description}}</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'launches'})" >{{getLocalCategory.launches}}</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'rockets'})">{{getLocalCategory.rockets}}</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'capsules'})">{{getLocalCategory.capsules}}</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'dragons'})">{{getLocalCategory.dragons}}</button>
                <button class="footer-list-item-btn" @click="$router.push({name:'landpads'})">{{getLocalCategory.landpads}}</button>
            </div>
             <ul class="footer-list">
                <h5>{{getLocalCategory.sourse}}</h5>
                <li class="footer-list-item"><a href="https://github.com/MiyRon-Code/SpaceX-restApi" target="blank">{{getLocalCategory.repository}}</a></li>
                <li class="footer-list-item"><a href="https://github.com/MiyRon-Code/" target="blank">{{getLocalCategory.myGitHub}}</a></li>
                <li class="footer-list-item"><a href="https://github.com/MiyRon-Code/SpaceX-restApi/blob/master/LICENSE" target="blank">{{getLocalCategory.license}}</a></li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    async mounted() {
          await  this.$store.dispatch('fetchAboutCompany');
    },
    computed : {
        ...mapGetters(['getAboutCompany','getLocalCategory','getLocalHelpers']),
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

    @media(max-width: 480px)  {
        .logo{
            padding: 0;
        }
        .footer{
            background-color: black;
            height: 440px;
        }
        .footer-inner{
            padding:0px 40px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        #navigation{
            display: none;
        }
    }
</style>