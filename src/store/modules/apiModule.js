import axios from 'axios'
export default{
    state: () => ({
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

    //dragons
    fetchDragonsAll({commit}){
      axios.get('https://api.spacexdata.com/v3/dragons')
      .then(function (response) {
          commit('updateDragons',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    
    //landpads
    fetchLandpadsAll({commit}){
      axios.get('https://api.spacexdata.com/v3/launchpads')
      .then(function (response) {
          commit('updateLandpads',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //launches
    fetchLaunchesAll({commit}){
      axios.get('https://api.spacexdata.com/v3/launches')
      .then(function (response) {
          commit('updateLaunches',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    fetchLaunchesPast({commit}){
      axios.get('https://api.spacexdata.com/v3/launches/past')
      .then(function (response) {
          commit('updateLaunchesPast',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },
    fetchLaunchesUpcoming({commit}){
      axios.get('https://api.spacexdata.com/v3/launches/upcoming')
      .then(function (response) {
          commit('updateLaunchesUpcoming',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //rockets
    fetchRockets({commit}){
      axios.get('https://api.spacex.land/rest/rockets')
      .then(function (response) {
          commit('updateRockets',response)
      })
      .catch(function (error) {
          console.log(error);
      })
    },

    //missions
    fetchMissions({commit}){
      axios.get('https://api.spacexdata.com/v3/missions')
      .then(function (response) {
          commit('updateMissions',response)
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
      //missions
      updateMissions(state, missions){
        state.missions = missions;
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
    }
  }