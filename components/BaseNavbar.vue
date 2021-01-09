<template>
  <nav class="flex items-center justify-between">
    <div class="z-50">
      <h1 class="text-white font-semibold text-2xl">loopstudios</h1>
    </div>

    <button
      class="block md:hidden focus:outline-none focus:ring-2 focus:ring-purple-600 z-50"
      @click="toggle"
    >
      <svg
        class="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
          v-if="isOpen"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
          v-else
        />
      </svg>
    </button>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6">
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">About</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Careers</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Events</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Products</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Suports</NuxtLink>
      </li>
    </ul>

    <!-- Mobile Menu -->
    <ul
      class="absolute inset-0 md:hidden pt-32 px-4 space-y-4 bg-black"
      v-if="isOpen"
    >
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">About</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Careers</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Events</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Products</NuxtLink>
      </li>
      <li class="text-white hover:opacity-75">
        <NuxtLink :to="{ name: 'index' }">Suports</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped></style>
