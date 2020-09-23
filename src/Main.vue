<template>
  <div class="bg-black text-white">
    <div class="p-6">
      <Button @click="openFolder">
        <Icon icon="folder-open" />
      </Button>
    </div>
    <div class="flex px-6 flex-col project-wrapper overflow-y-auto">
      <template v-if="projects.length">
        <Project
          v-for="project in projects"
          :key="project.id"
          class="mb-3"
          :project="project"
          @open="openProject"
          @remove="removeProject"
        />
      </template>
      <div
        v-else
        class="p-4 text-gray-400 text-center"
      >
        No projects to show
      </div>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Project from './components/Project.vue'
import { openCode, openProjectDirectory } from './libs/code'
import { setProjectList, getProjectList } from './services/projects'

export default {
  name: 'Main',
  components: {
    Button,
    Project,
  },
  data() {
    return {
      isLoading: false,
      projects: [],
    }
  },
  async created() {
    this.projects = await getProjectList()
  },
  methods: {
    addProject(project) {
      this.projects = [project].concat(this.projects)
      setProjectList(this.projects)
    },
    removeProject(targetProject) {
      this.projects = this.projects.filter((project) => project.id !== targetProject.id)
      setProjectList(this.projects)
    },
    async openProject(project) {
      try {
        await openCode(project.path)
      } catch(e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    async openFolder() {
      const project = await openProjectDirectory()
      if (!project) return
      const existingProject = this.projects.find(target => target.path === project.path)
      if (existingProject) {
        this.openProject(existingProject)
        return
      }
      this.addProject(project)
      this.openProject(project)
    },
  },
}
</script>
