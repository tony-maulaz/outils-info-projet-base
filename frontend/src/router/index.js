import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

// Définir les routes
const routes = [
  { path: '/', name: 'Home', component: HomePage },
]

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(), // pour l'historique avec hachage, # dans l'URL
  routes
})

export default router