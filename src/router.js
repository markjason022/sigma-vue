import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Information from './components/Information.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/information',
        name: 'information',
        component: Information,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
