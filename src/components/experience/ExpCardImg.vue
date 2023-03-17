<script setup lang="ts">
const props = defineProps({
  img: {
    required: true
  }
})

console.log(props.img)

const imgUrl = new URL(`/src/assets/img/${props.img}.svg`, import.meta.url).href
</script>
<template>
  <img :src="imgUrl" />
</template>
