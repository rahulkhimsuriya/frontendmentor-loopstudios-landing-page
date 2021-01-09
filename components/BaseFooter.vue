<template>
  <footer class="bg-black py-10">
    <div class="px-4 container mx-auto text-center md:text-left">
      <div
        class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0"
      >
        <div class="space-y-6">
          <Logo />

          <ul class="flex space-x-2 md:space-x-6">
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
        </div>

        <div class="space-y-6">
          <ul
            class="flex items-center justify-center md:justify-start space-x-6"
          >
            <li class="text-white hover:opacity-75 cursor-pointer">
              <img
                src="~/assets/images/icon-facebook.svg"
                alt="icon facebook"
              />
            </li>
            <li class="text-white hover:opacity-75 cursor-pointer">
              <img src="~/assets/images/icon-twitter.svg" alt="icon twitter" />
            </li>
            <li class="text-white hover:opacity-75 cursor-pointer">
              <img
                src="~/assets/images/icon-pinterest.svg"
                alt="icon pinterest"
              />
            </li>
            <li class="text-white hover:opacity-75 cursor-pointer">
              <img
                src="~/assets/images/icon-instagram.svg"
                alt="icon instagram"
              />
            </li>
          </ul>

          <p class="text-sm text-white opacity-50">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
}
</script>
