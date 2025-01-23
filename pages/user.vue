<template>
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
     
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 v-if="chatStore.value?.currentUser" class="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {{ chatStore.value?.currentUser}}
        </h2>
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Users List</h3>

        <div v-if="chatStore.users?.length > 0" class="space-y-3">
          <div
            v-for="user in chatStore?.users"
            :key="user.username"
            class="flex items-center justify-between p-4 rounded-lg transition-all duration-200"
            :class="user.role === 'admin' ? 'bg-indigo-50' : 'bg-gray-50'"
          >
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center"
                :class="user.role === 'admin' ? 'bg-indigo-200' : 'bg-gray-200'">
                <span class="text-lg font-semibold">{{ user.username[0].toUpperCase() }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-800">{{ user.username }}</span>
                <span class="ml-2 px-2 py-1 text-xs rounded-full"
                  :class="user.role === 'admin' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-200 text-gray-700'"
                >
                  {{ user.role }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p v-else class="text-gray-500 text-center py-4">No users available
          
        </p>
      </div>

      
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Create User</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              v-model="username" 
              placeholder="Enter username" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              @keyup.enter="createUser" 
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
              v-model="role" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button 
            @click="createUser" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Create User
          </button>

          <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>

          <div class="border-t border-gray-200 my-6 pt-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Start a Chat</h3>
            
            <div class="space-y-4">
              <button 
                class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
              <NuxtLink to="/chat">Start Chat</NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '~/stores/chat';
const chatStore = useChatStore();
const username = ref('');
const role = ref('user');
const errorMessage = ref('');

const createUser = () => {
  if (username.value.trim() === '') {
    errorMessage.value = 'Username cannot be empty.';
    return;
  }

  if (chatStore?.value?.users.some(user => user.username === username.value.trim())) {
    errorMessage.value = 'Username already exists.';
    return;
  }

  chatStore.addUser(username.value.trim(), role.value);
  username.value = '';
  role.value = 'user';
};
</script>





 