import VueRouter from 'vue-router';
import routes from './route.js';

const router = new VueRouter({
    // mode: 'history',
    routes,
    linkExactActiveClass: 'isActive'
});

export default router;