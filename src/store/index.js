//licence Apache 2.0
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {russian,english} from   '../store/lang.js'

//modules
import apiModule from '../store/modules/apiModule.js'
import * as THREE from 'three';

export default   new Vuex.Store({
  state: {
    scene:  1,
    
    //loader
    loader: false,
    
    //локализация 
    local: english //по умолчание engish
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
  },
  getters: {
    //THREE SCENE
    getScene: state =>{
      return state.scene;
    },
    
    //loaderStatus get
    getLoaderStatus: state => {
      return  state.loader
    },

    //LOCALIZATION
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