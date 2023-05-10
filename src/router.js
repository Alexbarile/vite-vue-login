//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';

//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },

        //rotta per errore 404 (sempre per ultima)
        // {
        //     path: '/*',
        //     name: 'not-found',
        //     component: NotFound
        // },
    ]
})

//4 esportiamo il router

export { router };