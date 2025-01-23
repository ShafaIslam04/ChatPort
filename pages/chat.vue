<template>
  <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg min-h-[80vh] flex flex-col">
  
    <div class="border-b p-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-lg">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <span class="text-xl font-bold text-indigo-600">
              {{ chatStore.currentUser[0].toUpperCase() }}
            </span>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">
              {{ chatStore?.currentUser }}
            </h2>
          </div>
        </div>
        
        <div class="flex space-x-4">
          
          <select 
            v-on:change="handleSelectedUser"
            v-model="selectedUser"
            class="px-4 py-2 bg-white rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">Select User</option>
            <option 
              v-for="user in chatStore?.users" 
              :key="user.username"
              :value="user.username"
            >
              {{ user.username }}
            </option>
          </select>

          
          <select 
            v-model="currentRole"
            class="px-4 py-2 bg-white rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </div>

    
    <div class="flex-1 p-4 overflow-y-auto bg-gray-50" style="min-height: 500px">
      <div class="space-y-4">
        <div
          v-for="msg in filteredMessages"
          :key="msg.message"
          class="flex"
          :class="msg.role === 'admin' ? 'justify-end' : 'justify-start'"
        >
          
          <div class="flex flex-col max-w-[75%] space-y-1">
            <span class="text-xs text-gray-500 px-2" 
              :class="msg.role === 'admin' ? 'text-right' : 'text-left'"
            >
              {{ msg.from }} • {{ msg.role }}
            </span>
            <div 
              class="px-4 py-3 rounded-2xl shadow-sm"
              :class="msg.role === 'admin' 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 rounded-bl-none'"
            >
              <p class="text-sm break-words">{{ msg.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="p-4 bg-white border-t">
      <div class="flex items-center space-x-4">
        <input 
          v-model="message" 
          placeholder="Type your message here..." 
          class="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          @keyup.enter="sendMessage" 
        />
        <button 
          @click="sendMessage"
          class="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2 shadow-md"
        >
          <span>Send</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// import { useChatStore } from '~/stores/chat.js';

// const chatStore = useChatStore();
import { useChatStore } from '/stores/chat';
const chatStore = useChatStore();
const message = ref('');
const currentRole = ref('user'); 
const selectedUser = ref('');


const filteredMessages = computed(() => {
  if (!selectedUser.value) return chatStore.userMessages;
  return chatStore.userMessages.filter(
    m => m.from === selectedUser.value || m.to === selectedUser.value
  );
});
const handleSelectedUser = ()=>{
        chatStore.currentUser = selectedUser.value ;
}

const sendMessage = () => {
  if (message.value.trim()) {
    chatStore.sendMessage(
      selectedUser.value || chatStore.value.currentUser,
      'all',
      currentRole.value,
      message.value.trim()
    );
    message.value = '';
  }
};
</script>

 