<template>
  <button
    class="px-10 py-2 transition-colors duration-500 ease-in-out"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    buttonClasses() {
      return {
        default:
          'border border-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:outline-black',
      }[this.type]
    },
  },
}
</script>
