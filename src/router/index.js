import { createRouter, createWebHistory } from 'vue-router'

function isLogged(to, from, next) {
  if (localStorage.getItem('isLogged') === '1') {
    next()
  } else {
    next({ name: 'login' })
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/protected',
      name: 'protected',
      beforeEnter: isLogged,
      component: () => import('../views/ProtectedView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
