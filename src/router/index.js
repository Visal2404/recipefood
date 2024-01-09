import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Favorite from '../pages/Favorite.vue';
import RecipeDetails from '../pages/RecipeDetails.vue';
import Login from '../pages/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite,
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeDetails,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
