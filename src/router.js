import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Todos from './components/todos.vue';

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/todos',
        name: 'todos',
        component: Todos,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
