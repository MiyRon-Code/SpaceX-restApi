<template>
  <div id="app">
    <Header/>
    <Loader v-show="getLoaderStatus" />
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
/*components*/
import Header from '@/components/header.vue'


import Loader from '@/components/loader.vue'


export default {
  name: 'App',

  components: {
    Header,
    Loader
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
  }
  .container{
    width: 1100px;
    margin:  0 auto;
    overflow: hidden;
  }
  *{
    font-family: 'Lexend Giga', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }

</style>
