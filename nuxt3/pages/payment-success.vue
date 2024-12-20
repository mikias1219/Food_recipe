<template>
    <div>
      <h1>Payment Status</h1>
      <p v-if="status">Payment Status: {{ status }}</p>
      <p v-else>Verifying payment...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const status = ref(null)
  
  onMounted(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const txRef = urlParams.get('tx_ref')
  
    if (txRef) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/verify', { ref_num: txRef })
        status.value = response.data.status
      } catch (error) {
        console.error('Error verifying payment', error)
      }
    }
  })
  </script>
  