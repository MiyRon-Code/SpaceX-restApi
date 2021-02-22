//licence Apache 2.0

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default   new Vuex.Store({

  state: {
    capsules: null,
    capsulesPast: null,
    capsulesUpcoming: null,
    dragons: null,
    landpads: null,
    launches: null,

    //loader
    loader: false
  },
  actions: {
    //capsules
    fetchCapsulesAll(ctx){
        axios.get('https://api.spacex.land/rest/capsules')
        .then(function (response) {
            // handle success
            ctx.commit('updateCapsules',response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },

    fetchCapsulesPast(ctx){
      axios.get('https://api.spacex.land/rest/capsules-past')
      .then(function (response) {
          // handle success
          ctx.commit('updateCapsulesPast',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
    
    fetchCapsulesUpcoming(ctx){
      axios.get('https://api.spacex.land/rest/capsules-upcoming')
      .then(function (response) {
          // handle success
          ctx.commit('updateCapsulesUpcoming',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },



    //dragons
    fetchDragonsAll(ctx){
      axios.get('https://api.spacex.land/rest/dragons')
      .then(function (response) {
          // handle success
          ctx.commit('updateDragons',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },


      

    //landpads
    fetchLandpadsAll(ctx){
      axios.get('https://api.spacex.land/rest/landpads')
      .then(function (response) {
          // handle success
          ctx.commit('updateLandpads',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },

    //launches
    fetchLaunchesAll(ctx){
      axios.get('https://api.spacex.land/rest/launches')
      .then(function (response) {
          // handle success
          ctx.commit('updateLaunches',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })


  },

 
  },
  mutations: {
    
    


    //capsules Update
    updateCapsules(state, capsules){
        state.capsules = capsules;
    },
    updateCapsulesPast(state, capsules){
      state.capsulesPast = capsules;
    },
    updateCapsulesUpcoming(state, capsules){
      state.capsulesUpcoming = capsules;
    },


    //dragons Update
    updateDragons(state, dragons){
      state.dragons = dragons;
    },

    //landpads
    updateLandpads(state, landpads){
      state.landpads = landpads;
    },

    //launches
    updateLaunches(state, launches){
      state.launches = launches;
    },
    
  },
  getters: {
    //launches get
    getLoaderStatus: state => {
      return  state.loader
    },

    //capsules get
    getCapsules: state => {
        return  state.capsules
    },
    getPastCapsules: state => {
      return  state.capsulesPast
    },
    getUpcomingCapsules: state => {
      return  state.capsulesUpcoming
    },

    //dragons get
    getDragons: state => {
      return  state.dragons
    },

    //landpads get
    getLandpads: state => {
      return  state.landpads
    },


    //launches get
    getLaunches: state => {
      return  state.launches
    },
  },
  modules: {

  },
});