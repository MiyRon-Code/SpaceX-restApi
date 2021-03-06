<template>
    <div class="main" >
        <div class="main-iiner">
            <portal-target name="destination"></portal-target>
        <div class="container">
          <VueSlickCarousel v-bind="firstCarousel" v-on:click="deleted" class="slider">
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
            alert("hello")
            document.body.removeChild(this.container)
        }
    },
     computed : {
        ...mapGetters(['getAboutCompany']),
        // Другие вычисляемые свойства
        
    },
    data (){
            return{
                container : null,
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
created(){
    //потом сделаем 3д плюшки 
        
// setTimeout(()=>{
//     this.deleted()
// },3000)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer( {alpha: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        
       

        const controls = new OrbitControls( camera, renderer.domElement );

     this.container = document.createElement('div')
     this.container.classList.add('canvas-container')
     renderer.domElement.classList.add('mainCanvas')
     this.container.appendChild(renderer.domElement)
    document.body.appendChild(this.container)
    
    let rocketMaterial = new THREE.MeshPhysicalMaterial({color: 0xfe00ff,clearcoat:0.5})

    

    const objLoader = new OBJLoader();
    objLoader.load('/Falcon.obj', (root) => {
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

    

        const geometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshPhysicalMaterial({color: 0xfe00ff,clearcoat:0.5})
        const cube = new THREE.Mesh(geometry,material)
        scene.add(cube)
        renderer.setClearColor(0x0000ff, 1)
       
        camera.position.z = 1;
        camera.position.y = 150;
        controls.update();
        
        function animate() {
            
        cube.rotation.y += 0.002
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
      
        }
        animate();
        
    }    

}
</script>
<style>
.main{
    background-color: blue;
}
.slider{
    position: absolute;
    opacity: .5;
}
.info-item{
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center

}
.category{
    color: rgb(3, 36, 75);
    font-size: 16px;
    font-weight: 600;
}
</style>