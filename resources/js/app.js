require('./bootstrap');
import App from './components/App.vue'
import router from './router/router'
import { createApp } from 'vue'

// import the root component App from a single-file component.
// import App from './App.vue'

window.Vue = createApp(App).use(router).mount('#app')