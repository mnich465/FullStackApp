
import {createRouter, createWebHistory} from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Surveys from '../views/Surveys.vue';
import SurveyView from "../views/SurveyView.vue"
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import store from "../store";


const routes = 
[
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: 
        [
            {
                path: '/dashboard', 
                name:'Dashboard', 
                component: Dashboard
            },
            {
                path: '/Surveys', 
                name:'Surveys', 
                component: Surveys
            },
            {
                path: '/surveys/create',
                name:'SurveyCreate', 
                component: SurveyView
            },
            {
                path: '/surveys/:id',
                name:'SurveyView', 
                component: SurveyView
            },
        ],
    },
    {
        path: '/Auth',
        name: 'Auth',
        redirect: '/Login',
        component:AuthLayout,
        meta: {isGuest: true},
        children: 
        [
            {
                path: '/Login',
                name: 'Login',
                component: Login
            },
            {
                path: '/Register',
                name: 'Register',
                component: Register
            }
        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach ((to, from, next) => {
    if(to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Login'})
    }
    else if (store.state.user.token && (to.meta.isGuest)) {
        next({namme: 'Dashboard'});
    }
    else {
        next();
    }
})

export default router;