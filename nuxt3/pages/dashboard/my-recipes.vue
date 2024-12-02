<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">My Recipes</h1>
    <div v-if="recipes.length">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
    <p v-else>No recipes found. Create your first recipe!</p>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import RecipeCard from '@/components/RecipeCard.vue';

const GET_MY_RECIPES = gql`
  query GetMyRecipes($userId: uuid!) {
    recipe(where: { user_id: { _eq: $userId } }) {
      id
      title
      featured_image_url
      preparation_time
      category {
        name
      }
    }
  }
`;

const userId = 'user-id'; // Replace with auth logic
const { result: recipes } = useQuery(GET_MY_RECIPES, { userId });
</script>
