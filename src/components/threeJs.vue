<template>
    <div class="threeJs">
        <div class="controll" v-show="controll" id="test-controll" >
            <div class="container">
                <div class="controll-inner">
                    <div class="about-preview-info">
                        <h1 class="about-header">UI SpaceX Api</h1>
                        <p class="about-desc">{{getLocalDescription.main}}</p>
                    </div>    
                    <button class="controls-button" title="enable control">
                        <img src="@/assets/icons/cross-arrows.svg" alt="" class="ico" @click="toggleControll">
                    </button>
                </div>
            </div>
        </div>
        <div class="active-controll" v-show="!controll">
            <button class="controls-button" id="prev" title="previous" @click="loadPrevModel">
                <img src="@/assets/icons/left-arrow.svg" alt="" class="ico">
            </button>
            <button class="controls-button" id="next" title="next" @click="loadNextModel">
                <img src="@/assets/icons/right-arrow.svg" alt="" class="ico">
            </button>
            <button class="controls-button" id="lock" title="block control">
                <img src="@/assets/icons/block.svg" alt="" class="ico" @click="toggleControll">
            </button>
            <p class="model-name">{{models[this.modelIndex].name}}</p>
        </div>
        <canvas id="main-renderer"></canvas>
       
    </div>
</template>
<script>
import * as THREE from 'three';
import  {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {mapGetters} from 'vuex'
export default {
    data: function(){
        return{
            controll: true,
            objLoader : new GLTFLoader(),
            modelIndex: 0,
            models:[
                {
                    name: 'Falcon Heavy',
                    path: '/models/falconheavy.glb',
                    rotate:{
                        x:0,
                        y:Math.PI,
                        z:0
                    },
                    scale: 1
                },
                {
                    name: 'Crew Dragon',
                    path: '/models/crewdragon.glb',
                    rotate:{
                        x:0,
                        y:0,
                        z:0
                    },
                    scale:0.4
                },
                {
                    name: 'Starship',
                    path: '/models/starship.glb',
                    rotate:{
                        x:0,
                        y:0,
                        z:0
                    },
                    scale:5
                },
            ]
        }
    },
     computed : {
        ...mapGetters(['getAboutCompany','getLocalDescription','getLocalCard',"getScene"]),
    },
    mounted() {
        this.$store.dispatch('createScene');
        this.$store.dispatch('fetchAboutCompany');
    },
    methods: {
        toggleControll: function (){
            this.controll = !this.controll
        },
        deleted: function(){
            document.body.removeChild(this.container);
            this.$store.dispatch('plsClearScene');
        },
        onWindowResize: function(camera, renderer){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.screen.width - 17, window.innerHeight);
        },
        deleteModel: function(){
            var model = this.$store.state.scene.getObjectByName("model");
            this.$store.state.scene.remove( model );
        },
        loadModel: function(){
            this.deleteModel();
            this.objLoader.load( this.models[this.modelIndex].path,  ( model )=>{
              let object = model.scene;
              object.name = "model";
              console.log(model)
              object.rotation.x += Math.PI;
              object.rotation.y += Math.PI + Math.PI/2;
              object.scale.set(this.models[this.modelIndex].scale,this.models[this.modelIndex].scale,this.models[this.modelIndex].scale)
              
              this.$store.state.scene.add(object);
            }, undefined, function ( error ) {
                console.error( error );
            });
        },
        loadNextModel: function(){
            if(this.modelIndex<this.models.length-1){
                this.modelIndex++;
            }
            else{
                this.modelIndex=0;
            }
            this.loadModel();
        },
        loadPrevModel: function(){
            if(this.modelIndex>0){
                this.modelIndex--;
            }
            else{
                this.modelIndex=this.models.length-1;
            }
             this.loadModel();
        }
    },
    beforeDestroy(){
        this.deleted()
    },
    async created(){

        await this.$store.dispatch('createScene')
        const scene = this.$store.state.scene;
       
        //init camera       
        const camera = new THREE.PerspectiveCamera( 75, window.screen.width / window.innerHeight, 0.1, 1000 );
        camera.position.z = 1;
        camera.position.y = 150;
    
        window.addEventListener( 'resize', ()=>{onWindowResize()});
        //get myCanvas
        let mycanvas = await  document.getElementById('main-renderer')
      
        //init renderer 
        const renderer = new THREE.WebGLRenderer( {alpha: true, canvas: mycanvas});//bind renderer to my canvas
        renderer.setSize( window.screen.width - getScrollbarWidth(), window.innerHeight);
        renderer.setClearColor(0x2B04E8, 1)
        
        //init controls
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.autoRotate=true;
        controls.minDistance = 20;
        controls.maxDistance = 120;

        //init first model 
        this.loadModel();
        
        //init lights
        const globalLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
        scene.add( globalLight );

        const light = new THREE.PointLight( 0xffffff, 1.02, 100 );
        light.position.set( 0, 35, 0 );
        scene.add( light );

        const light2 = new THREE.PointLight( 0xffffff, 1.02, 100 );
        light2.position.set( 0, 35, -80 );
        scene.add( light2 );


        const light3 = new THREE.PointLight( 0xffffff, 1.02, 100 );
        light3.position.set( 0, 35, -80 );
        scene.add( light3 );

        const path = "/texture/";
        const format = '.png';
        const urls = [
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ];


        const reflectionCube = new THREE.CubeTextureLoader().load( urls );
        reflectionCube.encoding = THREE.sRGBEncoding;

        renderer.background = reflectionCube;
         
        function onWindowResize(){
            console.log('asdasd')
            camera.aspect = window.screen.width / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.screen.width-getScrollbarWidth(), window.innerHeight );
        }

        function animate() {        
            requestAnimationFrame( animate );
            controls.update();
            renderer.render( scene, camera );
        }
        function getScrollbarWidth() {
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.overflow = 'scroll'; 
            outer.style.msOverflowStyle = 'scrollbar'; 
            document.body.appendChild(outer);
            const inner = document.createElement('div');
            outer.appendChild(inner);
            const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
            outer.parentNode.removeChild(outer);
            return scrollbarWidth;
        }
        animate();
    }    
}
</script>

<style>
.canvas-wrapper{
    position: relative;
}
.active-controll{
    position: relative;
}
#main-renderer{
cursor:move;
}
#prev{
    position: absolute;
    animation: unset;
    transform: translateY( calc(50vh - 40px) );
}
#next{
    position: absolute;
    animation: unset;
    transform: translate( calc(100vw - 60px), calc(50vh - 40px));
}
#lock
{
    position: absolute;
    animation: unset;
    transform: translate( calc(50vw - 20px), calc(100vh - 100px));
}
.model-name{
    position: absolute;
    font-size: 30px;
    font-weight: 900;
    font-family: monospace;
    color:white;
    transform: translateY(calc(100vh - 120px));
    animation: fadein 1s;
}
.threeJs{
    position: relative;
}
@keyframes clickMe {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.3);
    }
    100%{
        transform: scale(1);
    }
}
@keyframes fadein {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.controls-button{
    cursor: pointer;
    position: relative;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 3px solid white;
    animation: 2s clickMe infinite;
    transition: .3s;
    display: flex;
    justify-content: center;
}
.controls-button:hover{
    animation: unset;
    border: 5px solid white;
}

.controls-button:focus{
    animation: unset;
    border: 5px solid white;
}

.ico{
    align-self: center;
    width: 80%;
    height: 80%;
}
.controll{
    height: 100%;
    width: 100%;
    position: absolute;
    min-height: 90vh;
}
.controll-inner{
    height: 100%;
    display: flex;
    flex-direction:  column;
    justify-content: space-around;
    align-items: flex-end;
}
.about-preview-info{
    padding-top: 100px;
}
.about-header{
    padding: 0px 15px;
    font-size: 55px;
    /*screen */
    mix-blend-mode:lighten;
    background-blend-mode:multiply ;
    background-color: rgb(255, 255, 255);
    color:rgba(0, 0, 0);
}
.about-desc{
    transition: 3s;
    font-size: 16px;
    line-height: 17px;
    padding: 15px;
    width: 100%;
    mix-blend-mode:screen;
    background-blend-mode:multiply ;
    background-color: rgb(0, 0, 0);
    color:white;
}
  @media (max-width: 1070px) {
    .about-header{
      font-size: 40px;
      width: 80%;
    }
    .about-desc {
       width: 80%;
    }
  }
    @media (max-width: 768px) {
    .about-header{
      font-size:35px;
      width: 80%;
    }
    .about-desc {
       width: 80%;
    }
  }
  @media (max-width: 480px) {
    .about-header{
        font-size: 22px;
        width: 80%;
    }
    .about-desc {
        font-size: 17px;
        width: 80%;
    }
  }

  @media (max-width: 320px) {
    .about-header{
        font-size: 22px;
        width: 80%;
    }
    .about-desc {
        font-size: 17px;
        width: 80%;
    }
  }



</style>