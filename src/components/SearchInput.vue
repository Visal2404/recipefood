<template>
  <h1>FOOD RECIPES</h1>
  <routerLink to="/Login"><i class="material-icons mt-2" style="color: #00A36C;">person</i></routerLink>
  <div class="row">
    <div class="col-md-8 col-lg-5">
      <div class="input-group mt-4">
        <input type="text" class="form-control" aria-label="Recipient's username" 
        aria-describedby="basic-addon2" v-model="searchTerm">
        <div class="input-group-append">
          <span class="input-group-text material-icons" id="basic-addon2" @click="() => { recipeStore.searchRecipes(searchTerm); searchTerm=''}">search</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '../store/RecipeStore';
import { ref } from 'vue';
const recipeStore = useRecipeStore();
const searchTerm = ref('');
</script>