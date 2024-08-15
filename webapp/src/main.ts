import { createPinia } from "pinia";
import { createApp } from 'vue'
import App from './App.vue'
import 'vue3-toastify/dist/index.css';
import './index.css'

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
