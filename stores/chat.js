
import { getData, setData } from './../composables/UseFetch';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useChatStore = defineStore('chat',()=>{
        const users = ref([]);
        const currentUser = ref(null);
        const currentRole = ref('user');
        const selectedUser = ref(null);
        const userMessages = ref([])

       users.value = getData('users') || [],
       currentUser.value = getData('currentUser') || null,
        selectedUser.value = getData('selecteduser') || null,
        userMessages.value = getData('userMessages') || []
       
      const addUser = (username, role = 'user') => {
            if (!users.value.some(user => user.username === username)) {
              const newUser = { username, role };
              users.value.push(newUser);
              setData('users',JSON.stringify(users.value))
              
            }
            currentRole.value = role;
            setData('currentUser', JSON.stringify(username));
          };
        
          const sendMessage = (from, to, role, message) => {
                if (message.trim()) {
                  userMessages.value.push({ from, to, role, message });
                  setData('userMessages', JSON.stringify(userMessages.value));
                }
              };

       return {
        users,
        currentUser,
        currentRole,
        selectedUser,
        userMessages,
        addUser,
        sendMessage
       }
})










