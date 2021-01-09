<template>
  <div>
    <header>
      <div class="px-4 container mx-auto">
        <BaseNavbar class="pt-10" />

        <div class="md:w-1/2 lg:w-1/3 py-16">
          <h1
            class="p-2 md:p-4 border border-white text-4xl font-light text-white uppercase tracking-widest leading-tight"
          >
            Immersive<br />experiences<br />that deliver
          </h1>
        </div>
      </div>
    </header>

    <main class="px-4 py-24 container mx-auto">
      <Nuxt />
    </main>

    <footer class="bg-black py-10">
      <div class="px-4 container mx-auto text-center md:text-left">
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0"
        >
          <div class="space-y-6">
            <Logo />

            <ul class="flex space-x-6">
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
                <img
                  src="~/assets/images/icon-twitter.svg"
                  alt="icon twitter"
                />
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
  </div>
</template>

<style>
header {
  background-image: url('~assets/images/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
