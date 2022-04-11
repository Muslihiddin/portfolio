<template>
    <projects-header />
    <projects-list />
</template>

<script>
import ProjectsHeader from "./ProjectsBlockHeader.vue"
import ProjectsList from './ProjectsListComponent.vue'

export default {
    name:'Projects Block',
    components: {
        ProjectsHeader,
        ProjectsList
    }
}
</script>

