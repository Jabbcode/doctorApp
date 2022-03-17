
const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('../pages/Dashboard.vue')
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: () => import('../pages/Inventario.vue')
    },
    {
        path: '/inventario/crear',
        name: 'crear-producto',
        component: () => import('../inventario/Crear.vue')
    },
    {
        path: '/proveedores',
        name: 'proveedores',
        component: () => import('../pages/Proveedores.vue')
    },
    {
        path: '/reportes',
        name: 'reportes',
        component: () => import('../pages/Reportes.vue')
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: () => import('../pages/Usuarios.vue')
    },
];

export default routes;