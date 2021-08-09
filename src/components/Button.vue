<template>
  <button
    class="bg-gray-200 hover:bg-gray-300 text-black rounded px-3 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-xs leading-tight outline-none border-0"
    @click.prevent="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    handleClick() {
      this.$emit('tap')
    }
  }
}
</script>
