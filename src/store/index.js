//licence Apache 2.0

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

import {russian,english} from   '../store/lang.js'

import * as THREE from 'three';

export default   new Vuex.Store({

  state: {
    scene:  new THREE.Scene(),

    //данные
    aboutCompany: null,
    capsules: null,
    capsulesPast: null,
    capsulesUpcoming: null,
    dragons: null,
    landpads: null,
    launches: null,
    launchesUpcoming: null,
    launchesPast: null,
    rockets:null,
    missions: false,

    //loader
    loader: false,

    //локализация 
    //по умолчание engish
    local: english

  },
  actions: {
    //aboutCompany
    async fetchAboutCompany(ctx){
      this.scene =   new THREE.Scene(),
      axios.get('https://api.spacexdata.com/v3/info')
      .then(function (response) {
          ctx.commit('updateAboutCompany',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    //capsules
    async fetchCapsulesAll(ctx){
        axios.get('https://api.spacexdata.com/v3/capsules')
        .then(function (response) {
            ctx.commit('updateCapsules',response)
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    async fetchCapsulesPast(ctx){
      axios.get('https://api.spacexdata.com/v3/capsules/past')
      .then(function (response) {
          ctx.commit('updateCapsulesPast',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    
    fetchCapsulesUpcoming(ctx){
      axios.get('https://api.spacexdata.com/v3/capsules/upcoming')
      .then(function (response) {
          ctx.commit('updateCapsulesUpcoming',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },



    //dragons
    fetchDragonsAll(ctx){
      axios.get('https://api.spacexdata.com/v3/dragons')
      .then(function (response) {
          ctx.commit('updateDragons',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },


      

    //landpads
    fetchLandpadsAll(ctx){
      axios.get('https://api.spacexdata.com/v3/launchpads')
      .then(function (response) {
          ctx.commit('updateLandpads',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //launches
    fetchLaunchesAll(ctx){
      axios.get('https://api.spacexdata.com/v3/launches')
      .then(function (response) {
          ctx.commit('updateLaunches',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    fetchLaunchesPast(ctx){
      axios.get('https://api.spacexdata.com/v3/launches/past')
      .then(function (response) {
          ctx.commit('updateLaunchesPast',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    fetchLaunchesUpcoming(ctx){
      axios.get('https://api.spacexdata.com/v3/launches/upcoming')
      .then(function (response) {
          ctx.commit('updateLaunchesUpcoming',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //rockets
    fetchRockets(ctx){
      axios.get('https://api.spacexdata.com/v3/rockets')
      .then(function (response) {
          ctx.commit('updateRockets',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //missions
    fetchMissions(ctx){
      axios.get('https://api.spacexdata.com/v3/missions')
      .then(function (response) {
          ctx.commit('updateMissions',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    changeLocalLang(ctx){
      let data = russian;
      if(this.state.local.lang=="ru"){
        data = english;
      }
      ctx.commit('updateLocalLang',data)
    }
  },
  mutations: {
    updateLocalLang(state, lang){
      state.local = lang;
    },
    //missions
    updateMissions(state, missions){
      state.missions = missions;
    },

    //company
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
      state.launchesUpcoming = launches;
    },
    updateLaunchesPast(state, launches){
      state.launchesPast = launches;
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
      return  state.launchesUpcoming
    },

    getLaunchesPast: state => {
      return  state.launchesPast
    },

    //Rockets get 
    getRockets: state => {
      return  state.rockets
    },

    //Missions get 
    getMissions: state => {
      return  state.missions
    },

    //getLocal
    getLocalCategory: state =>{
      return state.local.category
    },
    getLocalLang: state =>{
      return state.local.lang
    },
    getLocalHelpers: state =>{
      return state.local.helpers
    },
    getLocalDescription: state =>{
      return state.local.description
    }
  },
  modules: {

  },
});