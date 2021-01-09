<template>
  <div>
    <BaseHeader />

    <main class="px-4 py-24 container mx-auto">
      <Nuxt />
    </main>

    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
