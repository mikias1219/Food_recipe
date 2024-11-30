<template>
  <div>Logging out...</div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const authStore = useAuthStore();

authStore.logout(); // Call your logout logic
router.push('/'); // Redirect to homepage or login
</script>
