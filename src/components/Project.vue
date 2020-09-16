<template>
  <div
    class="project flex bg-gray-900 hover:bg-gray-800 rounded px-4 py-2 items-center cursor-pointer select-none"
    @click="openProject"
  >
    <div class="flex-1">
      <h3 class="text-gray-300 text-sm">
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-600">
        {{ project.path }}
      </p>
    </div>
    <div>
      <div
        title="close"
        class="px-2 -mr-1 text-gray-500 hover:text-white"
        @click.prevent.stop="removeProject"
      >
        <Icon
          icon="times"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    openProject() {
      this.$emit('open', this.project)
    },
    removeProject() {
      this.$emit('remove', this.project)
    },
  }
}
</script>
