<template>
  <div id="app">
    <Header/>
    <Loader v-show="getLoaderStatus" />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
/*components*/
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

import Loader from '@/components/loader.vue'


export default {
  name: 'App',

  components: {
    Header,
    Loader,
    Footer
  },
  computed : {
    ...mapGetters(['getLoaderStatus']),
    // Другие вычисляемые свойства
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga&family=Montserrat:wght@500;600;700&display=swap');
  body{
    margin: 0;
    position:relative; 
    min-height:100vh; 
    padding-bottom: 320px;
    width: 100vw;
    overflow: hidden;
  }
  .container{
    max-width: 1150px;
    margin:  0 auto;
    height: 100%;
  }
  *{
    font-family: 'Lexend Giga', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: 480px) {
  .container{
     max-width: 100%;
  }
}

</style>
