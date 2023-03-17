<script setup lang="ts">
import BaseNavbar from '@/components/BaseNavbar.vue'
import IntroBlock from '@/components/IntroBlock.vue'
import ExperienceBlock from '@/components/experience/ExperienceBlock.vue'
import ProjectsBlock from '@/components/projects/ProjectsBlock.vue'
import ConnectBlock from '@/components/ConnectBlock.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>
<template>
  <div class="bg-background text-white font-poppins px-[90px]">
    <BaseNavbar />
    <main>
      <IntroBlock />
      <ExperienceBlock />
      <ProjectsBlock />
      <ConnectBlock />
    </main>
    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>
