


<template>
    <div>
      <h2>Chatting with: {{ chatStore.state.value.selectedUser }}</h2>
      <div class="chat-box">
        <div
          v-for="msg in chatStore.state.value.userMessages.filter(
            m => (m.from === chatStore.state.value.currentUser && m.to === chatStore.state.value.selectedUser) || 
                 (m.from === chatStore.state.value.selectedUser && m.to === chatStore.state.value.currentUser)
          )"
          :key="msg.message"
          :class="msg.role === 'admin' ? 'message admin' : 'message user'"
        >
          <span>{{ msg.message }}</span>
        </div>
      </div>
  
      <input 
        v-model="message" 
        placeholder="Enter your message" 
        class="chat-input"
        @keyup.enter="sendMessage" 
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useChatStore } from '~/stores/chat.js';
  
  const chatStore = useChatStore();
  const message = ref('');
  
  const sendMessage = () => {
    if (message.value.trim()) {
      console.log(chatStore.state)
      chatStore.sendMessage(
        chatStore.state.value.currentUser,
        chatStore.state.value.selectedUser,
        chatStore.state.value.currentRole,
        message.value.trim()
      );
      message.value = '';
    }
  };
  </script>
  
  <!-- <style scoped>
  .chat-box {
    border: 1px solid #ccc;
    padding: 10px;
    height: 200px;
    overflow-y: auto;
  }
  .message {
    margin: 5px 0;
  }
  .message.admin {
    text-align: right;
    color: blue;
  }
  .message.user {
    text-align: left;
    color: green;
  }
  .chat-input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
  }
  </style> -->
  




 