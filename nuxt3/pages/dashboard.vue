<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-teal-600 text-white flex flex-col">
      <div class="py-6 px-4 text-center">
        <h2 class="text-xl font-bold">Food Recipe Dashboard</h2>
      </div>
      <nav class="flex-1">
        <ul>
          
          <li>
            <NuxtLink
              to="/dashboard/my-recipes"
              class="block px-4 py-2 hover:bg-teal-700"
            >
              My Recipes
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/dashboard/create-recipe"
              class="block px-4 py-2 hover:bg-teal-700"
            >
              Create Recipe
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/dashboard/bookmarked"
              class="block px-4 py-2 hover:bg-teal-700"
            >
              Bookmarked Recipes
            </NuxtLink>
          </li>
          
          
          <li>
            <button @click="logout" class="block px-4 py-2 hover:bg-teal-700">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow py-4 px-6">
        <div class="flex justify-between items-center">
          <h1 class="text-lg font-semibold">
            Welcome, {{ user.name }}
          </h1>
          
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6">
        <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- User's Recipes -->
          <div class="bg-white shadow rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-2">Your Recipes</h3>
            <p class="text-4xl font-bold text-teal-600">15</p>
          </div>

          <!-- Liked Recipes -->
          <div class="bg-white shadow rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-2">Liked Recipes</h3>
            <p class="text-4xl font-bold text-green-600">25</p>
          </div>

          <!-- Bookmarked Recipes -->
          <div class="bg-white shadow rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-2">Bookmarked Recipes</h3>
            <p class="text-4xl font-bold text-blue-600">8</p>
          </div>

          <!-- Comments -->
          <div class="bg-white shadow rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-2">Comments</h3>
            <p class="text-4xl font-bold text-red-600">12</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Pinia store for user data
import { ref, onMounted } from 'vue';

// Get route and auth store
const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

// State for user data
const user = ref({
  name: '',
  email: '',
  userId: ''
});

// On mounted, fetch user details from the store, query params, or localStorage
onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    user.value = storedUser;
  } else if (auth.user) {
    user.value = auth.user;
  } else {
    router.push('/login');
  }
});

// Handle logout action
const logout = () => {
  auth.clearUser();
  localStorage.removeItem('user');
  router.push('/login');
};
</script>

<style scoped>
/* Custom styling for the dashboard */
</style>
