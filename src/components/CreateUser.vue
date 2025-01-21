<template>
    
       <div>
        <h1>Welcome To The ChatApp</h1>
        <p>Create Your UserName and assign a role </p>
        <div>
            <form>
                <input 
                v-model="userName"
                placeholder="Enter Your UserName"
                @keyup.enter="createUser"
                />
            </form>
            <select>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button>Create User</button>

        </div>
       </div> 
    
</template>

<script>
import {ref} from 'vue'
import { useChatStore } from '/stores/chat';
import { useRouter } from 'vue-router';
const userName = ref('')
const role = ref('user')
const chatStore = useChatStore()
const router = useRouter()


</script>