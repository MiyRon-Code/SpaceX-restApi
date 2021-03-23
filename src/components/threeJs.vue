<template>
    <div class="threeJs">
        <div class="controll" v-show="controll" >
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
            <button class="controls-button" id="prev" title="previous">
                <img src="@/assets/icons/left-arrow.svg" alt="" class="ico">
            </button>
            <button class="controls-button" id="next" title="next">
                <img src="@/assets/icons/right-arrow.svg" alt="" class="ico">
            </button>
            <button class="controls-button" id="lock" title="block control">
                <img src="@/assets/icons/block.svg" alt="" class="ico" @click="toggleControll">
            </button>
        </div>
        <canvas id="main-renderer"></canvas>
       
    </div>
</template>
<script>
import * as THREE from 'three';
import  {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import  {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'
import {mapGetters} from 'vuex'
export default {
    data: function(){
        return{
            controll: true
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
            alert("resize")
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
    },
    beforeDestroy(){
        this.deleted()
    },
    async created(){
        await this.$store.dispatch('createScene')
        const scene = this.$store.state.scene;
        console.log("======================")
        console.log(scene)
        console.log("======================")
        const camera = new THREE.PerspectiveCamera( 75, window.screen.width / window.innerHeight, 0.1, 1000 );
        let mycanvas = await  document.getElementById('main-renderer')
        console.log(mycanvas)
        const renderer = new THREE.WebGLRenderer( {alpha: true, canvas: mycanvas});
        renderer.setSize( window.screen.width - 1, window.innerHeight);
        
       

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.autoRotate=true;
        controls.minDistance = 12;
        controls.maxDistance = 72;


    
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

            camera.aspect = window.screen.width / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.screen.width-24, window.innerHeight );
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
.canvas-wrapper{
    position: relative;
}
.active-controll{
    position: relative;
}
#prev{
    position: absolute;
    animation: unset;
    transform: translateY( calc(50vh - 40px) );
}
#next{
    position: absolute;
    animation: unset;
    transform: translate( calc(100vw - 70px), calc(50vh - 40px));
}
#lock
{
    position: absolute;
    animation: unset;
    transform: translate( calc(50vw - 40px), calc(100vh - 100px));
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