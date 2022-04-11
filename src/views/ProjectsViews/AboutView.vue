<template>
<div class="container">
  <div class="about">
    <div class="header">
      <back-desktop />  
      <h1>All projects</h1>
      <ul>
        <li v-for="(card,index) in projectCards" :key="index">
          <projects-card
           :item="card"
           :style="{minWidth: '0'}"
          />
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import backDesktop from '../../components/Buttons/ProjectsBackDesktop.vue'
import ProjectsCard from '@/components/ProjectsBlock/ProjectsCard.vue'

  export default{
    name: 'Projects Page',
    components: {
      backDesktop,
      ProjectsCard
    },
    computed: {
      projectCards() {
        return this.$store.getters.projectCards
      },
    } 
  } 
</script>

<style lang="scss" scoped>
  .about {
    padding-block: 50px; 
  }
  h1 {
    margin-block: 25px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
</style>