import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//Creación de Pinia para el estado de la página web
const pinia = createPinia();

// Importando enlace a Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



createApp(App).use(pinia).use(router).mount('#app')
