import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Homepage/Home.vue";
import Formation from "../pages/Formation/Formation.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/formation',
        name: 'Formation',
        component: Formation
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior: (to) => {
        if (to) {
            return { selector: to.hash };
        }
        
        return { left: 0, top: 0 };
    },
})

export default router