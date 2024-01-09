<template>
  <routerLink to="/"><i class="material-icons mt-2" style="color: #00A36C">home</i></routerLink>

  <div class="card mt-5 border-0 mx-auto">
    <div class="card-body">
      <img class="card-img-top rounded" :src="recipeStore.selectedRecipe.strMealThumb" :alt="recipeStore.selectedRecipe.strMeal" style="width: 400px; height: 300px;"/>
      <div class="d-flex justify-content-between">
        <h2 class="card-title mt-2">{{ recipeStore.selectedRecipe.strMeal }}</h2>
        <i class="material-icons mt-2" :class="{ 'text-danger': recipeStore.isFavorite(recipeStore.selectedRecipe.idMeal) }"
          @click="recipeStore.recipeStore.toggleFav(recipeStore.selectedRecipe)">
          favorite
        </i>
      </div>
      <h4 class="card-text mt-5">Ingredients</h4>
      <div>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="recipeStore.selectedRecipe[`strIngredient${index+1}`]">
              {{ recipeStore.selectedRecipe[`strMeasure${index+1}`]}} {{ recipeStore.selectedRecipe[`strIngredient${index+1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <h4 class="card-text mt-5">Instructions</h4>
       <div>
        <p>{{ recipeStore.selectedRecipe.strInstructions }}</p>
       </div>
    </div>
  </div>
</template> 

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

import { useRecipeStore } from '../store/RecipeStore';


const route = useRoute();
const recipeStore = useRecipeStore();

onMounted(async () => {
  try {
    await recipeStore.getOneRecipe(route.params.id);
  } catch (e) { 
    console.log(e)
  } 
})

</script>