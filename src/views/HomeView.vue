<template>
  <div class="grid place-items-center h-screen w-screen">
    <div class="text-center space-y-6">
      <h1
        class="text-4xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors flex items-center gap-2 select-none cursor-default"
      >
        Home Page
      </h1>
      <RouterLink
        class="base-btn flex justify-center items-center gap-2"
        to="/about"
      >
        <Icon icon="svg-spinners:blocks-wave" /> Go to About
      </RouterLink>
    </div>
  </div>
</template>
