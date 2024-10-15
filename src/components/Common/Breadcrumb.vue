<template>
    <div aria-label="breadcrumb" class="breadcrumb">
      <ol class="flex space-x-2 text-gray-700">
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <span v-if="index === breadcrumbs.length - 1" class="font-semibold">
            {{ breadcrumb.text }}
          </span>
          <router-link
            v-else
            :to="breadcrumb.to"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ breadcrumb.text }}
          </router-link>
          <span v-if="index !== breadcrumbs.length - 1" class="mx-2">/</span>
        </li>
      </ol>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  // Computed property for breadcrumbs
  const breadcrumbs = computed(() => {
    const pathArray = route.path.split('/').filter(Boolean);
    const breadcrumbArray = [];
  
    let currentPath = '/';
    pathArray.forEach((segment, index) => {
      currentPath += segment + '/';
      breadcrumbArray.push({
        text: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the first letter of the breadcrumb
        to: currentPath
      });
    });
  
    return breadcrumbArray;
  });
  </script>
  
  <style scoped>
  .breadcrumb {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  
  ol {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
  }
  </style>
  