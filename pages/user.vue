<template>
    <div class="user-page">
      <h2 v-if="chatStore.state.value.currentUser">
        Welcome, {{ chatStore.state.value.currentUser }}
      </h2>
      <h3>Users List</h3>
  
      <div v-if="chatStore.state.value.users.length > 0" class="user-list">
        <div
          v-for="user in chatStore.state.value.users"
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
  
  const chatStore = useChatStore();
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
  