<template>
  <div class="w-full mt-20 space-y-24">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img src="~assets/images/desktop/image-interactive.jpg" />
      </div>

      <div
        class="text-center lg:text-left lg:px-16 pt-16 lg:mt-auto lg:-ml-20 bg-white"
      >
        <h2 class="uppercase text-gray-900 text-5xl font-light leading-none">
          The leader in interactive VR
        </h2>

        <p class="mt-8 text-sm text-gray-600">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>

    <div class="space-y-16">
      <div class="flex item-center justify-center md:justify-between">
        <h2 class="uppercase text-gray-900 text-5xl font-light leading-none">
          Our creations
        </h2>

        <BaseButton class="hidden md:block uppercase">See All</BaseButton>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
      >
        <CreationCard
          v-for="(creation, index) in creations"
          :key="index"
          :creation="creation"
          class="relative h-64 md:h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creations: [
        {
          title: 'Deep earth',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'Night arcade',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'Soccer team VR',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'The grid',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'From up above VR',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'Pocket borealis',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'The curiosity',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
        {
          title: 'Make it fisheye',
          imageSrc: require('~/assets/images/desktop/image-grid.jpg'),
          link: {
            name: 'index',
          },
        },
      ],
    }
  },
}
</script>
