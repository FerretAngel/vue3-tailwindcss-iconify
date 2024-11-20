<template>
  <div class="grid place-items-center h-screen w-screen">
    <div class="text-center space-y-6">
      <h1
        class="text-4xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors"
      >
        Home Page
      </h1>
      <RouterLink
        class="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
        to="/about"
      >
        Go to About
      </RouterLink>
    </div>
  </div>
</template>
