<template>
  <header>
    <div class="px-4 container mx-auto">
      <BaseNavbar class="pt-10" />

      <div class="md:w-1/2 lg:w-1/2 py-16">
        <h1
          class="p-2 md:p-4 border border-white text-5xl lg:text-6xl font-light text-white uppercase tracking-widest leading-tight"
        >
          Immersive<br />experiences<br />that deliver
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>

<style lang="css" scoped>
header {
  background-image: url('~assets/images/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
