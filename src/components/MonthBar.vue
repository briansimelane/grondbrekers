<template>
    <div :class="`${bgColor} text-base font-light text-gray-50 mt-1 pt-1 pb-1 pl-5`">
        {{ text }}
    </div>
</template>

<script setup>
// Define props to accept `bgColor` and `text` from the parent component
defineProps({
  bgColor: {
    type: String,
    default: 'bg-yellow-500' // Default background color if none is provided
  },
  text: {
    type: String,
    default: 'Month: August' // Default text if none is provided
  }
});
</script>
