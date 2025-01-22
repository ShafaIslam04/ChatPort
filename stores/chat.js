

import { ref, onMounted } from 'vue';

export const useChatStore = () => {
  
  const state = ref({
    users: [], 
    currentUser: null, 
    currentRole: 'user', 
    selectedUser: null,
    userMessages: [], 
    adminMessages: []
  });

  
  onMounted(() => {
    
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      state.value.users = storedUsers;
    }

    
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) {
      state.value.currentUser = storedCurrentUser;
    }

    
    const storedSelectedUser = localStorage.getItem('selectedUser');
    if (storedSelectedUser) {
      state.value.selectedUser = storedSelectedUser;
      console.log(state.value.selectedUser)
    }

   
    const storedUserMessages = JSON.parse(localStorage.getItem('userMessages'));
    if (storedUserMessages) {
      state.value.userMessages = storedUserMessages;
    }

    
    const storedAdminMessages = JSON.parse(localStorage.getItem('adminMessages'));
    if (storedAdminMessages) {
      state.value.adminMessages = storedAdminMessages;
    }
  });

  
  const addUser = (username, role = 'user') => {
    if (!state.value.users.some(user => user.username === username)) {
      const newUser = { username, role };
      state.value.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.value.users));
    }
    state.value.currentUser = username;
    state.value.currentRole = role;
    localStorage.setItem('currentUser', username);
  };

  
  const sendMessage = (from, to, role, message) => {
    if (message.trim()) {
      state.value.userMessages.push({ from, to, role, message });
      localStorage.setItem('userMessages', JSON.stringify(state.value.userMessages));
    }
  };

  
  const sendAdminMessage = (from, to, role, message) => {
    if (message.trim()) {
      state.value.adminMessages.push({ from, to, role, message });
      localStorage.setItem('adminMessages', JSON.stringify(state.value.adminMessages));
    }
  };

  return {
    state,
    addUser,
    sendMessage,
    sendAdminMessage,
  };
};





