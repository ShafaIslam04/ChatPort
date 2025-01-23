<!-- <template>
     <div class="bg-white rounded-lg shadow-md p-6">
        <h2 v-if="chatStore?.currentUser" class="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {{ chatStore?.currentUser}}
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
</template>

<script lang="ts" setup>
 const chatStore = useChatStore(); 
</script>

<style>

</style> -->
