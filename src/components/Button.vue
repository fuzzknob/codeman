<template>
  <button
    class="rounded px-3 py-2 bg-gray-700 hover:bg-gray-600 text-xs text-white leading-tight outline-none border-0"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
