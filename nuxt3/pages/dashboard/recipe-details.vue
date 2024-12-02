<template>
  <div>
    <h1 class="text-2xl font-bold">{{ recipe.title }}</h1>
    <p>{{ recipe.description }}</p>
    <p>Preparation Time: {{ recipe.preparation_time }} minutes</p>
    <div v-if="recipe.ingredients">
      <h2 class="text-lg font-semibold">Ingredients</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
          {{ ingredient.name }}: {{ ingredient.quantity }}
        </li>
      </ul>
    </div>
    <div v-if="recipe.steps">
      <h2 class="text-lg font-semibold">Steps</h2>
      <ol>
        <li v-for="step in recipe.steps" :key="step.id">{{ step.description }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const GET_RECIPE_DETAILS = gql`
  query GetRecipeDetails($recipeId: Int!) {
    recipe_by_pk(id: $recipeId) {
      id
      title
      description
      preparation_time
      ingredients {
        id
        name
        quantity
      }
      steps {
        id
        step_number
        description
      }
    }
  }
`;

const recipeId = 1; // Replace with dynamic value
const { result: recipe } = useQuery(GET_RECIPE_DETAILS, { recipeId });
</script>
