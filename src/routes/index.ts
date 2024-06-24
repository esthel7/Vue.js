import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@pages/index.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('@pages/Calendar.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('@pages/Jobs.vue')
  },
  {
    path: '/reference',
    name: 'Reference',
    component: () => import('@pages/Reference.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
