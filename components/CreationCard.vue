<template>
  <NuxtLink :to="creation.link" class="group">
    <div
      class="absolute inset-0 bg-gray-900 bg-opacity-50 hover:bg-white hover:bg-opacity-75"
    ></div>

    <img
      :src="creation.imageSrc"
      :alt="creation.title"
      class="w-full h-full object-cover object-center"
    />

    <div class="absolute bottom-0 w-56 md:w-40 ml-8 mb-12 md:mb-8">
      <NuxtLink
        :to="creation.link"
        class="text-5xl md:text-3xl font-light leading-none uppercase text-white opacity-75 group-hover:text-gray-900 group-hover:opacity-100"
      >
        {{ creation.title }}
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CreationCard',

  props: {
    creation: {
      type: Object,
      require: true,
    },
  },
}
</script>
