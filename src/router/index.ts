import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect:'/calendar',
    },
    {
        path: '/calendar',
        component: () => import('@/views/Calender.vue')
    },
];
export const router = createRouter({
    routes,
    history:createWebHistory()
})
