<template>
  <div
    class="bg-[#fe9d34] h-[3.25em] flex justify-center items-center text-white text-xl"
    @click="handleCheckout"
  >
    To checkout
  </div>
</template>

<script setup>
// Define the `totalprice` prop that will be passed to the component
const props = defineProps({
  totalprice: Number,
});

// Handle the checkout logic
const handleCheckout = async () => {
  if (props.totalprice === 0) {
    alert("Please add something to your cart");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: props.totalprice,
        rdurl: "http://localhost:3000",  // Replace with the correct URL
      }),
    });

    const data = await response.json();

    if (data?.detail?.data?.checkout_url) {
      const checkoutUrl = data.detail.data.checkout_url;
      window.location.replace(checkoutUrl);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error during checkout", error);
    alert("An error occurred during checkout. Please try again later.");
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
