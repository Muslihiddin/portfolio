<template>
<div class="projects-list">
    <ul :style="listLength">
        <li v-for="(card,index) in projectCards" :key="index">
            <projects-card 
             :item="card"
             :active="index == currentProjectIndex" 
             :style="listPosition"   
            />
        </li>
    </ul>
    <div class="projectsButtons">
        <div></div>
        <div>
            <button @click="prevSlide" :disabled="isDisabledPrev">&lt;</button>
            <button @click="nextSlideMobile" :disabled="isDisabledMob" class="nextSlideMobile">&gt;</button>
            <button @click="nextSlideDesktop" :disabled="isDisabledDesktop" class="nextSlideDesktop">&gt;</button>
        </div>
    </div> 
</div>    
</template>

<script>
import ProjectsCard from './ProjectsCard.vue'

export default {
    name: 'Projects List',
    components: {
        ProjectsCard
    },
    computed:{
        projectCards() {
           return this.$store.getters.projectCards
        },
        currentProjectIndex() {
            return this.$store.getters.currentProjectIndex
        },
        listLength() {
            return { width: this.projectCards.length * 100 + '%' }
        },
        listPosition() {
            return { transform: 'translateX(-'+ this.currentProjectIndex * 100 +'%)',
            transition: 'all 0.5s ease' }
        },
        isDisabledPrev() {
            if(this.currentProjectIndex == 0) return true
            else {false}
            },
        isDisabledMob() {
            if(this.currentProjectIndex == this.projectCards.length - 1) return true
            else {false}
        },
        isDisabledDesktop() {
            if(this.currentProjectIndex == this.projectCards.length - 2) return true
            else {false}
        } 
    },
    methods: {
        nextSlideMobile() {
            if (this.currentProjectIndex < this.projectCards.length -1) 
            this.$store.state.currentProjectIndex++
        },
        nextSlideDesktop() {
            if (this.currentProjectIndex < this.projectCards.length -2) 
            this.$store.state.currentProjectIndex++
        },
        prevSlide() {
            if (this.currentProjectIndex > 0) 
            this.$store.state.currentProjectIndex--
        }
        }
}
</script>

<style lang="scss" scoped>


   .projects-list {
       position: relative;
       z-index: 10;
   }
    ul {
        display: flex;
        gap: 0.5rem;
    }
        button {
        border: none;
        background: #fff;
        cursor: pointer;

        padding: 16px 20px;
        margin-left: 7px;
    }

    .projectsButtons {
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;
        margin-top: 25px;
    }
    .nextSlideDesktop {
        display: inline-block;
    }

    .nextSlideMobile {
        display: none;
    }

    @media screen and(max-width: 1275px) {

        .nextSlideDesktop {
            display: none;
        }
        .nextSlideMobile {
            display: inline-block;
        }
    }

</style>