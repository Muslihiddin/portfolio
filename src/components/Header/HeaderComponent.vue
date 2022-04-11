<template>
  <div class="header">
    <div class="logo">
      <h1><a href="#" :style="[this.$store.state.isOpen ? {'color':'#fff'} : {'color':'var(--black)'}]">Portfolio Creator<span></span></a></h1>
    </div>
    <div class="nav-links">
      <ul>
        <li><a href="#aboutSection">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li> 
        <li><a href="#blogs">Blog</a></li>
        <li><a href="https://telegram.me/LookingAtTheMoon" target="_blank">Message Me
            <svg id="arrow" width="21" height="21" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <responsive-header />
  </div>
</template>

<script>
import ResponsiveHeader from "./ResponsiveHeaderComponent.vue";

export default {
  name: 'Header',
  components: { ResponsiveHeader },
  data() {
    return {
      isOpen: this.$store.state.isOpen
    }
  }
};
</script>

<style lang="scss" scoped>


.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 45px;

  background: #fff;
  height: 50px;
}

.logo {
  span {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: linear-gradient(
      89.94deg,
      #b16cea -21.68%,
      #ff5e69 47.38%,
      #ff8a56 99.43%,
      #ffa84b 132.45%
    );
  }
  z-index: 999;
}

.nav-links ul {
  display: flex;
  align-items: center;
  li a {
    display: inline-block;
    margin-left: 40px;
    position: relative;
      &:hover path, &:hover {
      color: var(--orange);
      fill: var(--orange);
      transition: all 0.1s ease-in-out;
    }
    svg {
      position: absolute;
      top: 0px;
      padding-left: 8px;
    }
  }
}

@media screen and (max-width: 992px){
  .header {
    margin-top: 0;
    padding: 10px;
  }
  .nav-links {
    display: none;
  }

}
</style>
