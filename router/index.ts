import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import Home from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { layout: 'Main', auth: true },
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/HelpView.vue'),
    meta: { layout: 'Main', auth: true },
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue'),
    meta: { layout: 'Auth' },
  },
  {
    path: '/request/:id',
    name: 'request',
    component: () => import('../views/Request.vue'),
    meta: { layout: 'Main', auth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

//
router.beforeEach((to) => {
  const store = useAuthStore();
  const isAuth = store.isAuth;
  const metaAuth = to.meta.auth;

  if (metaAuth && !isAuth) {
    return {
      name: 'auth',
      query: {
        message: 'login',
      },
    };
  }
});

//
export default router;
