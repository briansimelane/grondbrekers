<template>
    <nav class="fixed bottom-0 w-full bg-green-800 border-t border-gray-200">
      <div class="max-w-screen-lg mx-auto px-6 sm:px-4 lg:px-8">
        <div class="flex justify-between md:justify-center items-center">
          <!-- Home Link -->
          <router-link
            to="/home"
            class="flex flex-col items-center w-full sm:w-auto md:w-36 mx-4 p-2 hover:bg-green-900 hover:text-black"
            :class="{ 'bg-white text-black': isActiveRoute('/home') }"
          >
            <HomeIcon :class="[isActiveRoute('/home') ? 'text-black' : 'text-yellow-300', 'h-8 w-8 md:h-12 md:w-12']" />
            <span :class="[isActiveRoute('/home') ? 'text-black' : 'text-yellow-300', 'text-sm md:text-lg mt-1']">Home</span>
          </router-link>
  
          <!-- Challenges Link -->
          <router-link
            to="/challenges"
            class="flex flex-col items-center w-full sm:w-auto md:w-36 mx-4 p-2 hover:bg-green-900 hover:text-black"
            :class="{ 'bg-white text-black': isActiveRoute('/challenges') }"
          >
            <BellAlertIcon :class="[isActiveRoute('/challenges') ? 'text-black' : 'text-yellow-300', 'h-8 w-8 md:h-12 md:w-12']" />
            <span :class="[isActiveRoute('/challenges') ? 'text-black' : 'text-yellow-300', 'text-sm md:text-lg mt-1']">Challenges</span>
          </router-link>
  
          <!-- Dashboard Link -->
          <router-link
            to="/dashboard"
            class="flex flex-col items-center w-full sm:w-auto md:w-36 mx-4 p-2 hover:bg-green-900 hover:text-black"
            :class="{ 'bg-white text-black': isActiveRoute('/dashboard') }"
          >
            <ChartBarIcon :class="[isActiveRoute('/dashboard') ? 'text-black' : 'text-yellow-300', 'h-8 w-8 md:h-12 md:w-12']" />
            <span :class="[isActiveRoute('/dashboard') ? 'text-black' : 'text-yellow-300', 'text-sm md:text-lg mt-1']">Dashboard</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { HomeIcon, BellAlertIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
  
  // Get the current route to check if it's active
  const route = useRoute();
  
  // Function to check if the current route is active
  const isActiveRoute = (path) => {
    return route.path === path;
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  