import { createWebHistory, createRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useNotify from '@composables/notify';
import routes from './routes';
import { useBaseStore } from '../store/base';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useBaseStore();
  const { currentAuthenticatedUser } = storeToRefs(store);
  const { notify } = useNotify();

  if (to.meta.requiresAuth && !currentAuthenticatedUser.value.token) {
    notify({
      title: 'No user logged in',
      text: 'Select a user from the home screen',
      type: 'error',
    });
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
