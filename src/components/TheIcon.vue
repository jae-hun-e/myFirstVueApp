<script setup lang="ts">
defineProps<{ active?: boolean }>()
</script>

<template>
  <div
    :class="{ active }"
    class="w-[30px] h-[30px] border-[1px] border-solid border-gray-400 rounded-full flex justify-center items-center cursor-pointer active:bg-blue-600 active:border-[1px] active:border-solid active:border-blue-600">
    <span
      :class="{ active }"
      class="material-symbols-outlined opacity-0 rounded-full active:text-white active:opacity-100"
      ><slot></slot>
    </span>
  </div>
</template>
