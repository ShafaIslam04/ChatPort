import { reactive, ref, onMounted } from 'vue';

export const useChatStore = () => {
  
  const state = ref({
    users: [], 
    currentUser: null,
  });

  
  const initialize = () => {
    if (process.client) {
      const storedUsers = JSON.parse(localStorage.getItem('users'));
      if (storedUsers) {
        state.users = storedUsers;
      }
    }
  };

  
  const addUser = (username, role = 'user') => {
    if (!state.users.some(user => user.username === username)) {
      const newUser = { username, role };
      state.users.push(newUser);

      
      if (process.client) {
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    }
    state.currentUser = username;
  };


  onMounted(() => {
    initialize();
  });

  
  return {
    state,
    initialize,
    addUser,
  };
};
