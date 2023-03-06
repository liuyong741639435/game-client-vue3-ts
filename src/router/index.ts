import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "index",
        redirect: '/fight',
    },
    {
        path: "/fight",
        name: "fight",
        component: () => import("../views/fight/index.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
})