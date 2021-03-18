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
      async fetchAboutCompany(state, commit){
        axios.get('https://api.spacexdata.com/v3/info')
        .then(function (response) {
            commit('updateAboutCompany',response)
        })
        .catch(function (error) {
            console.log(error);
        })
      },
    },
    mutations: {  },

    getters: {  }
  }