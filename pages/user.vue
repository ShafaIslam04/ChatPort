<template>
    <div v-if="chatStore" class="user-page">
      <h2>Welcome, {{ chatStore.currentUser }}</h2>
      <h3>Users List</h3>
  
      <div v-if="chatStore.users.length > 0" class="user-list">
        <div
          v-for="user in chatStore.users"
          :key="user.username"
          :class="user.role === 'admin' ? 'admin' : 'user'"
          class="user-item"
        >
          <span>{{ user.username }} ({{ user.role }})</span>
        </div>
      </div>
  
      <p v-else>(You are the only user right now!)</p>
    </div>
  </template>
  
  <script setup>
  import { useChatStore } from '~/stores/chat';
  import { onMounted } from 'vue';
  
  const chatStore = useChatStore();
  
  onMounted(() => {
    chatStore.initialize();
  });
  </script>
  
  <style scoped>
  .user-page {
    padding: 20px;
  }
  .user-list {
    display: flex;
    flex-direction: column;
  }
  .user-item {
    margin: 10px 0;
  }
  .admin {
    text-align: right;
    background-color: lightgray;
    padding: 5px;
    
  }
  .user {
    text-align: left;
    background-color: lightgreen;
    padding: 5px;
  }
  </style>
  