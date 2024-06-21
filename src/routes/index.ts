import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@pages/index.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('@pages/Jobs.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
