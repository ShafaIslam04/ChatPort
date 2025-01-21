import { ref, onMounted } from 'vue';

export const useChatStore = () => {
  const state = ref({
    users: [],
    currentUser: null,
  });

  onMounted(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      state.value.users = storedUsers;
    }
  });

  const addUser = (username, role = 'user') => {
    if (!state.value.users.some(user => user.username === username)) {
      const newUser = { username, role };
      state.value.users.push(newUser);

      
      localStorage.setItem('users', JSON.stringify(state.value.users));
    }

    state.value.currentUser = username;
  };

  return {
    state,
    addUser,
  };
};
