require('./bootstrap');
import { createApp } from 'vue'
import App         from './components/App.vue'
import store       from './store';
import router      from './router/router'
import setupInterceptors from './services/setupInterceptors';
setupInterceptors();



const app = createApp(App);
app.
use(router).
use(store).
mount('#app')