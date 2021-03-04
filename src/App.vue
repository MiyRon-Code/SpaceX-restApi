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
  }
  .container{
    width: 1100px;
    margin:  0 auto;
    overflow: hidden;
    height: 100%;
  }
  *{
    font-family: 'Lexend Giga', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }

</style>
