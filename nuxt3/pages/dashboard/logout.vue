<!-- pages/logout.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-lg">You have been logged out successfully.</p>
      <NuxtLink to="/login" class="mt-4 text-teal-600 hover:text-teal-700">
        Go to Login Page
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Redirect the user to the login page after a short delay
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Redirect after 2 seconds to show the message
  setTimeout(() => {
    router.push('/login');
  }, 2000);
});
</script>

<style scoped>
/* Add custom styles for logout page */
</style>
