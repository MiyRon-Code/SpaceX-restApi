//licence Apache 2.0

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default   new Vuex.Store({

  state: {
    aboutCompany: null,
    //данные
    capsules: null,
    capsulesPast: null,
    capsulesUpcoming: null,
    dragons: null,
    landpads: null,
    launches: null,
    rockets:null,

    //loader
    loader: false
  },
  actions: {
    //aboutCompany
    fetchAboutCompany(ctx){
      axios.get('https://api.spacexdata.com/v3/info')
      .then(function (response) {
          // handle success
          ctx.commit('updateAboutCompany',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
    //capsules
    fetchCapsulesAll(ctx){
        axios.get('https://api.spacexdata.com/v3/capsules')
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
      axios.get('https://api.spacexdata.com/v3/capsules/past')
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
      axios.get('https://api.spacexdata.com/v3/capsules/upcoming')
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
      axios.get('https://api.spacexdata.com/v3/dragons')
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
      axios.get('https://api.spacexdata.com/v3/launchpads')
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
      axios.get('https://api.spacexdata.com/v3/launches')
      .then(function (response) {
          // handle success
          ctx.commit('updateLaunches',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
    fetchLaunchesPast(ctx){
      axios.get('https://api.spacexdata.com/v3/launches/past')
      .then(function (response) {
          // handle success
          ctx.commit('updateLaunchesUpcoming',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
    fetchLaunchesUpcoming(ctx){
      axios.get('https://api.spacexdata.com/v3/launches/upcoming')
      .then(function (response) {
          // handle success
          ctx.commit('updateLaunchesUpcoming',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },

    //rockets
    fetchRockets(ctx){
      axios.get('https://api.spacexdata.com/v3/rockets')
      .then(function (response) {
          // handle success
          ctx.commit('updateRockets',response)
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
    },
  },
  mutations: {
    
    updateAboutCompany(state, info){
      state.aboutCompany = info;
  },


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
    
    updateLaunchesUpcoming(state, launches){
      state.launches = launches;
    },
    
    //rockets
    updateRockets(state, rockets){
      state.rockets = rockets;
    },
  },
  getters: {
    //aboutCompany get
    getAboutCompany: state => {
      return  state.aboutCompany
    },

    //loaderStatus get
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

    getLaunchesUpcoming: state => {
      return  state.launches
    },

    //Rockets get 
    getRockets: state => {
      return  state.rockets
    },
  },
  modules: {

  },
});