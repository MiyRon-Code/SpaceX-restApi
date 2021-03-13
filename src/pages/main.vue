<template>
    <div class="main" >
        <div class="main-iiner">
            <portal-target name="destination"></portal-target>
        <div class="container">
        <div class="slider"></div>
          <VueSlickCarousel v-bind="firstCarousel" v-on:click="deleted">
            <div class="slide">
                <div class="info-item">
                    <span class="category">Генеральный директор компании (CEO)</span>
                    <span class="category-info">{{getAboutCompany.data.ceo}}</span>
                </div>    
            </div>    
            <div class="slide">
                <div class="info-item">
                    <span class="category">Главный операционный директор (COO)</span>
                    <span class="category-info">{{getAboutCompany.data.coo}}</span>
                </div>
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Технический директор (CTO)</span>
                    <span class="category-info">{{getAboutCompany.data.cto}}</span>
                </div>
            </div> 
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="secondCarousel">
            <div class="slide">
                <div class="info-item">
                    <span class="category">Штаб Квартира</span>
                    <span class="category-info">{{getAboutCompany.data.headquarters.state}}, {{getAboutCompany.data.headquarters.city}}, {{getAboutCompany.data.headquarters.address}}</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Количество сотрудников</span>
                    <span class="category-info">{{getAboutCompany.data.employees}} человек</span>
                </div>    
            </div>  
             <div class="slide">
                <div class="info-item">
                    <span class="category">Компания основана в</span>
                    <span class="category-info">{{getAboutCompany.data.founded}} году</span>
                </div>    
            </div>  
            <div class="slide">
                <div class="info-item">
                    <span class="category">Основатель</span>
                    <span class="category-info">{{getAboutCompany.data.founder}}</span>
                </div>    
            </div>    
          </VueSlickCarousel>
        </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'


 
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import * as THREE from 'three';
import  {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import  {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'

export default {
    components:{
        VueSlickCarousel,
    },

    mounted() {
        this.$store.dispatch('fetchAboutCompany');
    },
    methods: {
        deleted: function(){
            document.body.removeChild(this.container)
        },
        onWindowResize: function(camera, renderer){
            alert("resize")
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
    },
     computed : {
        ...mapGetters(['getAboutCompany','getLocalDescription']),
    },
    data (){
            return{
                container : null,
                slider: false,
                firstCarousel:{
                    "infinite": true,
                    "speed": 900,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "autoplay":true,
                    "arrows":false,
            },
            secondCarousel:{
                    "infinite": true,
                    "speed": 1000,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "autoplay":true,
                    "arrows":false,
            }
        }
    },
beforeDestroy(){
    this.deleted()
},
created(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer( {alpha: true});
        renderer.setSize( window.innerWidth-17, window.innerHeight);
        
       

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.autoRotate=true;
        controls.minDistance = 12;
        controls.maxDistance = 72;
    this.container = document.createElement('div')
    this.container.classList.add('canvas-container')
    renderer.domElement.classList.add('mainCanvas')
    //  <div class="about-preview-info">
    //                     <h1 class="about-header">{{header}}</h1>
    //                     <p class="about-desc">{{description}}</p>
    // </div>
    let headerWrapper = document.createElement('div')
    let header = document.createElement('h1')
    let description = document.createElement('p')
    headerWrapper.classList.add('about-preview-info')
    header.classList.add('about-header')
    description.classList.add('about-desc')
    header.innerHTML="UI SpaceX-Api"
    description.innerHTML=`${this.getLocalDescription.main}`
    headerWrapper.appendChild(header); 
    headerWrapper.appendChild(description);
    this.container.appendChild(headerWrapper) 
    this.container.appendChild(renderer.domElement)
    document.body.appendChild(this.container)
    
    
    const loader = new THREE.TextureLoader();
    let rocketMaterial = new THREE.MeshBasicMaterial({color: 0xffff00,wireframe:true})
    loader.load('/texture/images/FalconTexture.png', (texture) => {
        rocketMaterial = new THREE.MeshBasicMaterial({
        map: texture,
    }); 
    })

    const objLoader = new OBJLoader();
    objLoader.load('/models/Falcon.obj', (root) => {
    root.name="rocket"
    root.material = rocketMaterial;
    console.log(root);
    root.position.x =120;
    root.position.y =0;
    root.position.z = 120;
    root.rotation.x = -Math.PI / 2;
    scene.add(root);
    });
    


    

    

        
        const light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set( 0, 0, 50 );
        scene.add( light );

        const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
        light2.position.set( 0, 50, 50 );
        scene.add( light2 );


        const light3 = new THREE.PointLight( 0xffffff, 1, 100 );
        light3.position.set( 0, -50, 50 );
        scene.add( light3 );

        const light4 = new THREE.PointLight( 0xffffff, 1, 100 );
        light4.position.set( 0, 150, 50 );
        scene.add( light4 );


        //
        const light5 = new THREE.PointLight( 0xffffff, 1, 100 );
        light5.position.set( 0, 0, -50 );
        scene.add( light5 );

        const light6 = new THREE.PointLight( 0xffffff, 1, 100 );
        light6.position.set( 0, 50, -50 );
        scene.add( light6 );


        const light7 = new THREE.PointLight( 0xffffff, 1, 100 );
        light7.position.set( 0, -50, -50 );
        scene.add( light7 );

        const light8 = new THREE.PointLight( 0xffffff, 1, 100 );
        light8.position.set( 0, 150, -50 );
        scene.add( light8 );

        //

        const light9 = new THREE.PointLight( 0xffffff, 2, 100 );
        light9.position.set( 90, 0, 0 );
        scene.add( light9 );

        const light10 = new THREE.PointLight( 0xffffff, 2, 100 );
        light10.position.set( -90, 0, 0 );
        scene.add( light10 );

        window.addEventListener( 'resize', ()=>{onWindowResize()});


        renderer.setClearColor(0x2B04E8, 1)
       
        camera.position.z = 1;
        camera.position.y = 150;
        function onWindowResize(){

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        
        function animate() {
                
            requestAnimationFrame( animate );
            controls.update();
            renderer.render( scene, camera );
        }
        animate();


        
    }    

}
</script>
<style>
::-webkit-scrollbar {
    width: 12px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
    background-color:#143861;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color:  rgba(137, 64, 255,.5);
    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
    background-color:  rgba(137, 64, 255,1);
}

.info-item{
    margin: 6px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center

}
.category{
    color: rgb(3, 36, 75);
    font-size: 13px;
    font-weight: 600;
}
.category-info{
    font-size: 13px;
}
.about-preview{
  width: 100%;
  height: 100vh;
  transition: 1s;
  display: flex;
}
.about-preview-img{
    object-fit: cover;
    width: 50%;
    height: 100vh;
    transition: 1s;
}
.about-preview:hover .about-preview-img{
  width: 100%;
  height: 100vh;
}


.about-preview-info{
    position: absolute;
    top: 35%;
    left: 55%;
}
.about-header{
    padding: 0px 15px;
    font-size: 55px;
    /*screen */
    mix-blend-mode:lighten;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
    color:rgba(0, 0, 0);;
}
.about-desc{
    transition: 3s;
    font-size: 16px;
    line-height: 17px;
    padding: 15px;
    width: 400px;
    mix-blend-mode:screen;
    background-blend-mode:multiply ;
    background-color: rgb(0, 0, 0);
    color:white
}

</style>