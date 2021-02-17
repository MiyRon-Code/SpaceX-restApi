<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>

/*components*/
import Header from '@/components/header.vue'





export default {
  name: 'App',

  components: {
    Header,

  }
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
