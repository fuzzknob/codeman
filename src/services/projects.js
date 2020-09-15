export function setProjectList(projects) {
  localStorage.setItem('projects', JSON.stringify(projects))
}

export function getProjectList() {
  const projects = localStorage.getItem('projects')
  if (!projects) {
    setProjectList([])
    return []
  }
  return JSON.parse(projects)
}
