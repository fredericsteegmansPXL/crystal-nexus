import '../scss/main.scss'
import { createApp, ref } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from "@/router";

const app = createApp(App)
const pinia = createPinia();

const winkelmandje = ref([]); // Use ref to make it reactive
app.config.globalProperties.winkelmandje = []; // Winkelmandje
app.use(pinia);
app.use(router)
app.mount('#app')
