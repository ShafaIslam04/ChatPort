<template>
    <div class="create-user">
      <h1>Welcome to Chat App</h1>
      <p>Create your username and assign a role:</p>
  
      <div class="form">
        <input 
          v-model="username" 
          placeholder="Enter username" 
          class="input"
          @keyup.enter="createUser" 
        />
        <select v-model="role" class="role-select">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button @click="createUser" class="btn">Create User</button>
      </div>
  
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useChatStore } from '~/stores/chat';
  import { ref } from 'vue';
  
  const username = ref('');
  const role = ref('user');
  const errorMessage = ref('');
  const chatStore = useChatStore();
  const router = useRouter();
  
  const createUser = () => {
    if (username.value.trim() === '') {
      errorMessage.value = 'Username cannot be empty.';
      return;
    }
  
    if (chatStore.state.value.users.some(user => user.username === username.value.trim())) {
      errorMessage.value = 'Username already exists. Please choose another.';
      return;
    }
  
    chatStore.addUser(username.value.trim(), role.value);
    router.push('/user');
  };
  </script>
  
  <style scoped>
  .create-user {
    text-align: center;
    margin-top: 50px;
  }
  .form {
    margin: 20px 0;
  }
  .input {
    padding: 10px;
    width: 80%;
    max-width: 300px;
    margin-right: 10px;
  }
  .role-select {
    padding: 10px;
    width: 80%;
    max-width: 300px;
    margin-right: 10px;
  }
  .btn {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  