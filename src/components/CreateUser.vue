// import { ref, onMounted } from 'vue';

// export const useChatStore = () => {
//   const state = ref({
//     users: [], 
//     currentUser: null,
//     currentRole: 'user', 
//     selectedUser: null, 
//     Usermessages: [],
//     adminMessages:[]
//   });

//   onMounted(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users'));
//     if (storedUsers) {
//       state.value.users = storedUsers;
//     }
//   });

//   const addUser = (username, role = 'user') => {
//     if (!state.value.users.some(user => user.username === username)) {
//       const newUser = { username, role };
//       state.value.users.push(newUser);

//       localStorage.setItem('users', JSON.stringify(state.value.users));
//     }

//     state.value.currentUser = username;
//     state.value.currentRole = role;
//   };

//   onMounted(() => {
//     const storedMessages = JSON.parse(localStorage.getItem('Usermessages'));
//     if (storedMessages) {
//       state.value.Usermessages = storedMessages;
//     }
//   });

//   const sendMessage = (from, to, role, message) => {
//     if (message.trim()) {
//       state.value.Usermessages.push({ from, to, role, message });
//       localStorage.setItem('Usermessages',JSON.stringify(state.value.Usermessages))
//     }

   

   

    
//   };

//   onMounted(()=>{
//     const storedAdminMesasage = JSON.parse(localStorage.getItem('adminMessage'))
//     if(storedAdminMesasage){
//       state.value.adminMessages = storedAdminMesasage 
//     }
//   })

//   const sendAdminMessage = (from, to,role,message)=>{
//     if(message.trim()){
//       state.value.adminMessages.push({from,to,role,message})
//       localStorage.setItem('adminMessage',JSON.stringify(state.value.adminMessages))
//     }
//   }

//   return {
//     state,
//     addUser,
//     sendAdminMessage,
//     sendMessage,
    
//   };
// };
