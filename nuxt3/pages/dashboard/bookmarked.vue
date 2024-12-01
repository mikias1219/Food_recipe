<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Bookmarked Recipes</h1>
    <div v-if="bookmarkedRecipes.length">
      <RecipeCard v-for="recipe in bookmarkedRecipes" :key="recipe.id" :recipe="recipe" />
    </div>
    <p v-else>No bookmarked recipes found!</p>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import RecipeCard from '@/components/RecipeCard.vue';

const GET_BOOKMARKED_RECIPES = gql`
  query GetBookmarkedRecipes($userId: uuid!) {
    bookmark(where: { user_id: { _eq: $userId } }) {
      recipe {
        id
        title
        featured_image_url
        preparation_time
        category {
          name
        }
      }
    }
  }
`;

const userId = 'user-id'; // Replace with actual user logic
const { result: bookmarkedRecipes } = useQuery(GET_BOOKMARKED_RECIPES, { userId });
</script>
