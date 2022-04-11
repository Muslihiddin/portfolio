<template>
  <div class="projects" id="projects">
    <div class="text">
      <h3>projects</h3>
      <h2>I bring results.</h2>
      <h2>My clients are proof.</h2>
    </div>
    <div class="button">
      <router-link :to="{ name:'about' }" class="blackBtn">View all projects</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .projects {
    margin: 100px 0 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: #B16CEA;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 992px) {
    .projects {
      flex-direction: column;
      align-items: flex-start;
      .text {
        margin-bottom: 50px;
      }
    }
  }
</style>