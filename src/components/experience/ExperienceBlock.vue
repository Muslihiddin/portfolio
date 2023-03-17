<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'
import { ref } from 'vue'

const experiences = ref([
  {
    id: '0',
    companyName: 'Wasaf',
    startYear: '2021',
    endYear: '2023',
    img: 'WASAF'
  },
  {
    id: '1',
    companyName: 'Lifetech',
    startYear: '2020',
    endYear: '2021',
    img: 'lifetech'
  }
])
</script>
<template>
  <div class="relative mt-[290px]">
    <h2 class="text-4xl leading-[54px] font-bold">Experience</h2>
    <div class="mt-[80px] flex justify-evenly">
      <ExperienceCard :experiences="experiences" />
    </div>
    <div class="conic-gradient absolute w-[100%] h-[100%] blur-[750px] pointer-events-none"></div>
  </div>
</template>
<style scoped>
.conic-gradient {
  background: conic-gradient(from 180deg at 50% 50%, #00ffe0 0deg, #7000ff 360deg);
}
</style>
