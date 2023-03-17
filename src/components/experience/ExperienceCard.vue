<script setup lang="ts">
import type { PropType } from 'vue'
import ExpCardImg from './ExpCardImg.vue'

defineProps({
  experiences: {
    type: Array as PropType<
      { id: string; companyName: string; startYear: string; endYear: string; img: string }[]
    >
  }
})
</script>
<template>
  <div
    v-for="item in experiences"
    :key="item.id"
    class="shade-gradient rounded-tl-2xl rounded-tr-2xl opacity-80 py-3 px-6 w-[510px] z-10"
  >
    <header class="flex justify-between">
      <div class="flex gap-x-2">
        <span class="w-2 h-2 rounded-full bg-[#FF5F56] inline-block"></span>
        <span class="w-2 h-2 rounded-full bg-[#FFBD2E] inline-block"></span>
        <span class="w-2 h-2 rounded-full bg-[#27C93F] inline-block"></span>
      </div>
      <div></div>
    </header>
    <main class="pt-[76px] px-[42px] min-h-[420px]">
      <h3 class="text-sm text-primary flex items-center gap-x-3">
        {{ item.startYear }} - {{ item.endYear }}
        <span class="text-lg text-white">{{ item.companyName }}</span>
      </h3>
      <div class="mt-[54px] flex items-center justify-center">
        <ExpCardImg :img="item.img" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.shade-gradient {
  background: linear-gradient(180deg, #171a1b 0%, rgba(23, 26, 27, 0) 100%);
}
</style>
