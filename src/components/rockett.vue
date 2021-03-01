<template>
    <div class="rocket">
        <div class="rocket-preview">
            <div class="flag">
                <img src="@/assets/flags/United States.png"  alt="" class="flag-img">
            </div>
            <img src="@/assets/falcon.jpg" alt="" class="rocket-preview-img">
            <h1 class="rocket-version">{{data.id}}</h1>
            <h5 class="rocket-desc">{{data.description}}</h5>
            
        </div>
        <div class="rocket-body" >
           
            <div :class="['rocket','id',{'active-rocket':data.active}]" >версия: {{data.id}} <span class="status"> <div class="isActive" v-show="data.active">АКТИВНАЯ!</div></span>       </div>
            <div class="rocket-body-slider">
                <div class="slider-wrapper">
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                    <div class="rocket-body-item"></div>
                </div>
                
            </div>
            
            <div class="buttons">
                <wikiButton
                    :link="data.wikipedia"
                />
            </div>
        </div>
    </div>
</template>
<script>
import wikiButton from '@/components/wikiButton.vue'

export default {
    components:{
        wikiButton,
    },
    props:{
        data: Object,
        preview: String
    },
}
</script>
<style scoped>
    .rocket{
        position: relative;
        display:flex;
    }
    .rocket-preview{
        width:300px;
        height: 500px;
        transition: 1s;
    }
    .rocket-preview:hover{
        width:550px;
        height: 500px;
        position: relative;
    }
    .rocket-preview:hover .flag{
        opacity: 1;
    }
    .rocket-preview:hover .rocket-version {
        display: block;
    }
    .rocket-preview:hover  .rocket-desc{
        display: block;
    }
    .rocket-preview:hover  ~ .rocket-body{
        display: none;
    }
    .rocket-preview-img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .rocket-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .flag{
        transition: .1s;
        opacity: 0;
        top: 10px;
        left:10px;
        position: absolute;
        height: 40px;
        width: 70px;
    }
    .flag-img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .rocket-version{
        display: none;
    }
    .rocket-version{
        position: absolute;
        z-index: 1;
        color: white;
        font-size: 30px;
        top: calc(50% - 30px);
        left: 70%;
        text-transform: uppercase;
        mix-blend-mode:lighten;
        background-blend-mode:multiply ;
        background-color: rgb(255, 255, 255);
        color:rgba(0, 0, 0);
    }
    .active-rocket{
        animation: active 2s infinite;
        background-color: rgb(155, 255, 169);
    }
    .id{
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }
    .isActive{
    margin: 0px 5px;
    }
    @keyframes  active {
        0%{
            background-color: rgb(155, 255, 169);
        }
        50%{
            background-color: rgb(134, 248, 149);
        }
        0%{
            background-color: rgb(155, 255, 169);
        }
    }
    .rocket-desc{
            display: none;
            padding: 5px;
            position: absolute;
            z-index: 1;
            color: white;
            top: calc(50% + 10px);
            left: 70%;
            width: 500px;
            background-color: black;
            color:white;
            line-height: 20px;
            mix-blend-mode:lighten;
    }
    .rocket-body-item{
        display: inline-block;
        margin: 5px;
        width: 150px;
        height: 250px;
        background-color: red;
    }
    .rocket-body-slider{
        position: relative;
    }
    .slider-wrapper{
        top: 50%;
        position: absolute;
    }
</style>