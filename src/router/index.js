import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*pages*/
import main from '@/pages/main.vue'
//capsules
import capsules from '@/pages/capsules.vue'
import capsulesAbout from '@/pages/capsulesAbout.vue'
import capsulesPast from '@/pages/capsulesPast.vue'
import capsulesUpcoming from '@/pages/capsulesUpcoming.vue'
import capsulesAll from '@/pages/capsulesAll.vue'
//dragons
import dragons from '@/pages/dragons.vue'
import dragonsAll from '@/pages/dragonsAll.vue'
import dragonsAbout from '@/pages/dragonsAbout.vue'

//lanpads
import landpads from '@/pages/landpads.vue'
import landpadsAbout from '@/pages/landpadsAbout.vue'
import landpadsAll from '@/pages/landpadsAll.vue'
import landpadsPast from '@/pages/landpadsAll.vue'
import landpadsUpcoming from '@/pages/landpadsAll.vue'

//rockets
import rockets from '@/pages/rockets.vue'
import rocketsAbout from '@/pages/rocketsAbout.vue'

//launches
import launches from '@/pages/launches.vue'
import launchesAll from '@/pages/launchesAll.vue'
import launchesAbout from '@/pages/launchesAbout.vue'

export default new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'main',
            path: '',
            component: main
        },
        {

            path: '/rockets',
            component: rockets,
            children:[
                {
                    name: 'rockets',
                    path: '',
                    component: rocketsAbout
                },
                {
                    path: 'all',
                    name: 'rockets-all',
                    component: dragonsAll,
                },
                {
                    path: 'past',
                    name: 'rockets-past',
                    component: capsulesPast,
                },
                {
                    path: 'upcoming',
                    name: 'rockets-upcoming',
                    component: capsulesUpcoming,
                    
                }
            ]
        },
        {
            path: '/capsules',
            component: capsules,
            children:[
                { 
                    name: 'capsules',
                    path: '', 
                    component: capsulesAbout,
                },
                {
                    path: 'all',
                    name: 'capsules-all',
                    component: capsulesAll,
                },
                {
                    path: 'past',
                    name: 'capsules-past',
                    component: capsulesPast,
                },
                {
                    path: 'upcoming',
                    name: 'capsules-upcoming',
                    component: capsulesUpcoming,
                    
                }
            ]
        },
        {

            path: '/dragons',
            component: dragons,
            children:[
                {
                    name: 'dragons',
                    path: '',
                    component: dragonsAbout
                },
                {
                    path: 'all',
                    name: 'dragons-all',
                    component: dragonsAll,
                },
                {
                    path: 'past',
                    name: 'dragons-past',
                    component: capsulesPast,
                },
                {
                    path: 'upcoming',
                    name: 'dragons-upcoming',
                    component: capsulesUpcoming,
                    
                }
            ]
        },
        {
            
            path: '/landpads',
            component: landpads,
            children:[
                {
                    path: '',
                    name: 'landpads',
                    component: landpadsAbout
                },
                {
                    path: 'all',
                    name: 'landpads-all',
                    component: landpadsAll,
                },
                {
                    path: 'past',
                    name: 'landpads-past',
                    component: landpadsPast,
                },
                {
                    path: 'upcoming',
                    name: 'landpads-upcoming',
                    component: landpadsUpcoming,
                    
                }
            ]
        },
        {
            
            path: '/launches',
            component: launches,
            children:[
                {
                    path: '',
                    name: 'launches',
                    component: launchesAbout
                },
                {
                    path: 'all',
                    name: 'launches-all',
                    component: launchesAll,
                },
                {
                    path: 'past',
                    name: 'launches-past',
                    component: landpadsPast,
                },
                {
                    path: 'upcoming',
                    name: 'launches-upcoming',
                    component: landpadsUpcoming,
                    
                }
            ]
        },
       
    ]
  })