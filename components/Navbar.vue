<template>
  <header class="border-b font-[sans-serif] tracking-wide relative z-50">
    <!-- Top Notice Section -->
    <section class="py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-10">
      <p class="text-sm font-medium">
        Welcome to ChatPort, your group chat portal for seamless conversations!
      </p>
    </section>

    <!-- Navigation Bar -->
    <div class="flex flex-wrap items-center gap-4 px-10 py-4 bg-white shadow-md min-h-[70px] relative">
      <div
        id="collapseMenu"
        class="w-full max-lg:hidden lg:block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
      >
        <div
          class="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
        >
          <!-- Logo Section -->
          <a
            href="javascript:void(0)"
            class="m-auto absolute lg:left-2/4 lg:top-1/4 lg:-translate-x-1/2 max-lg:hidden"
          >
            <h1 class="text-2xl font-bold tracking-wide text-indigo-700 hover:text-indigo-900"><nuxt-link to="/">CHATPORT</nuxt-link></h1>
          </a>

          <!-- Navigation Links -->
          <ul class="lg:flex lg:space-x-8 max-lg:space-y-4 max-lg:mt-6 ml-auto mr-8">
            <li class="max-lg:border-b max-lg:py-3">
              <NuxtLink
                to="/"
                class="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200"
              >
                Home
              </NuxtLink>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <NuxtLink
                to="/user"
                class="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200"
              >
                User
              </NuxtLink>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <NuxtLink
                to="/chat"
                class="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200"
              >
                Chat
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </header>
</template>
