<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-white">
    <div class="px-6 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to your farm!<br />Grow your crops, manage and build your farming business.</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Your objective: Manage your farm wisely to increase your net worth and become a prosperous farmer.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <router-link to="/details" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Begin</router-link>
          
        </div>
      </div>
    </div>
  </div>
</template>