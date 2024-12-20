<template>
    <div class="flex justify-around items-center flex-wrap gap-2">
      <!-- Loop through the cartitems and display each item -->
      <div
        v-for="(item, index) in cartitem"
        :key="index"
        class="bg-white w-[45%] shadow-md rounded-md p-2"
      >
        <div class="h-[6.5em] relative rounded-md border-2 border-gray-50">
          <div class="w-full flex justify-center items-center h-full">
            <img class="drop-shadow-md w-auto h-[90%]" :src="item.img" />
          </div>
          <div class="absolute right-[.2em] bottom-[0em]">
            <!-- Show total quantity if greater than 0 -->
            <span v-if="item.total > 0">{{ item.total }}kg</span>
          </div>
        </div>
  
        <div>{{ item.item }}</div>
        <div>{{ item.txt }}</div>
        <div class="flex justify-between items-center">
          <div>ETB {{ item.price }}/kg</div>
          <div class="flex gap-2">
            <!-- Decrease quantity button -->
            <button
              @click="add(item.item, 'min')"
              class="bg-[#fe9d34] w-[1.5em] h-[1.5em] rounded-sm"
            >
              -
            </button>
            <!-- Increase quantity button -->
            <button
              @click="add(item.item, 'add')"
              class="bg-[#fe9d34] w-[1.5em] h-[1.5em] rounded-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Define the props passed to the component
  defineProps({
    cartitem: Array,
    add: Function,
    items: Array
  });
  </script>
  
  <style scoped>
  /* You can add specific styles here if needed */
  </style>
  