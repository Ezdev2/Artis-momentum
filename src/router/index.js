import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Homepage/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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