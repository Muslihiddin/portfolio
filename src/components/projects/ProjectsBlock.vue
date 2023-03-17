<script setup lang="ts">
import ProjectsCard from './ProjectsCard.vue'
import type { Project } from './types/Projects'
import { ref } from 'vue'

const projects = ref<Project[]>([
  {
    id: 0,
    title: 'Top Breyns',
    desc: 'Breve descripcion del proyecto, amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: 'topbreyns',
    link: 'https://example.com'
  },
  {
    id: 1,
    title: 'Diet Mumble',
    desc: 'Side-project wich can be used as a simple-tracker of meals/restaurants you want to try.',
    img: '1',
    link: 'https://example.com'
  }
])
</script>
<template>
  <div class="relative mt-[250px] z-10">
    <h3 class="font-bold text-4xl leading-[54px]">Latest works</h3>
    <ul class="mt-[45px] flex flex-col gap-y-[120px]">
      <ProjectsCard v-for="item in projects" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
