<template>
    <div class="burgerMenu" @click.prevent="toggle">
      <span class="top" :class="{ open: this.$store.state.isOpen }" :style="[this.$store.state.isOpen ? { 'background-color': '#fff' } : { 'background-color': 'var(--black)' },]"
      ></span>
      <span class="bottom" :class="{ open: this.$store.state.isOpen }" :style="[this.$store.state.isOpen ? { 'background-color': '#fff' } : { 'background-color': 'var(--black)' },]"
      ></span>
    </div>
    <transition name="fade-down">
    <div class="responsive-links" v-show="this.$store.state.isOpen">
      <ul>
        <li><a href="#aboutSection" @click="toggle">About</a></li>
        <li><a href="#services" @click="toggle">Services</a></li>
        <li><a href="#projects" @click="toggle">Projects</a></li>
        <li><a href="#blogs" @click="toggle">Blog</a></li>
        <li>
          <a href="#">Book a call<svg id="arrow" width="21" height="21" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.72837 5.50978L5.57767 1.35907L6.67183 0.2649L12.6905 6.28359L6.67183 12.3023L5.57767 11.2081L9.72837 7.0574H0.30957V5.50978H9.72837Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'Responsive Header',
  methods: {
    toggle() {
      this.$store.state.isOpen = !this.$store.state.isOpen
    },
  },
};
</script>

<style lang="scss" scoped>

.responsive-links {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--orange);
  z-index: 1;
}

ul {
  li {
    a {
      font-size: 42px;
      font-weight: 700;

      display: block;
      margin: 20px 0;
    }
  }
}

.burgerMenu {
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
}
span {
  display: block;
  width: 20px;
  height: 2px;
  background: black;
}
.top {
  margin-bottom: 3px;
  transition: all 0.3s ease-in-out;
}
.bottom {
  margin-top: 3px;
  transition: all 0.3s ease-in-out;
}

.top.open {
  transform: rotate(45deg) translate(5px, 5px);
}

.bottom.open {
  transform: rotate(-45deg) translate(1px, -1px);
}

// transition 
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
}

@media screen and (min-width: 992px){
  .burgerMenu {
    display: none;
  }

  .responsive-links {
    display: none;
  }

}
</style>
