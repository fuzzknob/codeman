<template>
  <div class="bg-black text-white">
    <div class="p-6">
      <Button @click="openFolder">
        <Icon icon="folder-open" />
      </Button>
    </div>
    <div class="flex px-6 flex-col project-wrapper overflow-y-auto">
      <Project
        class="mb-2"
        :project="{
          name: 'RUSTY',
          path: '/home/fuzzknob/Projects/Tries/rusty'
        }"
        @open="openProject"
        @remove="removeProject"
      />
    </div>
  </div>
</template>

<script>
import Button from './components/Button'
import Project from './components/Project'
import { openCode } from './libs/code'

export default {
  name: 'Main',
  components: {
    Button,
    Project,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async openProject(project) {
      try {
        await openCode(project.path)
      } catch(e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    removeProject(project) {
      console.log(project)
    },
    async openFolder() {

    },
  },
}
</script>
