//licence Apache 2.0

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

import {russian,english} from   '../store/lang.js'

import apiModule from '../store/modules/apiModule.js'

import * as THREE from 'three';

export default   new Vuex.Store({

  state: {
    scene:  1,
    
    //loader
    loader: false,

    dragons: null,
    landpads: null,
    launches: null,
    launchesUpcoming: null,
    launchesPast: null,
    rockets:null,
    missions: false,
    //локализация 
    //по умолчание engish
    local: english

  },
  actions: {
    
    async createScene(ctx){
     // console.log("scene will created")
      let scene = new THREE.Scene()
      await ctx.commit('updateScene',scene)
    },

    async plsClearScene(ctx){
      console.log("scene will clear")
      await ctx.commit('clearScene')
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
      axios.get('https://api.spacex.land/rest/rockets')
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

    updateScene(state,scene){
      // console.log("scene will updated")
      state.scene = scene;
    },

    clearScene(state){
      while(state.scene.children.length > 0){ 
        state.scene.remove(state.scene.children[0]); 
      }
    },


    updateLocalLang(state, lang){
      state.local = lang;
    },
    //missions
    updateMissions(state, missions){
      state.missions = missions;
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
    getScene: state =>{
      return state.scene;
    },
    

    //loaderStatus get
    getLoaderStatus: state => {
      return  state.loader
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
    },
    getLocalCard: state =>{
      return state.local.card
    }
  },
  modules: {
    apiModule,
  }
});