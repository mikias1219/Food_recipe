<script setup>
import { useAuth } from '~/composables/useAuth'; // Import the auth state
import { useRouter } from 'vue-router'; // Use Vue Router for navigation

const isAuthenticated = useAuth(); // Access global authentication state
const router = useRouter(); // Router instance for navigation

function logout() {
  localStorage.removeItem('token'); // Clear token
  isAuthenticated.value = false; // Update auth state
  router.push('/login'); // Redirect to login after logout
}
</script>

<template>
  <nav class="p-4 bg-gray-200">
    <ul class="flex space-x-4">
      <!-- Show login and signup links if not authenticated -->
      <li v-if="!isAuthenticated">
        <NuxtLink to="/login" class="hover:underline">Login</NuxtLink>
      </li>
      <li v-if="!isAuthenticated">
        <NuxtLink to="/signup" class="hover:underline">Signup</NuxtLink>
      </li>

      <!-- Show dashboard and logout links if authenticated -->
      <li v-if="isAuthenticated">
        <NuxtLink to="/dashboard" class="hover:underline">Dashboard</NuxtLink>
      </li>
      <li v-if="isAuthenticated">
        <button @click="logout" class="hover:underline text-red-600">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Add custom styles if needed */
nav {
  background-color: #f7f7f7;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
