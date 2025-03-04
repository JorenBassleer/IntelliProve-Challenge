const routes = [
  { name: 'home', path: '/', component: () => import('../views/StartPage.vue') },
  { name: 'camera', path: '/camera', component: () => import('../views/CameraPage.vue') },
  { name: 'results', path: '/results', component: () => import('../views/ResultsPage.vue') },
];

export default routes;
