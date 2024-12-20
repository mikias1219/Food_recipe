<template>
    <div class="flex justify-between p-2 flex-col h-[17%] relative">
      <!-- Toggle button for showing the side menu -->
      <div class="font-bold flex justify-end">
        <button class="rotate-90" @click="toggleShow">
          |||
        </button>
      </div>
  
      <!-- Store name -->
      <div class="w-full text-4xl flex justify-center mb-[.5em]">
        Addis Mirte Grocery
      </div>
  
      <!-- Search input -->
      <input
        type="text"
        placeholder="search items"
        class="bg-white rounded-md h-[3em] p-2 outline-none border-2 border-[#fe9d34]"
      />
  
      <!-- Side menu (shows when `show` is true) -->
      <div 
        v-if="show" 
        class="bg-white border-l-2 border-[#fe9d34] w-[85%] custom-ani z-[5] h-screen absolute top-0 right-0 flex flex-col justify-between transition-all ease-in-out duration-300"
        :style="{ transform: show ? 'translateX(0)' : 'translateX(100%)' }"
      >
        <div class="flex justify-between w-full p-2 items-center">
          <button class="flex items-center" @click="toggleShow">
            close
          </button>
          <div>Total: {{ totalPrice }} ETB</div>
        </div>
  
        <div class="h-full overflow-y-scroll scrollbar-hide">
          <div class="gap-2 flex flex-wrap p-2">
            <!-- Handle cases where cartitem or individual items might be undefined or missing values -->
            <div 
              v-for="(item, index) in cartitem" 
              :key="index" 
              v-if="item?.total > 0" 
              class="bg-white flex w-[100%] relative rounded-md p-2 border-[1px] border-gray-200"
            >
              <div class="h-[7em] relative rounded-md">
                <div class="w-full flex justify-center items-center h-full">
                  <img 
                    class="drop-shadow-md w-auto h-[90%]" 
                    :src="item?.img" 
                    alt="Item Image"
                  />
                </div>
              </div>
              <div class="absolute right-[.4em] bottom-[.2em]">
                {{ item?.total }}kg
              </div>
              <div class="flex flex-col justify-center items-center w-full">
                <div>{{ item?.item }}</div>
                <div class="flex justify-between items-center">
                  <div>{{ (item?.total || 0) * (item?.price || 0) }} ETB</div>
                </div>
              </div>
            </div>
  
            <!-- Show message if no items are in the cart -->
            <div v-if="totalPrice === 0" class="h-[20%] w-full flex justify-center items-center">
              Nothing to show
            </div>
          </div>
        </div>
  
        <!-- Checkout Button -->
        <Tocheckout :totalprice="totalPrice" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Tocheckout from './Tocheckout.vue';
  
  // Define props for cartitem array
  const props = defineProps({
    cartitem: {
      type: Array,
      required: true,
      default: () => [],
    }
  });
  
  // State to manage the show/hide of the menu
  const show = ref(false);
  
  // Toggle the state of the side menu
  const toggleShow = () => {
    show.value = !show.value;
  };
  
  // Calculate total price, adding error handling for missing or invalid data
  const totalPrice = computed(() => {
    if (!props.cartitem || !Array.isArray(props.cartitem)) {
      return 0; // Return 0 if cartitem is invalid
    }
    return props.cartitem.reduce((sum, item) => {
      if (!item || typeof item.price !== 'number' || typeof item.total !== 'number') {
        return sum; // Skip invalid items
      }
      return sum + (item.price * item.total);
    }, 0);
  });
  </script>
  