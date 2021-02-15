import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default   new Vuex.Store({

  state: {
    capsules: null,
    capsulesPast: null,
    capsulesUpcoming: null,

    dragons: null
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
    
  },
  getters: {
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
  },
  modules: {

  },
});