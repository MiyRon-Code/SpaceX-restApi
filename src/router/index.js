import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'main',
            path: '',
            component: () => import("@/pages/main.vue")
        },
        {
            path: '/missions',
            component: () => import("@/pages/missions.vue"),
            children:[
                {
                    name: 'missions',
                    path: '',
                    component: () => import("@/pages/missionsAbout.vue"),
                },
                {
                    name: 'missions-all',
                    path: 'all',
                    component: () => import("@/pages/missionsAll.vue"),
                },
            ]
        },
        {

            path: '/rockets',
            component: () => import("@/pages/rockets.vue"),
            children:[
                {
                    name: 'rockets',
                    path: '',
                    component: () => import("@/pages/rocketsAbout.vue")
                },
                {
                    path: 'all',
                    name: 'rockets-all',
                    component: () => import("@/pages/rocketsAll.vue"),
                },
            ]
        },
        {
            path: '/capsules',
            component: () => import("@/pages/capsules.vue"),
            children:[
                { 
                    name: 'capsules',
                    path: '', 
                    component: () => import("@/pages/capsulesAbout.vue"),
                },
                {
                    path: 'all',
                    name: 'capsules-all',
                    component: () => import("@/pages/capsulesAll.vue"),
                },
                {
                    path: 'past',
                    name: 'capsules-past',
                    component: () => import("@/pages/capsulesPast.vue"),
                },
                {
                    path: 'upcoming',
                    name: 'capsules-upcoming',
                    component: () => import("@/pages/capsulesUpcoming.vue"),
                    
                }
            ]
        },
        {

            path: '/dragons',
            component: () => import("@/pages/dragons.vue"),
            children:[
                {
                    name: 'dragons',
                    path: '',
                    component: () => import("@/pages/dragonsAbout.vue"),
                },
                {
                    path: 'all',
                    name: 'dragons-all',
                    component: () => import("@/pages/dragonsAll.vue"),
                },
            ]
        },
        {
            
            path: '/landpads',
            component: () => import("@/pages/landpads.vue"),
            children:[
                {
                    path: '',
                    name: 'landpads',
                    component: () => import("@/pages/landpadsAbout.vue"),
                },
                {
                    path: 'all',
                    name: 'landpads-all',
                    component: () => import("@/pages/landpadsAll.vue"),
                },
            ]
        },
        {
            
            path: '/launches',
            component: () => import("@/pages/launches.vue"),
            children:[
                {
                    path: '',
                    name: 'launches',
                    component: () => import("@/pages/launchesAbout.vue"),
                },
                {
                    path: 'all',
                    name: 'launches-all',
                    component: () => import("@/pages/launchesAll.vue"),
                },
                {
                    path: 'upcoming',
                    name: 'launches-upcoming',
                    component: () => import("@/pages/launchesUpcoming.vue"),
                    
                }
            ]
        },
        {
            
            path: '/description',
            name: 'description',
            component: () => import("@/pages/description.vue"),
        },
    ]
  })