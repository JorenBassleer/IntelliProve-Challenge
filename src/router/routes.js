const routes = [
  { name: 'home', path: '/', component: () => import('../views/StartPage.vue') },
  {
    name: 'camera',
    path: '/camera',
    component: () => import('../views/CameraPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    name: 'results',
    path: '/results',
    component: () => import('../views/ResultsPage.vue'),
    meta: { requiresAuth: true },
  },
];

export default routes;
