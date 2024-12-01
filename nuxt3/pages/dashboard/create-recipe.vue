<template>
  <form @submit.prevent="createRecipe">
    <h1 class="text-2xl font-bold">Create Recipe</h1>
    <div>
      <label>Title:</label>
      <input v-model="title" required />
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="description" required></textarea>
    </div>
    <div>
      <label>Preparation Time:</label>
      <input v-model="prepTime" type="number" required />
    </div>
    <div>
      <label>Category:</label>
      <select v-model="categoryId" required>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>

<script setup>
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const prepTime = ref(0);
const categoryId = ref(null);

const CREATE_RECIPE = gql`
  mutation CreateRecipe($input: recipe_insert_input!) {
    insert_recipe_one(object: $input) {
      id
    }
  }
`;

const { mutate } = useMutation(CREATE_RECIPE);

const createRecipe = async () => {
  await mutate({
    input: {
      title: title.value,
      description: description.value,
      preparation_time: prepTime.value,
      category_id: categoryId.value,
    },
  });
  alert('Recipe created successfully!');
};
</script>
