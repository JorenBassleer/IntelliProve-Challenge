import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Notifications from '@kyvg/vue3-notification';
import './style.css';
import router from './router';
import App from './App.vue';
import 'primeicons/primeicons.css';

const pinia = createPinia();

const theme = localStorage.getItem('theme') || 'light';
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

createApp(App)
  .use(router)
  .use(pinia)
  .use(Notifications)
  .mount('#app');
