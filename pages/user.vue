<template>
  <div class="flex justify-between">
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
      <p v-else>(There Is no User!)</p>
    </div>

    <div class="create-user">
      <h1>Create User</h1>
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

      
      <h3>Select a user to chat with:</h3>
      <select v-model="selectedUser">
        <option 
          v-for="user in chatStore.state.value.users" 
          :key="user.username" 
          :value="user.username">
          {{ user.username }}
        </option>
      </select>

      <h3>Select your role:</h3>
      <select v-model="chatStore.state.value.currentRole">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button @click="startChat" class="btn">Start Chat</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '~/stores/chat';
const router = useRouter();
const chatStore = useChatStore();
const username = ref('');
const role = ref('user');
const selectedUser = ref(null);
const errorMessage = ref('');

const createUser = () => {
  if (username.value.trim() === '') {
    errorMessage.value = 'Username cannot be empty.';
    return;
  }

  if (chatStore.state.value.users.some(user => user.username === username.value.trim())) {
    errorMessage.value = 'Username already exists.';
    return;
  }

  chatStore.addUser(username.value.trim(), role.value);
  username.value = '';
  role.value = 'user';
};

const startChat = () => {
  if (!selectedUser.value) {
    errorMessage.value = 'Please select a user to chat with.';
    return;
  }

  chatStore.state.value.selectedUser = selectedUser.value;
  errorMessage.value = '';
  router.push('/chat');
};
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



 