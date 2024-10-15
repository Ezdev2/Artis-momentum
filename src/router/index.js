import { createRouter, createWebHistory } from 'vue-router';
import Book from '../pages/Book/Book.vue';
import CallToAction from '../pages/CTA/CallToAction.vue';
import Formation from "../pages/Formation/Formation.vue";
import Home from "../pages/Homepage/Home.vue";

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
    {
        path: '/book',
        name: 'Book',
        component: Book
    },
    {
        path: '/cta',
        name: 'CTA',
        component: CallToAction
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