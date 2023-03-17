<script setup lang="ts">
import type { PropType } from 'vue'
import type { Project } from './types/Projects'

const props = defineProps({
  item: {
    type: Object as PropType<Project>,
    required: true
  }
})

const imageUrl = new URL(`/src/assets/${props.item.img}.webp`, import.meta.url).href
</script>
<template>
  <li v-if="item.id % 2 == 0" class="grid grid-cols-2 items-center gap-x-10">
    <img :src="imageUrl" alt="" />
    <div>
      <h4 class="mb-3 text-4xl leading-[56px] font-bold">{{ item.title }}</h4>
      <p class="text-lg">{{ item.desc }}</p>
      <a :href="item.link" target="_blank" class="text-primary flex items-center gap-x-8 mt-[58px]">
        See project <img src="@/assets/arrow_right.svg" alt="arrow right" />
      </a>
    </div>
  </li>
  <li v-if="item.id % 2 !== 0" class="grid grid-cols-2 items-center gap-x-10">
    <div>
      <h4 class="mb-3 text-right text-4xl leading-[56px] font-bold">{{ item.title }}</h4>
      <p class="text-lg text-right">{{ item.desc }}</p>
      <div class="flex items-center justify-between">
        <div></div>
        <a
          :href="item.link"
          target="_blank"
          class="text-primary flex items-center gap-x-8 mt-[58px]"
        >
          <img src="@/assets/arrow_left.svg" alt="arrow left" /> See project
        </a>
      </div>
    </div>
    <img :src="imageUrl" alt="" />
  </li>
</template>
