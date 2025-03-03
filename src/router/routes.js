const routes = [
  { name: 'home', path: '/', component: () => import('../views/StartPage.vue') },
  { name: 'camera', path: '/camera', component: () => import('../views/CameraPage.vue') },
];

export default routes;
