<template>
    <div>
      <h1>Payment Status</h1>
      <div v-if="status === 'success'" class="success">Payment was successful!</div>
      <div v-else class="error">Payment failed. Please try again.</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const status = ref("");
  const router = useRouter();
  
  onMounted(async () => {
    const query = router.currentRoute.value.query;
  
    if (query.tx_ref) {
      try {
        // Verify payment status with the backend
        const response = await fetch(
          `http://localhost:8085/callback?tx_ref=${query.tx_ref}`
        );
        const data = await response.text();
  
        if (data.includes("Payment successful")) {
          status.value = "success";
        } else {
          status.value = "failed";
        }
      } catch (error) {
        console.error("Payment verification failed:", error);
        status.value = "failed";
      }
    } else {
      status.value = "failed";
    }
  });
  </script>
  
  <style scoped>
  .success {
    color: green;
  }
  .error {
    color: red;
  }
  </style>
  