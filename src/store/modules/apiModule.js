import axios from 'axios'
export default{
    state: () => ({
      //данные
      aboutCompany: null,
      capsules: null,
      capsulesPast: null,
      capsulesUpcoming: null,
      
      
    }),
    actions: {
      //aboutCompany
    fetchAboutCompany({commit}){
      axios.get('https://api.spacexdata.com/v3/info')
      .then(function (response) {
          commit('updateAboutCompany',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //fetch Capules
    fetchCapsulesAll({commit}){
      axios.get('https://api.spacexdata.com/v3/capsules')
      .then(function (response) {
          commit('updateCapsules',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    fetchCapsulesPast({commit}){
      axios.get('https://api.spacexdata.com/v3/capsules/past')
      .then(function (response) {
        commit('updateCapsulesPast',response)
      })
      .catch(function (error) {
        console.error(error);
      })
    },

    fetchCapsulesUpcoming({commit}){
      axios.get('https://api.spacexdata.com/v3/capsules/upcoming')
      .then(function (response) {
          commit('updateCapsulesUpcoming',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
  },
    mutations: {
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
    },

    getters: { 
      //aboutCompany get
      getAboutCompany:state => {
        return  state.aboutCompany
      },

      //capsules get
      getCapsules:state =>{
        return  state.capsules
      },      
      getPastCapsules:state =>{
        return  state.capsulesPast
      },
      getUpcomingCapsules: state => {
        return  state.capsulesUpcoming
      },
     }
  }